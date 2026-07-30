'use client';

import { useRef, useLayoutEffect, useState } from 'react';

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
  amount = 0.1,
  once = true,
  ...props
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

    // Check if already in view (for desktop where element loads already visible)
    const rect = el.getBoundingClientRect();
    const isInitiallyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (isInitiallyInView) {
      setTimeout(() => {
        el.classList.add('sr-in');
      }, delay * 1000);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-in');
          if (once) observer.unobserve(el);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px' 
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration, once]);

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