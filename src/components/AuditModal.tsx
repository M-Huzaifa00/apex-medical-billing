import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Clock, FileSpreadsheet, AlertCircle } from 'lucide-react';
import { ApexLogo } from './ApexLogo';
import { cubicEase } from '../utils/animations';
import { useFormSubmission } from '../hooks/useFormSubmission';
import { isFilled, isValidEmail, isValidPhone } from '../utils/formValidation';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    practiceName: '',
    specialty: 'Primary Care / Internal Medicine',
    monthlyVolume: 'Under $50,000/mo',
    ehrSystem: 'athenahealth',
    biggestChallenge: '',
    providerName: '',
    workEmail: '',
    phone: '',
    notes: '',
  });
  const { submit, isSubmitting, isSuccess, errorMessage, reset, honeypotProps } = useFormSubmission();

  const isProfileComplete = isFilled(formData.practiceName);
  const isContactComplete =
    isFilled(formData.providerName) && isValidPhone(formData.phone) && isValidEmail(formData.workEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isProfileComplete || !isContactComplete) return;
    submit({
      subject: `New Billing Audit Request: ${formData.practiceName}`,
      fromName: 'Apex Website – Audit Modal',
      replyTo: formData.workEmail,
      fields: {
        'Practice Name': formData.practiceName,
        'Specialty': formData.specialty,
        'Monthly Collections': formData.monthlyVolume,
        'EHR / Practice Management': formData.ehrSystem,
        'Primary Friction Point': formData.biggestChallenge || '—',
        'Name & Title': formData.providerName,
        'Phone': formData.phone,
        'Work Email': formData.workEmail,
        'Notes / Payer Concerns': formData.notes || '—',
      },
    });
  };

  const resetAndClose = () => {
    reset();
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: cubicEase }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#0E2925]/70 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.4, ease: cubicEase }}
            className="relative w-full max-w-2xl bg-[#F8FAF7] text-[#1E2423] rounded-[28px] border border-[#E2E7DF] shadow-2xl p-6 sm:p-10 my-8 overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-modal-title"
          >
            {/* Subtle decorative background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#57B836]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#747773] hover:text-[#1E2423] hover:bg-[#E2E7DF]/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[#57B836] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <ApexLogo size="sm" />
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#57B836]/10 text-xs font-semibold uppercase tracking-wider text-[#57B836]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#57B836]" />
                      <span>HIPAA-Compliant</span>
                    </div>
                  </div>
                  <h3 id="audit-modal-title" className="text-3xl sm:text-4xl font-editorial text-[#0E2925] leading-tight">
                    Request Your Practice Billing Audit
                  </h3>
                  <p className="mt-2 text-sm text-[#747773] max-w-lg">
                    Our certified medical billing specialists will examine your claim denial patterns, aging A/R balances, and uncollected codes to uncover recoverable cash.
                  </p>
                </div>

                {/* Stepper Indicator */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E7DF]">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-[#57B836] text-white' : 'bg-[#E2E7DF] text-[#57B836]'}`}>
                      1
                    </span>
                    <span className={`text-xs font-medium ${step === 1 ? 'text-[#0E2925] font-semibold' : 'text-[#747773]'}`}>Practice Profile</span>
                  </div>
                  <div className="h-[1px] w-12 sm:w-20 bg-[#E2E7DF]" />
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-[#57B836] text-white' : 'bg-[#E2E7DF] text-[#747773]'}`}>
                      2
                    </span>
                    <span className={`text-xs font-medium ${step === 2 ? 'text-[#0E2925] font-semibold' : 'text-[#747773]'}`}>Contact & Schedule</span>
                  </div>
                </div>

                <form onSubmit={step === 1 ? (e) => { e.preventDefault(); if (isProfileComplete) setStep(2); } : handleSubmit} className="space-y-4">
                  <input {...honeypotProps} />
                  {step === 1 ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                            Practice or Clinic Name <span className="text-red-500" aria-hidden="true">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Summit Orthopedics & Spine"
                            value={formData.practiceName}
                            onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                            Primary Specialty
                          </label>
                          <select
                            value={formData.specialty}
                            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                          >
                            <option value="Primary Care / Internal Medicine">Primary Care / Internal Medicine</option>
                            <option value="Behavioral Health / Psychiatry">Behavioral Health / Psychiatry</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Orthopedics & Spine">Orthopedics & Spine</option>
                            <option value="Physical Therapy">Physical Therapy</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Multi-Specialty Group">Multi-Specialty Group</option>
                            <option value="Other Medical Specialty">Other Medical Specialty</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                            Approx. Monthly Collections
                          </label>
                          <select
                            value={formData.monthlyVolume}
                            onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                          >
                            <option value="Under $50,000/mo">Under $50,000 / month</option>
                            <option value="$50,000 - $125,000/mo">$50,000 – $125,000 / month</option>
                            <option value="$125,000 - $300,000/mo">$125,000 – $300,000 / month</option>
                            <option value="$300,000 - $750,000/mo">$300,000 – $750,000 / month</option>
                            <option value="$750,000+/mo">$750,000+ / month</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                            Current EHR / Practice Management
                          </label>
                          <select
                            value={formData.ehrSystem}
                            onChange={(e) => setFormData({ ...formData, ehrSystem: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                          >
                            <option value="athenahealth">athenahealth</option>
                            <option value="Epic Systems">Epic Systems</option>
                            <option value="eClinicalWorks">eClinicalWorks</option>
                            <option value="Kareo / Tebra">Kareo / Tebra</option>
                            <option value="AdvancedMD">AdvancedMD</option>
                            <option value="NextGen Healthcare">NextGen Healthcare</option>
                            <option value="ModMed">Modernizing Medicine (ModMed)</option>
                            <option value="Other / In-House System">Other / Legacy System</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                          What is your practice's primary revenue friction point?
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[
                            'High Denials & Resubmissions',
                            'A/R Aging Over 90+ Days',
                            'In-House Billing Staff Turnover',
                            'Credentialing / Payer Holds',
                          ].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setFormData({ ...formData, biggestChallenge: item })}
                              className={`text-left px-3.5 py-2.5 rounded-xl border transition-all cursor-pointer ${
                                formData.biggestChallenge === item
                                  ? 'border-[#57B836] bg-[#57B836]/10 font-semibold text-[#57B836]'
                                  : 'border-[#E2E7DF] bg-white text-[#747773] hover:text-[#1E2423]'
                              }`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          disabled={!isProfileComplete}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#57B836] text-white text-sm font-medium hover:bg-[#0E2925] transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#57B836]"
                        >
                          <span>Continue to Schedule</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                      {!isProfileComplete && (
                        <p className="text-right text-[11px] text-[#747773]">
                          Enter your practice name to continue.
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                            Your Name & Title <span className="text-red-500" aria-hidden="true">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Dr. Jordan Hayes or Practice Manager"
                            value={formData.providerName}
                            onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                            Direct Phone <span className="text-red-500" aria-hidden="true">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(555) 234-8790"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                          Professional Work Email <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="jordan@summitortho.com"
                          value={formData.workEmail}
                          onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                          Specific Notes or Payer Concerns (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Experiencing high BCBS denials for modifier 25 or need assistance collecting aging balances..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-2 rounded-xl bg-white border border-[#E2E7DF] text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] transition-colors resize-none"
                        />
                      </div>

                      <div className="p-3 bg-white/70 rounded-xl border border-[#E2E7DF] flex items-start gap-3 text-xs text-[#747773]">
                        <Clock className="w-4 h-4 text-[#57B836] shrink-0 mt-0.5" />
                        <span>
                          Audit turnaround: <strong className="text-[#1E2423]">48 business hours</strong>. You will receive a confidential benchmark comparison and 90-day recovery roadmap.
                        </span>
                      </div>

                      {errorMessage && (
                        <div
                          role="alert"
                          className="p-3 bg-red-50 rounded-xl border border-red-200 flex items-start gap-3 text-xs text-red-700"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div className="pt-2 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-2 text-xs font-medium text-[#747773] hover:text-[#1E2423] transition-colors cursor-pointer"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !isContactComplete}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#57B836] text-white text-sm font-medium hover:bg-[#0E2925] transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#57B836]"
                        >
                          {isSubmitting ? 'Preparing Your Audit...' : 'Submit Audit Request'}
                        </button>
                      </div>
                      {!isContactComplete && (
                        <p className="text-right text-[11px] text-[#747773]">
                          Fill in your name, a valid phone number, and a valid work email to submit.
                        </p>
                      )}
                    </>
                  )}
                </form>
              </div>
            ) : (
              <div className="py-6 text-center">
                <div className="flex justify-center mb-5">
                  <ApexLogo size="sm" />
                </div>
                <div className="w-16 h-16 rounded-full bg-[#57B836]/10 text-[#57B836] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-3xl font-editorial text-[#0E2925] mb-2">
                  Audit Request Received
                </h3>
                <p className="text-sm text-[#747773] max-w-md mx-auto mb-6">
                  Thank you, {formData.providerName || 'Doctor'}. A Senior Revenue Cycle Director from Apex will review your practice profile ({formData.practiceName || 'your practice'}) and reach out within 24–48 hours at <strong>{formData.workEmail}</strong>.
                </p>

                <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-[#E2E7DF] text-left mb-6 text-xs space-y-2">
                  <div className="font-semibold text-[#1E2423] flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4 text-[#57B836]" />
                    Next Steps for Your Practice Audit:
                  </div>
                  <ul className="space-y-1.5 text-[#747773] pl-5 list-disc">
                    <li>Non-disclosure & HIPAA Business Associate Agreement (BAA) sent for signature</li>
                    <li>Secure snapshot extraction of sample aging summary (A/R report)</li>
                    <li>Live 20-minute video walkthrough of identified revenue leak points</li>
                  </ul>
                </div>

                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-full bg-[#57B836] text-white text-xs font-semibold hover:bg-[#0E2925] transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
