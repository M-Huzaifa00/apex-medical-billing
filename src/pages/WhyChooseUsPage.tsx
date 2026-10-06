import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Compass,
  Quote
} from 'lucide-react';
import { cubicEase, defaultViewport } from '../utils/animations';

interface WhyChooseUsPageProps {
  onOpenAudit: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenAudit }) => {
  const pillars = [
    {
      title: '100% Onshore Certified Coders',
      subtitle: 'AAPC & AHIMA Certified Specialists',
      desc: 'We never outsource your clinical claims to overseas data entry pools. Every coder on your account is based in the United States and certified in your specific clinical discipline.',
      icon: Award,
    },
    {
      title: '48-Hour Denial Appeal Standard',
      subtitle: 'Never Abandon Legitimate Revenue',
      desc: 'Most billing services write off difficult denials or let them languish until timely filing deadlines expire. We investigate every CARC reason code and initiate clinical appeals within 48 hours.',
      icon: ShieldCheck,
    },
    {
      title: 'Zero Software Transition Friction',
      subtitle: 'Works Inside Your Existing EHR',
      desc: 'No expensive software licenses, no risky data migrations, and no front-desk retraining. We connect directly into your existing EHR and clearinghouse.',
      icon: Compass,
    },
    {
      title: 'Complete Financial Transparency',
      subtitle: 'Line-Item Real-Time Visibility',
      desc: 'No monthly black-box summary invoices. You have 24/7 visibility into every claim status, payer response, and bank deposit reconciliation.',
      icon: TrendingUp,
    },
  ];

  const comparisonRows = [
    {
      feature: 'Clinical Coding Staff',
      apex: '100% US-based AAPC & AHIMA certified specialists',
      inHouse: 'Dependent on local hiring; vulnerable to turnover',
      typicalAgency: 'Often offshored to uncertified data-entry pools',
    },
    {
      feature: 'First-Pass Clean Claim Rate',
      apex: '98.2% average across all specialties',
      inHouse: '78% – 85% national industry average',
      typicalAgency: '82% – 88% with frequent scrubbing delays',
    },
    {
      feature: 'Denial Resolution Timeframe',
      apex: 'Under 48 hours for CARC investigation and appeal',
      inHouse: 'Often 14–30+ days due to daily clinic fire drills',
      typicalAgency: 'Frequently ignored or written off as uncollectible',
    },
    {
      feature: 'Days in A/R (Accounts Receivable)',
      apex: '24.6 days average across active practices',
      inHouse: '45–65+ days industry average',
      typicalAgency: '40–55 days with slow patient balance follow-up',
    },
    {
      feature: 'EHR & Software Requirement',
      apex: 'Zero software change; direct integration in your EHR',
      inHouse: 'Existing system with internal maintenance costs',
      typicalAgency: 'Often forces expensive third-party platform migrations',
    },
    {
      feature: 'Fee Structure & Alignment',
      apex: 'Performance-based percentage of collections only',
      inHouse: 'Fixed salaries, benefits, PTO, and training costs',
      typicalAgency: 'High base retainers + hidden clearinghouse fees',
    },
  ];

  const podRoles = [
    {
      role: 'Senior Account Director',
      responsibility: 'Your direct point of contact for weekly revenue performance and payer escalations.',
    },
    {
      role: 'Certified Specialty Coder',
      responsibility: 'Dedicated AAPC/AHIMA coder reviewing clinical notes, modifiers, and fee schedules.',
    },
    {
      role: 'Electronic Claims Specialist',
      responsibility: 'Manages clearinghouse rejections, scrub rules, and electronic batch submissions.',
    },
    {
      role: 'Payer A/R Specialist',
      responsibility: 'Relentlessly chases aging insurance claims, resolves denials, and audits remittances.',
    },
  ];

  const testimonials = [
    {
      quote:
        'APEX increased our collections by 18% in the first 90 days. Their certified coders caught documentation errors our previous billing company missed for years.',
      author: 'Dr. Michael Chen, MD',
      title: 'Managing Partner, Apex Internal Medicine Group',
    },
    {
      quote:
        'The 48-hour denial turnaround was a game changer for our orthopedic surgery center. Denials that used to sit for months are resolved and paid in the same cycle.',
      author: 'Sarah Jenkins, CMPE',
      title: 'Practice Administrator, Lonestar Orthopedic Institute',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
      {/* 1. Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="text-center max-w-3xl mx-auto pt-6"
      >
        <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836] block mb-3">
          Why Choose Us
        </span>
        <h1 className="text-4xl sm:text-6xl font-display text-[#0E2925] leading-[1.1]">
          Engineered to Maximize Practice Collections and Peace of Mind.
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-display font-light text-[#747773] leading-snug max-w-2xl mx-auto">
          We combine certified onshore billing specialists, advanced claim-scrubbing technology, and aggressive denial appeals to give independent clinics unrivaled financial performance.
        </p>
      </motion.section>

      {/* 2. Key Pillars Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: cubicEase }}
              className="rounded-[32px] bg-white border border-[#E2E7DF] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
                    {p.subtitle}
                  </span>
                  <h2 className="text-2xl font-display text-[#0E2925] mt-0.5">
                    {p.title}
                  </h2>
                </div>
                <p className="text-sm text-[#747773] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E7DF] flex items-center gap-2 text-xs font-medium text-[#1E2423]">
                <CheckCircle2 className="w-4 h-4 text-[#57B836]" />
                <span>Guaranteed in our Service Level Agreement (SLA)</span>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. The Comparison Matrix */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
            Objective Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925]">
            How APEX Compares to Traditional Options
          </h2>
          <p className="text-sm text-[#747773]">
            See why independent practices switch from in-house billing and generic clearinghouse agencies to APEX.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[32px] border border-[#E2E7DF] bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E2E7DF] bg-[#F8FAF7]">
                <th className="p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-[#747773] w-1/4">
                  Operational Dimension
                </th>
                <th className="p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-[#57B836] bg-[#57B836]/10 w-1/3">
                  ★ APEX Medical Billing
                </th>
                <th className="p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-[#747773] w-1/5">
                  In-House Staff
                </th>
                <th className="p-5 sm:p-6 text-xs font-bold uppercase tracking-wider text-[#747773] w-1/5">
                  Typical Billing Agency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7DF] text-xs sm:text-sm">
              {comparisonRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#F8FAF7]/50 transition-colors">
                  <td className="p-5 sm:p-6 font-semibold text-[#0E2925]">
                    {row.feature}
                  </td>
                  <td className="p-5 sm:p-6 font-medium text-[#0E2925] bg-[#57B836]/5 border-x border-[#57B836]/20">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#57B836] shrink-0 mt-0.5" />
                      <span>{row.apex}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-[#747773]">
                    {row.inHouse}
                  </td>
                  <td className="p-5 sm:p-6 text-[#747773]">
                    {row.typicalAgency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Dedicated Pod Architecture */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E2E7DF] p-8 sm:p-12 shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
            Our Operating Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925]">
            Your Dedicated 4-Member Revenue Pod
          </h2>
          <p className="text-sm text-[#747773] leading-relaxed">
            Unlike call centers where anonymous agents touch random claims, APEX assigns a permanent, dedicated clinical billing pod to your practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {podRoles.map((pod, pIdx) => (
            <div
              key={pIdx}
              className="rounded-2xl bg-[#F8FAF7] border border-[#E2E7DF] p-6 space-y-2"
            >
              <div className="w-8 h-8 rounded-xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center font-display font-bold text-xs">
                {pIdx + 1}
              </div>
              <h3 className="text-sm text-[#0E2925] pt-1">{pod.role}</h3>
              <p className="text-xs text-[#747773] leading-relaxed">{pod.responsibility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Provider Testimonials */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
            Verified Physician Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925]">
            Trusted by Practice Leaders Nationwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-[28px] bg-white border border-[#E2E7DF] p-8 space-y-4 shadow-2xs flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#57B836]/40" />
              <p className="text-sm sm:text-base text-[#1E2423] leading-relaxed italic">
                “{t.quote}”
              </p>
              <div className="pt-4 border-t border-[#E2E7DF]">
                <div className="font-bold text-sm text-[#0E2925]">{t.author}</div>
                <div className="text-xs text-[#747773]">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Measured Metrics Banner */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-white p-8 sm:p-14 text-center space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">98.2%</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Clean Claim Rate</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">&lt; 48 Hrs</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Denial Appeal SLA</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">24.6 Days</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Average Days in A/R</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">99.4%</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Client Retention</div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#57B836] text-white text-xs font-display font-bold hover:bg-white hover:text-[#0E2925] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Claim Your Free Practice Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            to="/contact-us"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white text-xs font-display font-bold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
