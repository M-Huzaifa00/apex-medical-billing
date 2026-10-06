import React from 'react';
import { Link } from 'react-router';
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
  { name: 'Pediatrics', icon: Baby },
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
        <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836] block mb-3">
          Specialty-Focused Billing Support
        </span>
        <h1 className="text-4xl sm:text-6xl font-display text-[#0E2925] leading-[1.1] text-balance">
          Billing Expertise Across 18+ Healthcare Specialties.
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-display font-light text-[#747773] leading-snug max-w-2xl mx-auto">
          Every specialty comes with different requirements. Our billing support adapts to those differences to help keep claims accurate, follow-up consistent, and revenue moving.
        </p>

        <Link
          to="/contact-us"
          className="mt-8 px-8 py-3.5 rounded-full bg-[#57B836] text-white text-sm font-display font-bold hover:bg-[#0E2925] transition-all shadow-md hover:shadow-lg active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Schedule a 1:1 Meeting</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.section>

      {/* 2. Specialty Labels (each one calls us) */}
      <section className="max-w-4xl mx-auto">
        <span className="text-xs font-display font-bold uppercase tracking-wider text-[#57B836] block text-center mb-6">
          Specialties We Serve
        </span>

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
          Select your specialty to explore the billing support available for your practice.
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
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#EAF7E6]/70">
            Not Listed Above?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-white text-balance">
            Your Specialty Could Still Be a Fit.
          </h2>
          <p className="text-sm sm:text-base text-[#EAF7E6]/80 leading-relaxed">
            Tell us about your practice and billing needs. We’ll help determine whether APEX can support your revenue cycle.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#57B836] text-white text-sm font-display font-bold hover:bg-white hover:text-[#0E2925] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="tabular-nums">{PHONE_DISPLAY}</span>
          </a>
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 text-white text-sm font-display font-bold hover:bg-white/20 transition-all border border-white/20 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get a Free Practice Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.section>
    </div>
  );
};
