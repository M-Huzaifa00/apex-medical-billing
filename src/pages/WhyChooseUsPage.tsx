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
      title: '98% Clean Claim Rate',
      subtitle: 'Measurable Billing Performance',
      desc: 'Cleaner claims mean fewer preventable corrections and less time lost to rework. Our billing process focuses on getting claim details right before they reach the payer.',
      tagline: 'Performance You Can Measure',
      icon: Award,
    },
    {
      title: '48-Hour Denial Review',
      subtitle: 'Faster Action on Denials',
      desc: 'Denied claims should not sit without a next step. We review the issue, identify what needs attention, and assign the appropriate follow-up action within 48 hours.',
      tagline: 'Every Denial Gets a Next Step',
      icon: ShieldCheck,
    },
    {
      title: 'No Forced Software Change',
      subtitle: 'Works With Your Current Systems',
      desc: 'APEX works within the EHR, EMR, and practice management systems your team already uses, helping you add billing support without rebuilding your workflow.',
      tagline: 'Support That Fits Your Setup',
      icon: Compass,
    },
    {
      title: '24/7 Account Access',
      subtitle: 'Clearer Revenue Visibility',
      desc: 'Stay closer to your revenue cycle with ongoing access to billing information, claim activity, and account performance instead of waiting for occasional updates.',
      tagline: 'Know Where Your Revenue Stands',
      icon: TrendingUp,
    },
  ];

  const comparisonRows = [
    {
      feature: 'Clean Claim Performance',
      apex: '98% clean claim rate',
      inHouse: 'Depends on team capacity, experience, and workflow',
      typicalAgency: '95–97%+ is considered a strong RCM target',
    },
    {
      feature: 'Days in A/R',
      apex: '25 days average',
      inHouse: 'Depends on staffing and consistency of payer follow-up',
      typicalAgency: '30–35 days is a strong RCM target',
    },
    {
      feature: 'Denial Follow-Up',
      apex: 'Next action within 48 hours',
      inHouse: 'Often competes with other daily billing priorities',
      typicalAgency: 'Process and turnaround vary by provider',
    },
    {
      feature: 'Revenue Visibility',
      apex: '24/7 account access',
      inHouse: 'Limited to internal systems and staff availability',
      typicalAgency: 'Depends on vendor reporting and platform access',
    },
    {
      feature: 'EHR / EMR Workflow',
      apex: 'Works within your existing systems',
      inHouse: 'Existing internal workflow',
      typicalAgency: 'Integration capabilities vary by provider',
    },
    {
      feature: 'Cost Structure',
      apex: 'Starting at 2.99% of collections',
      inHouse: 'Salaries, benefits, training, software, and staffing overhead',
      typicalAgency: 'Commonly percentage-based; pricing varies by scope',
    },
  ];

  const podRoles = [
    {
      role: 'Dedicated Account Manager',
      responsibility: 'Your main point of contact for billing updates, priorities, reporting, and day-to-day revenue cycle questions.',
    },
    {
      role: 'Medical Coding Specialist',
      responsibility: 'Reviews documentation and coding details to support accurate ICD-10-CM, CPT, HCPCS, and modifier use.',
    },
    {
      role: 'Billing & Claims Specialist',
      responsibility: 'Handles claim preparation, scrubbing, submission, payer responses, and issues that could delay processing.',
    },
    {
      role: 'A/R & Denial Specialist',
      responsibility: 'Works aging accounts and denied claims, follows up with payers, and keeps unresolved revenue moving.',
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
          Why Choose APEX
        </span>
        <h1 className="text-4xl sm:text-6xl font-display text-[#0E2925] leading-[1.1]">
          More Control Over Your Revenue. Less Billing Uncertainty.
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-display font-light text-[#747773] leading-snug max-w-2xl mx-auto">
          APEX gives healthcare practices clearer visibility, stronger accountability, and measurable performance across the revenue cycle, so you know what’s working, what needs attention, and what happens next.
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
                <span>{p.tagline}</span>
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
            How APEX Compares to Traditional Billing Options
          </h2>
          <p className="text-sm text-[#747773]">
            See how APEX compares with managing billing in-house and working with a typical outsourced billing company.
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
                  Typical Billing Companies / Market
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

        <p className="text-sm text-[#747773] leading-relaxed text-center max-w-2xl mx-auto">
          APEX combines measurable billing performance, ongoing visibility, and a flexible cost structure without requiring practices to build and manage every revenue cycle function internally.
        </p>
      </section>

      {/* 4. Dedicated Pod Architecture */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E2E7DF] p-8 sm:p-12 shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836]">
            Our Support Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925]">
            A Billing Team That Knows Your Practice.
          </h2>
          <p className="text-sm text-[#747773] leading-relaxed">
            APEX keeps the key parts of your revenue cycle connected, giving your team a consistent point of contact, clearer communication, and coordinated support across billing, coding, A/R, and denials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {podRoles.map((pod, pIdx) => (
            <div
              key={pIdx}
              className="rounded-2xl bg-[#F8FAF7] border border-[#E2E7DF] p-6 space-y-2"
            >
              <div className="w-8 h-8 rounded-xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center font-display font-bold text-xs">
                {String(pIdx + 1).padStart(2, '0')}
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
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-[#0E2925]">
            What Practice Leaders Say About APEX
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
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">98%</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Clean Claim Rate</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">&lt; 48 Hrs</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Denial Next Action</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">25 Days</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Average Days in A/R</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-[#EAF7E6]">25%</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Revenue Increase</div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact-us"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#57B836] text-white text-xs font-display font-bold hover:bg-white hover:text-[#0E2925] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Schedule a 1:1 Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white text-xs font-display font-bold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get a Free Practice Audit</span>
          </button>
        </div>
      </section>
    </div>
  );
};
