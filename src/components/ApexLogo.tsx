import React from 'react';

interface ApexLogoProps {
  variant?: 'full' | 'dark-bg';
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

  // Same artwork with the charcoal wordmark turned white, for dark backgrounds
  const src = variant === 'dark-bg' ? '/assets/apex-logo-dark-bg.png' : '/assets/apex-logo.png';

  return (
    <div className={`flex items-center ${heights[size]} ${className}`}>
      <img
        src={src}
        alt="Apex Medical Billing"
        width={4064}
        height={1214}
        className="h-full w-auto max-w-none"
      />
    </div>
  );
};
