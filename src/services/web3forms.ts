const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export interface FormSubmission {
  /** Subject line of the notification email you receive. */
  subject: string;
  /** Sender name shown in your inbox, e.g. which form it came from. */
  fromName: string;
  /** Address used when you hit "Reply" on the notification email. */
  replyTo?: string;
  /** Human-readable label → value pairs listed in the email body. */
  fields: Record<string, string>;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export const sendFormSubmission = async ({
  subject,
  fromName,
  replyTo,
  fields,
}: FormSubmission): Promise<void> => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
  if (!accessKey) {
    throw new Error('Missing VITE_WEB3FORMS_KEY. Add your Web3Forms access key to .env and restart the dev server.');
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: fromName,
      ...(replyTo && { replyto: replyTo }),
      ...fields,
    }),
  });

  const result = (await response.json().catch(() => null)) as Web3FormsResponse | null;
  if (!response.ok || !result?.success) {
    throw new Error(result?.message ?? `Web3Forms request failed with status ${response.status}`);
  }
};
