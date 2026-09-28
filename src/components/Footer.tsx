import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';
import { ApexLogo } from './ApexLogo';

interface FooterProps {
  onOpenAudit: () => void;
}

const pageLinks = [
  { label: 'Homepage', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'Contact Us', to: '/contact-us' },
];

const serviceLinks = [
  'Full Revenue Cycle',
  'Medical Coding & Audit',
  'Electronic Claim Scrubbing',
  'Denial Management & Appeals',
  'Aging A/R Recovery',
  'Payment Reconciliation',
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

            <h3 className="text-3xl sm:text-4xl font-editorial text-white font-normal leading-tight max-w-md">
              A Better Revenue Cycle Starts Here.
            </h3>

            <p className="text-sm text-[#EAF7E6]/80 leading-relaxed max-w-sm">
              We empower independent medical practices with transparent, compliant, and results-driven revenue cycle management.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="px-6 py-3 rounded-full bg-[#F8FAF7] text-[#0E2925] text-xs font-semibold hover:bg-white transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Free Billing Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4 space-y-2 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EAF7E6]" />
                <span>HIPAA-Compliant & SOC 2 Type II Certified Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EAF7E6]" />
                <span>Provider Hotline: (800) 492-3810</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EAF7E6]" />
                <span>audit@apexmedicalbilling.com</span>
              </div>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block mb-4">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block mb-4">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block mb-4">
                Security & Trust
              </span>
              <ul className="space-y-3 text-xs text-[#EAF7E6]">
                <li><span className="text-white/60">HIPAA BAA Agreement</span></li>
                <li><span className="text-white/60">SOC 2 Type II Certified</span></li>
                <li><span className="text-white/60">AAPC Member Code</span></li>
                <li><span className="text-white/60">AHIMA Standardized</span></li>
                <li><span className="text-white/60">Privacy Policy</span></li>
                <li><span className="text-white/60">Terms of Service</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Apex Medical Billing LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>HIPAA-Certified</span>
            <span>·</span>
            <span>AAPC & AHIMA Affiliated</span>
            <span>·</span>
            <span>Built for Independent Healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
