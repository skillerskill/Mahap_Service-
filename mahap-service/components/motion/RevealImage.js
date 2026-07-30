'use client';

import { useRef, useLayoutEffect } from 'react';

export default function RevealImage({
  children,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    document.documentElement.classList.add('reveal-image-ready');
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      el.classList.add('reveal-in');
      return;
    }

    el.style.animationDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-in');
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-image ${className}`}
    >
      <div className="reveal-image__inner">
        {children}
      </div>
      <div className="reveal-image__mask" aria-hidden />
    </div>
  );
}
