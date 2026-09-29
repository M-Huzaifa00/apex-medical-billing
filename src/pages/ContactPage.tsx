import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import { ApexLogo } from '../components/ApexLogo';
import { cubicEase } from '../utils/animations';
import { useFormSubmission } from '../hooks/useFormSubmission';
import { isFilled, isValidEmail, isValidPhone } from '../utils/formValidation';

export const ContactPage: React.FC = () => {
  const { submit, isSubmitting, isSuccess, errorMessage, reset, honeypotProps } = useFormSubmission();
  const [formData, setFormData] = useState({
    practiceName: '',
    specialty: 'Primary Care / Internal Medicine',
    monthlyVolume: '$125,000 - $300,000/mo',
    ehrSystem: 'athenahealth',
    providerName: '',
    phone: '',
    workEmail: '',
    notes: '',
  });

  const canSubmit =
    isFilled(formData.practiceName) &&
    isFilled(formData.providerName) &&
    isValidPhone(formData.phone) &&
    isValidEmail(formData.workEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    submit({
      subject: `New Practice Audit Request: ${formData.practiceName}`,
      fromName: 'Apex Website – Contact Page',
      replyTo: formData.workEmail,
      fields: {
        'Practice Name': formData.practiceName,
        'Specialty': formData.specialty,
        'Monthly Collections': formData.monthlyVolume,
        'EHR / Billing Software': formData.ehrSystem,
        'Name & Title': formData.providerName,
        'Phone': formData.phone,
        'Work Email': formData.workEmail,
        'Operational Challenge': formData.notes || '—',
      },
    });
  };

  const offices = [
    {
      city: 'Denver, Colorado (HQ)',
      address: '1801 California St, Suite 2400',
      phone: '(303) 847-1920',
      hours: 'Mon – Fri, 7:00 AM – 6:00 PM MT',
      type: 'Executive Headquarters & Coding Review',
    },
    {
      city: 'Austin, Texas',
      address: '100 Congress Ave, Suite 1200',
      phone: '(512) 694-8100',
      hours: 'Mon – Fri, 8:00 AM – 5:00 PM CT',
      type: 'Surgical & Orthopedic Billing Hub',
    },
    {
      city: 'Chicago, Illinois',
      address: '300 S Riverside Plaza, Suite 1600',
      phone: '(312) 584-3320',
      hours: 'Mon – Fri, 8:00 AM – 5:00 PM CT',
      type: 'Behavioral Health & Clearinghouse Support',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
      {/* 1. Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="text-center max-w-3xl mx-auto pt-6"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836] block mb-3">
          Practice Intake & Consultation
        </span>
        <h1 className="text-4xl sm:text-6xl font-editorial font-normal text-[#0E2925] leading-[1.15]">
          Let&apos;s Accelerate Your Practice Revenue.
        </h1>
        <p className="mt-4 text-lg text-[#747773] leading-relaxed max-w-2xl mx-auto">
          Request a confidential 48-hour practice billing audit or schedule a direct consultation with a Senior Revenue Cycle Director.
        </p>
      </motion.section>

      {/* 2. Main Form & Contact Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact & Office Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="rounded-[32px] bg-[#0E2925] text-[#F8FAF7] p-8 sm:p-10 space-y-6 shadow-lg">
            <ApexLogo variant="dark-bg" size="md" className="mb-2" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7E6]">
              Direct Provider Channels
            </span>
            <h2 className="text-3xl font-editorial text-white">
              Speak With Our Revenue Operations Team
            </h2>

            <div className="space-y-4 pt-2 text-sm text-[#EAF7E6]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Phone className="w-4 h-4 text-[#EAF7E6]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60">Toll-Free Provider Hotline</div>
                  <div className="font-semibold text-white text-base">(800) 492-3810</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Mail className="w-4 h-4 text-[#EAF7E6]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60">Audit & Practice Inquiries</div>
                  <div className="font-semibold text-white text-base">audit@apexmedicalbilling.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#EAF7E6]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60">HIPAA Compliance Verification</div>
                  <div className="font-semibold text-white">100% BAA Covered Review</div>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Centers */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
              Regional Operations Centers
            </h3>
            <div className="space-y-3">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white border border-[#E2E7DF] p-5 space-y-2 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#1E2423]">{office.city}</span>
                    <span className="text-[11px] font-semibold text-[#57B836]">{office.type}</span>
                  </div>
                  <div className="text-xs text-[#747773] flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#57B836] shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="text-xs text-[#747773] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#57B836] shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Practice Audit Form */}
        <div className="lg:col-span-7">
          <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E2E7DF] p-8 sm:p-12 shadow-sm">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input {...honeypotProps} />
                <div className="space-y-2 pb-4 border-b border-[#E2E7DF]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
                    Confidential Practice Evaluation
                  </span>
                  <h2 className="text-3xl font-editorial text-[#0E2925]">
                    Request a Practice Revenue Audit
                  </h2>
                  <p className="text-xs sm:text-sm text-[#747773]">
                    Fill in your practice parameters below. A Senior Revenue Director will prepare your comparative benchmark report within 48 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                      Practice or Group Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Summit Internal Medicine"
                      value={formData.practiceName}
                      onChange={(e) => setFormData({ ...formData, practiceName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                      Primary Clinical Specialty
                    </label>
                    <select
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
                    >
                      <option value="Primary Care / Internal Medicine">Primary Care / Internal Medicine</option>
                      <option value="Behavioral Health / Psychiatry">Behavioral Health / Psychiatry</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Orthopedics & Spine">Orthopedics & Spine</option>
                      <option value="Physical Therapy">Physical Therapy</option>
                      <option value="Dermatology & Mohs">Dermatology & Mohs</option>
                      <option value="Multi-Specialty / ASC">Multi-Specialty / ASC</option>
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
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
                      Current EHR / Billing Software
                    </label>
                    <select
                      value={formData.ehrSystem}
                      onChange={(e) => setFormData({ ...formData, ehrSystem: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
                    >
                      <option value="athenahealth">athenahealth</option>
                      <option value="Epic Systems">Epic Systems</option>
                      <option value="eClinicalWorks">eClinicalWorks</option>
                      <option value="Kareo / Tebra">Kareo / Tebra</option>
                      <option value="AdvancedMD">AdvancedMD</option>
                      <option value="NextGen Healthcare">NextGen Healthcare</option>
                      <option value="ModMed">ModMed</option>
                      <option value="Other Legacy System">Other / Legacy System</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                      Your Name & Title <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jordan Hayes"
                      value={formData.providerName}
                      onChange={(e) => setFormData({ ...formData, providerName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
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
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E2423] mb-1.5">
                    Primary Operational Challenge or Payer Concern
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. High commercial claim denials, staff turnover, or aging A/R balances over 90 days..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E2E7DF] text-xs sm:text-sm text-[#1E2423] focus:outline-none focus:border-[#57B836] focus:ring-1 focus:ring-[#57B836] resize-none"
                  />
                </div>

                <div className="p-3 bg-[#F8FAF7] rounded-xl border border-[#E2E7DF] flex items-start gap-2.5 text-xs text-[#747773]">
                  <ShieldCheck className="w-4 h-4 text-[#57B836] shrink-0 mt-0.5" />
                  <span>
                    Your practice data is 100% confidential and protected under standard HIPAA Business Associate Agreement rules.
                  </span>
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="p-3 bg-red-50 rounded-xl border border-red-200 flex items-start gap-2.5 text-xs text-red-700"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !canSubmit}
                  className="w-full py-4 rounded-full bg-[#57B836] text-white text-xs sm:text-sm font-semibold hover:bg-[#0E2925] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#57B836]"
                >
                  <span>{isSubmitting ? 'Sending Your Practice Information...' : 'Submit Practice Information for 48-Hour Audit'}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
                {!canSubmit && (
                  <p className="text-center text-[11px] text-[#747773]">
                    Fill in all fields marked * with a valid email and phone number to submit.
                  </p>
                )}
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#57B836]/10 text-[#57B836] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-3xl font-editorial text-[#0E2925]">
                  Audit Request Confirmed
                </h3>
                <p className="text-sm text-[#747773] max-w-md mx-auto">
                  Thank you, <strong>{formData.providerName}</strong>. A Senior Practice Revenue Director has received your information for <strong>{formData.practiceName}</strong> and will follow up within 24–48 hours at <strong>{formData.workEmail}</strong>.
                </p>

                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F8FAF7] border border-[#E2E7DF] text-left text-xs space-y-2">
                  <div className="font-semibold text-[#1E2423] flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4 text-[#57B836]" />
                    What Happens Next:
                  </div>
                  <ul className="space-y-1.5 text-[#747773] pl-5 list-disc">
                    <li>Mutual BAA sent for electronic signature</li>
                    <li>Secure snapshot extraction of sample aging summary</li>
                    <li>20-minute video walkthrough of identified revenue leak points</li>
                  </ul>
                </div>

                <button
                  onClick={reset}
                  className="px-6 py-2.5 rounded-full bg-[#57B836] text-white text-xs font-semibold hover:bg-[#0E2925] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
