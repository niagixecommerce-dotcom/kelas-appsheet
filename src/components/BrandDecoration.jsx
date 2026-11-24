import React from 'react';

export function BerfestLogo({ size = 'md' }) {
  const dim = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  return (
    <div
      className={`${dim} rounded-2xl bg-berfest-gradient flex items-center justify-center shadow-md relative overflow-hidden flex-shrink-0`}
    >
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-300/40 blur-[2px]" />
      <svg viewBox="0 0 32 32" className="w-5 h-5 text-white relative z-10" fill="none">
        <path
          d="M7 9.5C7 8.12 8.12 7 9.5 7H22.5C23.88 7 25 8.12 25 9.5V14.5C25 15.88 23.88 17 22.5 17H13.5L7 23.5V9.5Z"
          fill="currentColor"
        />
        <circle cx="21" cy="22.5" r="3.5" fill="#FEF08A" />
      </svg>
    </div>
  );
}

export function HeroOrganicWave() {
  return (
    <svg
      viewBox="0 0 1440 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-cover pointer-events-none select-none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="berfestWave1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="38%" stopColor="#F97316" />
          <stop offset="78%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="berfestWave2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#FB923C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#B91C1C" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        d="M0 120C190 25 360 225 600 175C840 125 990 10 1210 55C1320 77 1390 125 1440 145V360H0V120Z"
        fill="url(#berfestWave2)"
      />
      <path
        d="M0 185C220 110 410 275 690 215C970 155 1130 50 1440 130V360H0V185Z"
        fill="url(#berfestWave1)"
      />
    </svg>
  );
}

export function CornerBlob({ position = 'top-right', className = '' }) {
  const posClasses =
    position === 'top-right'
      ? '-top-24 -right-24'
      : position === 'bottom-left'
      ? '-bottom-24 -left-24'
      : '-top-20 -left-20';
  return (
    <div
      className={`pointer-events-none select-none absolute ${posClasses} w-72 h-72 rounded-full opacity-90 blur-[2px] ${className}`}
      style={{
        background:
          'radial-gradient(circle at 30% 30%, #FACC15 0%, #F97316 48%, #B91C1C 100%)',
      }}
    />
  );
}
