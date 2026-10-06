import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/images/hero_billing_consultation_1790286581589.png';
import { cubicEase } from '../utils/animations';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: cubicEase }}
        className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(87,184,54,0.35)] border border-[#57B836]/25 flex flex-col justify-between p-6 sm:p-10 lg:p-16"
      >
        {/* Background Image with Fallback and Gradients */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 1.4, ease: cubicEase }}
            src={heroImg}
            alt="Physician and healthcare practice director discussing revenue cycle and medical billing reports"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Multi-layered dark evergreen scrim inspired by ClinicHub */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2925]/75 via-[#0E2925]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2925]/60 via-transparent to-transparent" />
        </div>

        {/* Top Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: cubicEase }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium">
            <div className="flex text-[#EAF7E6]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#EAF7E6] text-[#EAF7E6]" />
              ))}
            </div>
            <span className="text-white/80">·</span>
            <span className="tracking-wide">Serving Healthcare Practices Across All 50 U.S. States</span>
          </div>
        </motion.div>

        {/* Main Content & Bottom Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-12 sm:pt-16">
          {/* Left Column: Headlines & Call-to-Actions */}
          <div className="lg:col-span-8 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: cubicEase }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#F8FAF7] leading-[1.05] text-balance"
            >
              Accurate Medical Billing, <br />
              Stronger Practice <span className="text-[#97D388]">Revenue</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: cubicEase }}
              className="mt-5 sm:mt-6 text-lg sm:text-xl font-display font-light text-[#F8FAF7]/85 leading-snug max-w-xl"
            >
              Billing backlogs take time your team needs elsewhere. APEX Medical Billing manages billing, follows up on outstanding claims, and reconciles payments to help your practice improve collections and keep revenue moving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: cubicEase }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact-us"
                className="px-7 py-3.5 rounded-full bg-[#F8FAF7] text-[#0E2925] text-sm font-display font-bold hover:bg-white transition-all shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Schedule a 1:1 Meeting</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8FAF7] border border-white/20 text-sm font-display font-bold transition-all backdrop-blur-sm cursor-pointer"
              >
                Get a Free Practice Audit
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75, ease: cubicEase }}
              className="mt-8 flex items-center gap-5 text-xs text-[#F8FAF7]/70"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#EAF7E6]" />
                <span>100% HIPAA-Compliant</span>
              </div>
              <span className="text-white/40">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#EAF7E6]" />
                <span>Ongoing A/R Follow-Up</span>
              </div>
              <span className="text-white/40 hidden sm:inline">·</span>
              <span className="hidden sm:inline">Dedicated Billing Support</span>
            </motion.div>
          </div>

          {/* Right Column: Floating Premium Demonstration Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease: cubicEase }}
            className="lg:col-span-4 w-full flex justify-start lg:justify-end"
          >
            <div className="w-full max-w-xs sm:max-w-sm p-5 sm:p-6 rounded-[24px] bg-[#F8FAF7]/95 backdrop-blur-xl border border-white/40 text-[#1E2423] shadow-[0_12px_36px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E7DF]">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#747773] uppercase">
                    Your Revenue at a Glance
                  </span>
                  <h4 className="text-base text-[#0E2925] mt-0.5">
                    Practice Performance
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#57B836]/10 text-[#57B836] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#747773]">Claims Processed</span>
                  <span className="text-sm font-semibold text-[#1E2423] tabular-nums">
                    1,250
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#747773]">Clean Claim Rate</span>
                  <span className="text-sm font-bold text-[#57B836] tabular-nums">
                    98%
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#E2E7DF]/80">
                  <span className="text-xs font-medium text-[#1E2423]">Payments Collected</span>
                  <span className="text-base font-bold text-[#0E2925] tabular-nums">
                    $185,000
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
