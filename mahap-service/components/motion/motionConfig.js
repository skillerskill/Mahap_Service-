export const EASE = [0.25, 0.1, 0.25, 1];
export const EASE_OUT = [0.22, 1, 0.36, 1];

export const DURATION = {
  fast: 350,
  base: 700,
  slow: 1000,
};

export const VIEWPORT = {
  once: true,
  amount: 0.2,
  rootMargin: '0px 0px -60px 0px',
};

export const variants = {
  fadeUp: { y: 40 },
  fadeDown: { y: -40 },
  fadeLeft: { x: -40 },
  fadeRight: { x: 40 },
  scaleIn: { scale: 0.92 },
  fadeIn: {},
  blurIn: { blur: 8 },
};
