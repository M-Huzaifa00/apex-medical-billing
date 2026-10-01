import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { cubicEase, defaultViewport } from '../utils/animations';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-14 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.85, ease: cubicEase }}
        className="relative rounded-[32px] sm:rounded-[40px] bg-[#57B836] text-[#F8FAF7] px-6 sm:px-14 lg:px-24 py-16 sm:py-24 overflow-hidden shadow-[0_16px_40px_rgba(87,184,54,0.22)]"
      >
        {/* Subtle radial warmth texture */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0E2925]/85 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#068A23]/20 rounded-full blur-2xl pointer-events-none -z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 0.15, ease: cubicEase }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#EAF7E6] uppercase"
          >
            <span>Billing Support Built Around Your Practice</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8, delay: 0.25, ease: cubicEase }}
            className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal leading-[1.2] text-[#F8FAF7] text-balance"
          >
            Medical Billing That Follows Through on the Care You’ve Already Delivered.
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.4, ease: cubicEase }}
            className="w-16 h-[1px] bg-[#EAF7E6]/40 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.8, delay: 0.5, ease: cubicEase }}
            className="text-lg sm:text-2xl font-editorial font-normal text-[#EAF7E6] leading-relaxed max-w-2xl mx-auto text-balance"
          >
            We stay on top of claim issues and unpaid balances so your team spends less time chasing payments and more time focused on patient care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7, delay: 0.6, ease: cubicEase }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#EAF7E6]/25 text-sm sm:text-base font-medium text-[#F8FAF7] text-balance"
          >
            <ShieldCheck className="w-5 h-5 shrink-0 text-[#EAF7E6]" />
            <span>100% HIPAA-Compliant Medical Billing, With Patient Privacy at Every Step.</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
