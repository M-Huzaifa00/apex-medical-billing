import React, { useEffect, useRef } from 'react';
import { Github, Construction } from 'lucide-react';

const GITHUB_USERNAME = 'M-Huzaifa00';

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
          <Github className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
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
