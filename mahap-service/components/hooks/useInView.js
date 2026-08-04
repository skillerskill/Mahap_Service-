'use client';

import { useRef, useLayoutEffect, useState } from 'react';

export default function useInView(options = {}) {
  const { threshold = 0.2, rootMargin = '0px 0px -20px 0px', once = true } = options;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: reduced-motion immediate reveal
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
