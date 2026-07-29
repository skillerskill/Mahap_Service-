'use client';

import { useRef, useEffect, useState } from 'react';

function AnimatedNumber({ value, duration = 2 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsInView(true); observer.unobserve(el); }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericPart)) { setDisplayValue(value); return; }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) { setDisplayValue(numericPart); return; }
    const startTime = Date.now();
    let rafId;
    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * numericPart));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9.]/g, '');
  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function AnimatedCounter({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-[var(--brand-navy)] tracking-tight leading-none mb-2">
        <AnimatedNumber value={value} duration={2} />
      </p>
      <p className="text-sm text-[var(--text-muted)] font-medium">
        {label}
      </p>
    </div>
  );
}
