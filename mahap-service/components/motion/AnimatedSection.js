'use client';

import { useRef, useEffect, useState } from 'react';

const variantStyles = {
  fadeUp:    { from: 'translateY(40px)',  to: 'none' },
  fadeDown:  { from: 'translateY(-40px)', to: 'none' },
  fadeLeft:  { from: 'translateX(-40px)', to: 'none' },
  fadeRight: { from: 'translateX(40px)',  to: 'none' },
  scaleIn:   { from: 'scale(0.92)',       to: 'none' },
  fadeIn:    { from: 'none',              to: 'none' },
  blurIn:    { from: 'blur(8px)',         to: 'none' },
};

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  ...props
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const v = variantStyles[variant] || variantStyles.fadeUp;

  let style;
  if (animated) {
    style = {
      opacity: 1,
      transform: v.to,
      filter: 'none',
      transitionProperty: 'opacity, transform, filter',
      transitionDuration: `${duration * 1000}ms`,
      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      transitionDelay: `${delay * 1000}ms`,
    };
  } else {
    style = {
      opacity: 1,
      transform: v.from,
      filter: variant === 'blurIn' ? 'blur(8px)' : undefined,
      transition: 'none',
    };
  }

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  );
}
