import React, { useEffect, useRef } from 'react';
import { Construction } from 'lucide-react';

const GITHUB_USERNAME = 'M-Huzaifa00';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Temporary banner shown while the site is under active development.
// Publishes its height as --dev-banner-height so sticky elements can sit below it.
export const DevBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const root = document.documentElement;
    const observer = new ResizeObserver(() => {
      root.style.setProperty('--dev-banner-height', `${banner.offsetHeight}px`);
    });
    observer.observe(banner);

    return () => {
      observer.disconnect();
      root.style.removeProperty('--dev-banner-height');
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      role="status"
      className="sticky top-0 z-50 mb-4 w-full overflow-hidden bg-[#0E2925] text-[#F8FAF7] border-b border-[#57B836]/40 shadow-[0_4px_20px_rgba(14,41,37,0.25)]"
    >
      {/* Moving brand-gradient sheen */}
      <div className="dev-banner-sheen pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[13px] sm:text-[15px] tracking-wide text-center">
        {/* Status pill */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#57B836]/15 border border-[#57B836]/40 text-[#8FE06F] font-semibold uppercase text-[11px] sm:text-xs tracking-[0.12em]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#57B836] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#57B836]" />
          </span>
          <Construction className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          In Development
        </span>

        <span className="text-[#F8FAF7]/85">
          This website is in development stage by
        </span>

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#8FE06F] underline decoration-[#00A7C7]/60 underline-offset-4 hover:decoration-[#57B836] transition-colors"
        >
          <GithubIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          {GITHUB_USERNAME}
        </a>

        <span className="hidden sm:inline text-[#F8FAF7]/30" aria-hidden="true">•</span>

        <span className="text-[#F8FAF7]/70">
          &copy; {year} All rights reserved
        </span>
      </div>
    </div>
  );
};
