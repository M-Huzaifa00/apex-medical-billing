import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { ApexLogo } from './ApexLogo';

interface FooterProps {
  onOpenAudit: () => void;
}

const pageLinks = [
  { label: 'Homepage', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Specialties', to: '/specialties' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'Contact Us', to: '/contact-us' },
];

const serviceLinks = [
  'Medical Billing',
  'Certified Medical Coding',
  'Provider Credentialing',
  'Accounts Receivable (A/R) Recovery',
  'Payment Posting',
  'Denial Management',
  'Financial Analytics',
  'Virtual Medical Assistance',
];

const trustItems = [
  '100% HIPAA-Compliant',
  'Authorized Personnel',
  'Secure Data Handling',
  'Confidentiality Standards',
  'Privacy Policy',
  'Terms of Service',
];

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-[#0E2925] text-[#F8FAF7] pt-16 sm:pt-20 pb-12 mt-12 border-t border-[#57B836]">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Column: Brand & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              to="/"
              className="text-left cursor-pointer group flex items-center"
              aria-label="Apex Medical Billing Home"
            >
              <ApexLogo variant="dark-bg" size="md" />
            </Link>

            <h3 className="text-3xl sm:text-4xl font-display text-white leading-tight max-w-md">
              Your Partner in Medical Billing.
            </h3>

            <p className="text-sm text-[#EAF7E6]/80 leading-relaxed max-w-sm">
              We help healthcare practices manage billing, recover outstanding revenue, and reduce administrative work so their teams can stay focused on patient care.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="px-6 py-3 rounded-full bg-[#F8FAF7] text-[#0E2925] text-xs font-display font-bold hover:bg-white transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Free Practice Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4 space-y-2 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EAF7E6]" />
                <span>Provider Hotline: 305-380-3263</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EAF7E6]" />
                <span>sales@apexmb.com</span>
              </div>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-white/50 block mb-4">
                Pages
              </span>
              <ul className="space-y-3 text-xs text-[#EAF7E6]">
                {pageLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="inline-block hover:text-white transition-colors cursor-pointer text-left">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Services */}
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-white/50 block mb-4">
                Services
              </span>
              <ul className="space-y-3 text-xs text-[#EAF7E6]">
                {serviceLinks.map((label) => (
                  <li key={label}>
                    <Link to="/services" className="inline-block hover:text-white transition-colors cursor-pointer text-left">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Trust */}
            <div>
              <span className="text-xs font-display font-bold uppercase tracking-wider text-white/50 block mb-4">
                Security & Trust
              </span>
              <ul className="space-y-3 text-xs text-[#EAF7E6]">
                {trustItems.map((item) => (
                  <li key={item}><span className="text-white/60">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 APEX Medical Billing LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HIPAA-Compliant</span>
            <span>·</span>
            <span>Authorized Access</span>
            <span>·</span>
            <span>Built for Healthcare Practices</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
