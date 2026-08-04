// components/Hero.js — Hero wrapper (Server Component)

import HeroSlider from './Hero/HeroSlider';

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Mahap Service — limpeza profissional em Angola"
    >
      <HeroSlider />
    </section>
  );
}
