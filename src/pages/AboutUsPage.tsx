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
  HeartHandshake,
  FileCheck,
} from 'lucide-react';
import leadershipImg from '../assets/images/practice_leadership_team_1790366106528.jpg';
import { cubicEase, defaultViewport } from '../utils/animations';

interface AboutUsPageProps {
  onOpenAudit: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenAudit }) => {
  const values = [
    {
      title: '100% Onshore Certified Coders',
      desc: 'We never outsource clinical claims or patient sensitive data overseas. Every billing specialist is US-based and credentialed by AAPC or AHIMA.',
      icon: Award,
    },
    {
      title: 'Radical Financial Transparency',
      desc: 'No black-box monthly summary sheets. You retain direct access to your clearinghouse, bank remittance receipts, and line-item claim tracking 24/7.',
      icon: TrendingUp,
    },
    {
      title: 'Relentless Denial Advocacy',
      desc: 'We never write off difficult claims or let timely filing limits expire. Our certified denial specialists investigate every CARC code and appeal within 48 hours.',
      icon: ShieldCheck,
    },
    {
      title: 'True Clinical Extension',
      desc: 'We operate as an integrated department inside your existing EHR. Your physicians and front desk receive direct, responsive pod communication daily.',
      icon: HeartHandshake,
    },
  ];

  const leadership = [
    {
      name: 'Sarah Montgomery, CPC, CPMA',
      role: 'Chief Revenue Officer & Co-Founder',
      bio: 'Former Director of Revenue Cycle for a 45-provider multi-specialty orthopedic network with 18+ years of clinical documentation, payer contract negotiation, and compliance audit experience.',
    },
    {
      name: 'David Vance, MBA, CMPE',
      role: 'Head of Practice Operations & Co-Founder',
      bio: 'Healthcare practice administrator who has scaled medical billing operations across 120+ independent clinics, specializing in denial turnaround workflows and clearinghouse automation.',
    },
    {
      name: 'Dr. Rebecca Chen, MD',
      role: 'Clinical Advisory Chair',
      bio: 'Practicing internist guiding Apex’s clinical documentation audits to ensure physician documentation workflows remain streamlined, compliant, and optimized for fee-for-service and value-based care.',
    },
    {
      name: 'Marcus Thorne, CPC-I, CPCO',
      role: 'Director of Coding Compliance',
      bio: 'Certified Professional Coding Instructor with extensive experience in CMS regulatory audits, OIG compliance guidelines, and specialty coding precision.',
    },
  ];

  const complianceBadges = [
    { title: 'HIPAA Certified', desc: '100% BAA Covered', icon: Lock },
    { title: 'SOC 2 Type II', desc: 'Enterprise Security', icon: ShieldCheck },
    { title: 'AAPC Affiliated', desc: 'Certified Coders', icon: Award },
    { title: 'AHIMA Standard', desc: 'Clinical Documentation', icon: FileCheck },
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
          Protecting the Financial Independence of Healthcare Practices.
        </h1>
        <p className="mt-4 text-lg text-[#747773] leading-relaxed max-w-2xl mx-auto">
          We founded Apex Medical Billing with a singular mission: to eliminate the friction, opacity, and revenue loss that plague medical practices, giving providers the financial clarity they deserve.
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
              Executive Commitment
            </span>
            <p className="text-lg font-editorial mt-1 text-white">
              “Every independent practice deserves the same high-caliber billing expertise that hospital conglomerates employ.”
            </p>
            <p className="text-xs text-[#EAF7E6]/70 mt-2 font-medium">
              — Sarah Montgomery, CPC, CPMA, Chief Revenue Officer
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
              Our Founding Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925] leading-snug">
              Built by Practice Administrators Who Refused the Status Quo.
            </h2>
          </div>
          <p className="text-sm text-[#747773] leading-relaxed">
            For years, independent medical practices were forced to choose between two flawed alternatives: overburdened in-house staff struggling to keep pace with complex payer rules, or massive outsourced clearinghouses that dumped claims into offshore call centers where denials were silently written off.
          </p>
          <p className="text-sm text-[#747773] leading-relaxed">
            Apex Medical Billing was created to provide a third, superior path. We assembled a dedicated team of onshore, specialty-certified coders, clinical documentation auditors, and experienced practice managers. We built rigorous electronic claim scrubbing protocols that catch errors before submission, driving our client average to a 98.2% first-pass clean claim rate.
          </p>
          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#EAF7E6]/60 border border-[#57B836]/20">
              <div className="text-2xl font-editorial text-[#0E2925]">100%</div>
              <div className="text-xs text-[#747773] font-medium mt-0.5">US-Based Certified Staff</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#E6F7FA]/60 border border-[#00A7C7]/20">
              <div className="text-2xl font-editorial text-[#0E2925]">&lt; 48 Hrs</div>
              <div className="text-xs text-[#747773] font-medium mt-0.5">Denial Appeal Turnaround</div>
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
            The Standards We Stand By Every Day
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
                  <span>Standard Service Level Commitment</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Leadership & Advisory */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
            Proven Healthcare Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#0E2925]">
            Executive Leadership & Advisory Team
          </h2>
          <p className="text-sm text-[#747773]">
            Decades of hands-on medical revenue cycle leadership guiding your practice’s financial health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-[28px] bg-white border border-[#E2E7DF] p-7 space-y-3 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#57B836]/10 text-[#57B836] flex items-center justify-center mb-3 font-editorial font-bold text-base">
                  {leader.name.charAt(0)}
                </div>
                <h3 className="text-base font-bold text-[#1E2423] leading-snug">{leader.name}</h3>
                <div className="text-xs font-semibold text-[#57B836] mt-0.5">{leader.role}</div>
                <p className="text-xs text-[#747773] leading-relaxed pt-3">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Compliance & Security Architecture */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E2E7DF] p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836]">
              Security & Regulatory Rigor
            </span>
            <h2 className="text-3xl font-editorial text-[#0E2925]">
              Uncompromising HIPAA & SOC 2 Safeguards
            </h2>
            <p className="text-sm text-[#747773] leading-relaxed">
              Medical billing involves the most sensitive patient health information. Apex adheres to stringent physical, technical, and administrative controls to protect your clinic against compliance vulnerability.
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

      {/* 6. Measured Impact Banner */}
      <section className="rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-white p-8 sm:p-14 relative overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div>
            <div className="text-4xl sm:text-5xl font-editorial text-[#EAF7E6]">98.2%</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Clean Claim Rate</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-editorial text-[#EAF7E6]">$14.8M+</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Denied Claims Recovered</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-editorial text-[#EAF7E6]">24.6 Days</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Average Days in A/R</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-editorial text-[#EAF7E6]">99.4%</div>
            <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Annual Client Retention</div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#57B836] text-white text-xs font-semibold hover:bg-white hover:text-[#0E2925] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request a Free Practice Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            to="/contact-us"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Contact Practice Leadership</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
