'use client';

import { useRef, useEffect, useState } from 'react';

export default function RevealImage({
  children,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) { setAnimated(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = animated
    ? {
        opacity: 1,
        transform: 'scale(1)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '1000ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${delay * 1000}ms`,
      }
    : {
        opacity: 1,
        transform: 'scale(1)',
      };

  return (
    <div
      ref={ref}
      className={`reveal-image ${className}`}
      style={style}
    >
      <div className="reveal-image__inner">
        {children}
      </div>
      <div className="reveal-image__mask" aria-hidden />
    </div>
  );
}
