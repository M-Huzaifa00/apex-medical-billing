import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Lock,
  MessagesSquare,
  ClipboardCheck,
  UserCheck,
  EyeOff,
} from 'lucide-react';
import leadershipImg from '../assets/images/practice_leadership_team_1790366106528.jpg';
import { cubicEase, defaultViewport } from '../utils/animations';

interface AboutUsPageProps {
  onOpenAudit: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenAudit }) => {
  const values = [
    {
      title: 'Certified Billing Professionals',
      desc: 'Our certified billing team brings trained expertise to revenue cycle tasks, with careful attention to accuracy, documentation, and proper claim handling.',
      tagline: 'Qualified Expertise Behind Every Claim',
      icon: Award,
    },
    {
      title: 'Clear Communication',
      desc: 'We keep communication straightforward and responsive, so your team knows what needs attention without unnecessary back-and-forth or unclear updates.',
      tagline: 'Clear Answers. Fewer Questions.',
      icon: MessagesSquare,
    },
    {
      title: 'Consistent Follow-Through',
      desc: 'Billing issues rarely resolve themselves. We stay focused on assigned tasks, maintain proper documentation, and follow each item through to the appropriate next step.',
      tagline: 'Nothing Left Without a Next Step',
      icon: ClipboardCheck,
    },
    {
      title: 'Continuous Improvement',
      desc: 'Payer requirements and billing processes continue to evolve. We refine our workflows to maintain accuracy, efficiency, and reliable support as those requirements change.',
      tagline: 'Better Processes, Better Support',
      icon: TrendingUp,
    },
  ];

  const complianceBadges = [
    { title: 'Privacy-Focused Billing', desc: 'HIPAA-Compliant Processes', icon: ShieldCheck },
    { title: 'Authorized Personnel', desc: 'Access Limited to Approved Team Members', icon: UserCheck },
    { title: 'Secure Data Handling', desc: 'Sensitive Information Managed Responsibly', icon: Lock },
    { title: 'Confidentiality Standards', desc: 'Privacy Maintained Throughout the Process', icon: EyeOff },
  ];

  const glanceStats = [
    { value: '98%', label: 'Clean Claim Rate' },
    { value: '24 Hours', label: 'Claim Submission' },
    { value: '25%', label: 'Revenue Increase' },
    { value: '18+', label: 'Specialties & Care Settings' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
      {/* 1. Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="text-center max-w-3xl mx-auto pt-6"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836] block mb-3">
          About Apex Medical Billing
        </span>
        <h1 className="text-4xl sm:text-6xl font-editorial font-normal text-[#0E2925] leading-[1.15]">
          Every Healthcare Practice Deserves a Dependable Billing Partner.
        </h1>
        <p className="mt-4 text-lg text-[#747773] leading-relaxed max-w-2xl mx-auto">
          We support healthcare practices across all 50 U.S. states with medical billing and revenue cycle services that help manage collections, reduce administrative work, and keep claims and payments easier to track.
        </p>
      </motion.section>

      {/* 2. Visual Story Strip */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[460px] border border-[#57B836]/20 shadow-lg">
          <img
            src={leadershipImg}
            alt="Apex Medical Billing Leadership Team"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2925]/90 via-[#0E2925]/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7E6]">
              A Message From Our CEO
            </span>
            <p className="text-lg font-editorial mt-1 text-white">
              “Practice owners should have a clear view of their revenue and confidence in the team managing it.”
            </p>
            <p className="text-xs text-[#EAF7E6]/70 mt-2 font-medium">
              Muhammad Asad Khan, CEO
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925] leading-snug">
              From Claims to Collections, We Help Keep Revenue Moving.
            </h2>
          </div>
          <p className="text-sm text-[#747773] leading-relaxed">
            Managing the revenue cycle takes more than submitting claims. Billing, A/R follow-up, account reconciliation, quality assurance, and customer support all play a part in getting claims resolved, payments recorded, and outstanding accounts properly followed up.
          </p>
          <p className="text-sm text-[#747773] leading-relaxed">
            Our team supports providers across 18+ specialties and care settings, adapting workflows to each practice’s billing needs. The goal is to reduce the administrative load on your staff while making claims, payments, and outstanding accounts easier to track and manage.
          </p>
          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#EAF7E6]/60 border border-[#57B836]/20">
              <div className="text-2xl font-editorial text-[#0E2925]">100%</div>
              <div className="text-xs text-[#747773] font-medium mt-0.5">HIPAA-Compliant Processes</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#E6F7FA]/60 border border-[#00A7C7]/20">
              <div className="text-2xl font-editorial text-[#0E2925]">50 States</div>
              <div className="text-xs text-[#747773] font-medium mt-0.5">Nationwide Billing Support</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Core Values Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
            Our Operating Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925]">
            The Standards Behind How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: cubicEase }}
                className="rounded-[28px] bg-white border border-[#E2E7DF] p-8 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-editorial text-[#0E2925] mb-2">{val.title}</h3>
                <p className="text-sm text-[#747773] leading-relaxed">{val.desc}</p>
                <div className="pt-4 mt-4 border-t border-[#E2E7DF] flex items-center gap-2 text-xs font-semibold text-[#57B836]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{val.tagline}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Compliance & Security Architecture */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E2E7DF] p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
              Security & Compliance
            </span>
            <h2 className="text-3xl font-editorial text-[#0E2925]">
              Patient Data Handled With Care
            </h2>
            <p className="text-sm text-[#747773] leading-relaxed">
              Medical billing involves sensitive patient and financial information. Our HIPAA-compliant approach helps protect privacy, limit access, and support responsible handling of information throughout the billing process.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {complianceBadges.map((badge, bIdx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={bIdx}
                  className="rounded-2xl bg-[#F8FAF7] border border-[#E2E7DF] p-5 text-center space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#57B836]/10 text-[#57B836] flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-xs text-[#1E2423]">{badge.title}</div>
                  <div className="text-[11px] text-[#747773]">{badge.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Measured Impact Banner */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-white p-8 sm:p-14 relative overflow-hidden">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836] block text-center mb-8 relative z-10">
          Apex at a Glance
        </span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {glanceStats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl sm:text-5xl font-editorial text-[#EAF7E6]">{stat.value}</div>
              <div className="text-xs text-white/70 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact-us"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#57B836] text-white text-xs font-semibold hover:bg-white hover:text-[#0E2925] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Schedule a 1:1 Meeting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get a Free Practice Audit</span>
          </button>
        </div>
      </section>
    </div>
  );
};
