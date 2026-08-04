'use client';

import CampaignImage from '@/components/CampaignImage';

const kenBurnsVariants = [
  'animate-ken-burns-1',
  'animate-ken-burns-2',
  'animate-ken-burns-3',
];

export default function KenBurnsImage({ src, alt, isActive, variant = 0 }) {
  const animClass = kenBurnsVariants[variant % kenBurnsVariants.length];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute inset-0 will-change-transform ${isActive ? animClass : 'scale-100'}`}
      >
        <CampaignImage
          src={src}
          alt={alt}
          fill
          priority={variant === 0}
          className="object-cover"
          sizes="100vw"
          quality={60}
        />
      </div>
    </div>
  );
}
