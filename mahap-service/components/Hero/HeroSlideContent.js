'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLayoutEffect, useState } from 'react';

export default function HeroSlideContent({ slide, isActive }) {
  const [ready, setReady] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reset ready state on slide change
  useLayoutEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setReady(true), 50);
      return () => clearTimeout(timer);
    }
    setReady(false);
  }, [isActive]);

  return (
    <div className="absolute inset-0 flex items-end pb-24 sm:items-center sm:pb-0 sm:justify-start">
      <div className="container-xl relative z-10 w-full">
        <div className="max-w-2xl">
          {slide.eyebrow && (
            <p
              className={`eyebrow mb-6 text-white/80 ${ready ? 'hero-fade-up' : 'opacity-0'}`}
              style={ready ? { animationDelay: '0.1s' } : undefined}
            >
              {slide.eyebrow}
            </p>
          )}

          {slide.title && (
            <h1
              className={`text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white mb-6 ${ready ? 'hero-fade-up' : 'opacity-0'}`}
              style={ready ? { animationDelay: '0.2s' } : undefined}
            >
              {slide.title}
            </h1>
          )}

          {slide.description && (
            <p
              className={`text-[1.0625rem] text-white/75 leading-[1.7] max-w-xl mb-10 ${ready ? 'hero-fade-up' : 'opacity-0'}`}
              style={ready ? { animationDelay: '0.35s' } : undefined}
            >
              {slide.description}
            </p>
          )}

          <div
            className={`flex flex-col sm:flex-row items-start gap-4 ${ready ? 'hero-fade-up' : 'opacity-0'}`}
            style={ready ? { animationDelay: '0.5s' } : undefined}
          >
            {slide.ctaPrimary && (
              <Link href={slide.ctaPrimary.href} className="btn-primary group">
                {slide.ctaPrimary.label}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            )}
            {slide.ctaSecondary && (
              <Link href={slide.ctaSecondary.href} className="btn-hero-outline group">
                {slide.ctaSecondary.label}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 opacity-60 group-hover:opacity-100" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
