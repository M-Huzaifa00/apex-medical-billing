import React from 'react';

interface ApexLogoProps {
  variant?: 'full' | 'icon' | 'dark-bg';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ApexLogo: React.FC<ApexLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
}) => {
  // Dimensions
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  const isDarkBg = variant === 'dark-bg';
  const textColor = isDarkBg ? '#FFFFFF' : '#262A2B';
  const greenColor = '#57B836';
  const tealColor = '#00A7C7';

  // SVG Mark
  const Emblem = (
    <svg
      viewBox="0 0 160 160"
      className="h-full w-auto aspect-square shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Green Gradient */}
        <linearGradient id="apexGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67C63D" />
          <stop offset="100%" stopColor="#459F23" />
        </linearGradient>

        {/* Teal Gradient */}
        <linearGradient id="apexTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00B8DC" />
          <stop offset="100%" stopColor="#008EA7" />
        </linearGradient>

        {/* Shadow for organic depth */}
        <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Group scaled and centered */}
      <g transform="translate(10, 10)">
        {/* Top Green Ribbon */}
        <path
          d="M 58 4 C 68 4 82 12 82 34 C 82 52 74 64 62 76 C 59 79 56 80 52 78 C 50 76 52 70 54 62 C 58 46 54 36 46 22 C 43 16 48 4 58 4 Z"
          fill="url(#apexGreenGrad)"
        />

        {/* Left Green Ribbon */}
        <path
          d="M 4 82 C 4 72 12 58 34 58 C 52 58 64 66 76 78 C 79 81 80 84 78 88 C 76 90 70 88 62 86 C 46 82 36 86 22 94 C 16 97 4 92 4 82 Z"
          fill="url(#apexGreenGrad)"
        />

        {/* Right Cyan-Teal Ribbon */}
        <path
          d="M 136 58 C 136 68 128 82 106 82 C 88 82 76 74 64 62 C 61 59 60 56 62 52 C 64 50 70 52 78 54 C 94 58 104 54 118 46 C 124 43 136 48 136 58 Z"
          fill="url(#apexTealGrad)"
        />

        {/* Bottom Cyan-Teal Ribbon */}
        <path
          d="M 82 136 C 72 136 58 128 58 106 C 58 88 66 76 78 64 C 81 61 84 60 88 62 C 90 64 88 70 86 78 C 82 94 86 104 94 118 C 97 124 92 136 82 136 Z"
          fill="url(#apexTealGrad)"
        />

        {/* Crisp Center Overlap Accent Curves */}
        <path
          d="M 48 20 C 58 42 66 54 84 66 C 74 68 64 64 56 54 C 48 44 46 32 48 20 Z"
          fill="#52B22E"
          opacity="0.3"
        />
        <path
          d="M 120 48 C 98 58 86 66 74 84 C 72 74 76 64 86 56 C 96 48 108 46 120 48 Z"
          fill="#0096B3"
          opacity="0.3"
        />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`${heights[size]} ${className}`}>{Emblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 ${heights[size]} ${className}`}>
      {Emblem}

      {/* Typography Lockup matching the uploaded logo */}
      <div className="flex flex-col justify-center h-full select-none">
        {/* "APEX" in stylized geometric typography */}
        <div
          className="font-bold tracking-[0.14em] leading-none"
          style={{
            color: textColor,
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            fontSize: size === 'sm' ? '1.15rem' : size === 'md' ? '1.45rem' : size === 'lg' ? '1.8rem' : '2.2rem',
            letterSpacing: '0.16em',
          }}
        >
          <span className="font-extrabold">ΛPEX</span>
        </div>

        {/* Green divider bar */}
        <div
          className="w-full my-[2.5px] rounded-full"
          style={{
            backgroundColor: greenColor,
            height: size === 'sm' ? '1.5px' : '2px',
          }}
        />

        {/* "MEDICAL BILLING" in tracked sans-serif */}
        <div
          className="font-semibold uppercase leading-none tracking-[0.24em]"
          style={{
            color: isDarkBg ? '#E6F3E6' : '#2A2E2F',
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            fontSize: size === 'sm' ? '0.42rem' : size === 'md' ? '0.55rem' : size === 'lg' ? '0.68rem' : '0.85rem',
          }}
        >
          Medical Billing
        </div>
      </div>
    </div>
  );
};
