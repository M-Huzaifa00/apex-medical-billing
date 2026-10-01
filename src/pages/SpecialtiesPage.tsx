import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Baby,
  Bandage,
  Bone,
  Brain,
  ClipboardPlus,
  Droplets,
  Dumbbell,
  Eye,
  Flower2,
  HeartPulse,
  HousePlus,
  Leaf,
  Microscope,
  PersonStanding,
  Phone,
  PhoneCall,
  Siren,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react';
import { cubicEase, defaultViewport } from '../utils/animations';

const PHONE_DISPLAY = '305-380-3263';
const PHONE_HREF = 'tel:+13053803263';

const specialties = [
  { name: 'Behavioral Health', icon: Brain },
  { name: 'Family Practice', icon: Users },
  { name: 'Gastroenterology', icon: Microscope },
  { name: 'Urgent Care', icon: Siren },
  { name: 'Nursing Home', icon: HousePlus },
  { name: 'Pain Management', icon: Bandage },
  { name: 'Allergy & Immunology', icon: Flower2 },
  { name: 'Internal Medicine', icon: ClipboardPlus },
  { name: 'Chiropractor', icon: PersonStanding },
  { name: 'Anesthesiology', icon: Syringe },
  { name: 'Cardiology', icon: HeartPulse },
  { name: 'Acupuncture', icon: Leaf },
  { name: 'Ophthalmology', icon: Eye },
  { name: 'Pediatric', icon: Baby },
  { name: 'Orthopedics', icon: Bone },
  { name: 'Physical Therapy', icon: Dumbbell },
  { name: 'Primary Care', icon: Stethoscope },
  { name: 'Urology', icon: Droplets },
];

interface SpecialtiesPageProps {
  onOpenAudit: () => void;
}

export const SpecialtiesPage: React.FC<SpecialtiesPageProps> = ({ onOpenAudit }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">
      {/* 1. Header */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: cubicEase }}
        className="text-center max-w-3xl mx-auto pt-6"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-[#57B836] block mb-3">
          Specialties We Serve
        </span>
        <h1 className="text-4xl sm:text-6xl font-editorial font-normal text-[#0E2925] leading-[1.15] text-balance">
          Billing That Speaks Your Specialty.
        </h1>
        <p className="mt-4 text-lg text-[#747773] leading-relaxed max-w-2xl mx-auto">
          Every specialty has its own codes, modifiers, and payer rules. Tap yours below to talk with a billing specialist who already knows them.
        </p>

        <a
          href={PHONE_HREF}
          className="group mt-8 inline-flex items-center gap-3 pl-2 pr-6 py-2 rounded-full bg-[#0E2925] text-white shadow-[0_12px_32px_-12px_rgba(14,41,37,0.6)] hover:bg-[#57B836] transition-colors cursor-pointer"
        >
          <span className="relative w-10 h-10 rounded-full bg-[#57B836] group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <span className="absolute inset-0 rounded-full bg-[#57B836] animate-ping motion-reduce:animate-none opacity-40 group-hover:opacity-0" />
            <PhoneCall className="relative w-4 h-4" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[11px] uppercase tracking-wider text-white/60 group-hover:text-white/80">
              Call a Billing Specialist
            </span>
            <span className="block text-lg font-semibold tabular-nums">{PHONE_DISPLAY}</span>
          </span>
        </a>
      </motion.section>

      {/* 2. Specialty Labels (each one calls us) */}
      <section className="max-w-4xl mx-auto">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04 } },
          }}
          className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:justify-center sm:gap-3"
        >
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <motion.li
                key={specialty.name}
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: cubicEase },
                  },
                }}
              >
                <a
                  href={PHONE_HREF}
                  aria-label={`Call about ${specialty.name} billing: ${PHONE_DISPLAY}`}
                  title={`Call ${PHONE_DISPLAY}`}
                  className="specialty-chip group h-full w-full sm:w-auto flex sm:inline-flex items-center gap-2 sm:gap-2.5 pl-1.5 pr-3 sm:pr-4 py-1.5 rounded-2xl sm:rounded-full bg-white border border-[#E2E7DF] text-[13px] sm:text-sm leading-tight font-medium text-[#0E2925] shadow-xs hover:bg-[#57B836] hover:border-[#57B836] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-[#57B836]/10 text-[#57B836] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 sm:flex-none">{specialty.name}</span>
                  <Phone className="specialty-chip-phone w-3.5 h-3.5 shrink-0 text-[#57B836]/70 group-hover:text-white transition-colors" />
                </a>
              </motion.li>
            );
          })}
        </motion.ul>

        <p className="mt-6 text-center text-xs text-[#747773]">
          Tap any specialty to call us directly at{' '}
          <a href={PHONE_HREF} className="font-semibold text-[#0E2925] hover:text-[#57B836] transition-colors">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </section>

      {/* 3. Not Listed CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.7, ease: cubicEase }}
        className="rounded-[32px] sm:rounded-[40px] bg-[#0E2925] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
      >
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#EAF7E6]/70">
            Don’t See Your Specialty?
          </span>
          <h2 className="text-3xl sm:text-4xl font-editorial text-white text-balance">
            Call Us Anyway. We’ll Tell You Honestly If We’re a Fit.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#57B836] text-white text-sm font-semibold hover:bg-white hover:text-[#0E2925] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="tabular-nums">{PHONE_DISPLAY}</span>
          </a>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Free Practice Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.section>
    </div>
  );
};
