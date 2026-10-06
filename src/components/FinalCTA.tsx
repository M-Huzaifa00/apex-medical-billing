import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import ctaBg from '../assets/images/story_physician_financial_1790286614347.png';
import { cubicEase, defaultViewport } from '../utils/animations';

interface FinalCTAProps {
  onOpenAudit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAudit }) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.85, ease: cubicEase }}
        className="relative rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-[#F8FAF7] overflow-hidden shadow-2xl p-8 sm:p-14 lg:p-20 border border-[#57B836]/30"
      >
        {/* Background Image Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={ctaBg}
            alt="Physician director in contemporary healthcare practice"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E2925]/80 via-[#0E2925]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.15, ease: cubicEase }}
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#EAF7E6]"
          >
            <ShieldCheck className="w-4 h-4 text-[#EAF7E6]" />
            <span>Free Practice Audit</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8, delay: 0.25, ease: cubicEase }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display leading-[1.1] text-white text-balance"
          >
            You’ve Done the Work. <br />
            <span className="text-[#97D388]">Let’s Get Your Practice Paid</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8, delay: 0.35, ease: cubicEase }}
            className="text-lg sm:text-xl font-display font-light text-[#F8FAF7]/85 leading-snug max-w-2xl text-balance"
          >
            Get a closer look at your revenue cycle, identify gaps in your billing process, and leave with clear recommendations for strengthening your RCM.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.45, ease: cubicEase }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenAudit}
              className="px-8 py-4 rounded-full bg-[#F8FAF7] text-[#0E2925] text-sm font-display font-bold hover:bg-white transition-all shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get a Free Practice Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F8FAF7] border border-white/20 text-sm font-display font-bold transition-all backdrop-blur-sm inline-flex items-center gap-2 cursor-pointer"
            >
              Explore Our Services
            </Link>
          </motion.div>

          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#F8FAF7]/60">
            <span>24-Hour Claim Submission</span>
            <span className="text-white/40">·</span>
            <span>Confidential Handling</span>
            <span className="text-white/40">·</span>
            <span>No Obligation</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
