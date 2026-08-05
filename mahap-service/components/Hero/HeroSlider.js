'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import KenBurnsImage from './KenBurnsImage';
import HeroSlideContent from './HeroSlideContent';
import heroSlides from '@/data/heroSlides';

const SLIDE_INTERVAL = 6000;
const TRANSITION_DURATION = 1200;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = heroSlides.length;

  useEffect(() => {
    setReady(true);
  }, []);

  const goTo = useCallback(
    (index) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [next, isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else goTo(activeIndex - 1);
    }
  };

  return (
    <div
      className="hero-fullscreen relative w-full overflow-hidden bg-[var(--brand-navy)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transitionDuration: `${TRANSITION_DURATION}ms`,
              transitionTimingFunction: 'ease-in-out',
              zIndex: index === activeIndex ? 1 : 0,
            }}
          >
            <div className="relative h-full w-full">
              <KenBurnsImage
                src={slide.image}
                alt={slide.title}
                isActive={index === activeIndex && ready}
                variant={index}
              />
              <div
                className="absolute inset-0 pointer-events-none z-10"
                aria-hidden
                style={{
                  background: `linear-gradient(
                    to top,
                    var(--brand-navy) 0%,
                    rgba(12, 27, 51, 0.55) 40%,
                    rgba(12, 27, 51, 0.25) 70%,
                    transparent 100%
                  )`,
                }}
              />
              <HeroSlideContent
                slide={slide}
                isActive={index === activeIndex}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        role="tablist"
        aria-label="Slides da apresentação"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Slide ${index + 1}: ${slide.title}`}
            onClick={() => goTo(index)}
            className="group relative w-10 h-[3px] rounded-full transition-all duration-500"
            style={{
              backgroundColor:
                index === activeIndex
                  ? 'white'
                  : 'rgba(255, 255, 255, 0.35)',
            }}
          >
            <span
              className="absolute inset-0 rounded-full bg-white origin-left"
              style={{
                transform: index === activeIndex ? 'scaleX(1)' : 'scaleX(0)',
                transition: `transform ${SLIDE_INTERVAL}ms linear`,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
