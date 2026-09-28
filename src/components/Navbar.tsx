import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ApexLogo } from './ApexLogo';

interface NavbarProps {
  onOpenAudit: () => void;
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-[calc(var(--dev-banner-height,0px)_+_1rem)] z-40 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between px-6 py-3 bg-white/95 backdrop-blur-md rounded-full border border-[#E2E7DF] shadow-[0_4px_24px_rgba(87,184,54,0.08)] transition-all">
        {/* Left: Brand Wordmark */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-left cursor-pointer group flex items-center"
          aria-label="Apex Medical Billing Home"
        >
          <ApexLogo size="sm" />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `relative py-1 text-[13px] tracking-wide transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#57B836] font-semibold'
                    : 'text-[#747773] hover:text-[#57B836]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#57B836] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#57B836] hover:bg-[#0E2925] rounded-full transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap cursor-pointer inline-flex items-center gap-1.5"
          >
            <span>Free Billing Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenAudit}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#57B836] rounded-full whitespace-nowrap cursor-pointer"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1E2423] hover:bg-[#E2E7DF]/50 rounded-full transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 bg-white/98 backdrop-blur-lg rounded-3xl border border-[#E2E7DF] shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `px-3 py-2 text-left text-sm font-medium rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#57B836]/10 text-[#57B836] font-semibold'
                      : 'text-[#1E2423] hover:bg-[#F8FAF7]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E2E7DF]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 text-xs font-semibold text-white bg-[#57B836] rounded-full text-center hover:bg-[#0E2925] transition-colors cursor-pointer"
            >
              Get a Free Billing Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
