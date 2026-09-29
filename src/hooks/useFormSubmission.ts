import React, { useCallback, useRef, useState } from 'react';
import { sendFormSubmission, type FormSubmission } from '../services/web3forms';
import { getRetryAfterMs, recordSubmission, type RateLimitConfig } from '../utils/rateLimiter';

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

// Shared by every form on the site so switching forms doesn't bypass the limit.
const RATE_LIMIT: RateLimitConfig = {
  key: 'apex:form-submissions',
  maxSubmissions: 3,
  windowMs: 60 * 60 * 1000,
  cooldownMs: 60 * 1000,
};

const FALLBACK_ERROR =
  "We couldn't send your request. Please try again, or email us directly at audit@apexmedicalbilling.com.";

const formatWait = (ms: number) => {
  const minutes = Math.ceil(ms / 60_000);
  return minutes <= 1 ? 'a minute' : `${minutes} minutes`;
};

export const useFormSubmission = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const inFlight = useRef(false);

  const submit = useCallback(
    async (submission: FormSubmission) => {
      if (inFlight.current) return;

      // Only bots fill the hidden field; fake success so they don't retry.
      if (honeypot) {
        setStatus('success');
        return;
      }

      const retryAfterMs = getRetryAfterMs(RATE_LIMIT);
      if (retryAfterMs > 0) {
        setStatus('error');
        setErrorMessage(
          `You've already sent us a request recently. Please wait ${formatWait(retryAfterMs)} before submitting again.`,
        );
        return;
      }

      inFlight.current = true;
      setStatus('submitting');
      setErrorMessage(null);
      try {
        await sendFormSubmission(submission);
        recordSubmission(RATE_LIMIT);
        setStatus('success');
      } catch (error) {
        console.error('Form submission failed:', error);
        setStatus('error');
        setErrorMessage(FALLBACK_ERROR);
      } finally {
        inFlight.current = false;
      }
    },
    [honeypot],
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setErrorMessage(null);
  }, []);

  // Spread onto a hidden <input>; real users never see or fill it.
  const honeypotProps: React.InputHTMLAttributes<HTMLInputElement> = {
    type: 'text',
    name: 'company_website',
    value: honeypot,
    onChange: (e) => setHoneypot(e.target.value),
    tabIndex: -1,
    autoComplete: 'off',
    'aria-hidden': true,
    className: 'hidden',
  };

  return {
    submit,
    status,
    isSubmitting: status === 'submitting',
    isSuccess: status === 'success',
    errorMessage,
    reset,
    honeypotProps,
  };
};
