'use client';

import { useRef, useLayoutEffect } from 'react';

let ready = false;

function markReady() {
  if (ready) return;
  ready = true;
  document.documentElement.classList.add('sr-ready');
}

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  ...props
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    markReady();
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      el.classList.add('sr-in');
      return;
    }

    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-in');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div
      ref={ref}
      className={`sr ${className}`}
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
}
