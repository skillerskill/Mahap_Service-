'use client';

import AnimatedSection from '@/components/motion/AnimatedSection';

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  amount,
  once,
  ...props
}) {
  return (
    <AnimatedSection
      variant={variant}
      delay={delay}
      duration={duration}
      className={className}
      {...props}
    >
      {children}
    </AnimatedSection>
  );
}
