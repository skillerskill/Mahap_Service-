'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef, useLayoutEffect, useState } from 'react';
import CampaignImage from '@/components/CampaignImage';
import { campaignImages } from '@/data/visuals';

function AnimatedWord({ children, delay, ready }) {
  return (
    <span className="inline-block overflow-hidden">
      <span
        className={`inline-block ${ready ? 'hero-fade-up' : ''}`}
        style={ready ? { animationDelay: `${delay}s`, animationDuration: '0.7s' } : undefined}
      >
        {children}
      </span>
    </span>
  );
}

export default function HeroContent() {
  const sectionRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    setReady(true);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const parallaxBg = scrollY * 0.15;
  const parallaxGlow = scrollY * 0.08;

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-label="Mahap Service — limpeza profissional em Angola"
      className="relative bg-white overflow-hidden"
    >
      {/* Animated ambient background */}
      <div className="absolute inset-0 pointer-events-none hero-bg-drift" aria-hidden>
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[var(--brand-blue)]/[0.04] rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxBg}px)` }}
        />
        <div
          className="absolute top-1/2 -left-24 w-72 h-72 bg-[var(--brand-blue)]/[0.025] rounded-full blur-3xl"
          style={{ transform: `translateY(${-parallaxBg * 0.5}px)` }}
        />
      </div>

      <div className="container-xl relative">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:min-h-[min(92vh,900px)] gap-6 lg:gap-4">

          {/* Text — staggered word-by-word entrance */}
          <div className="lg:col-span-5 pt-32 pb-16 lg:pt-0 lg:pb-0 xl:pr-8">
            <h1 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[var(--brand-navy)] mb-8">
              <AnimatedWord delay={0} ready={ready}>Soluções</AnimatedWord>{' '}
              <AnimatedWord delay={0.06} ready={ready}>de</AnimatedWord>{' '}
              <AnimatedWord delay={0.1} ready={ready}>limpeza</AnimatedWord>
              <br />
              <span className="text-[var(--brand-blue)]">
                <AnimatedWord delay={0.2} ready={ready}>para</AnimatedWord>{' '}
                <AnimatedWord delay={0.26} ready={ready}>quem</AnimatedWord>{' '}
                <AnimatedWord delay={0.3} ready={ready}>exige</AnimatedWord>
              </span>
              <br />
              <AnimatedWord delay={0.4} ready={ready}>excelência.</AnimatedWord>
            </h1>

            <p
              className={`text-[1.0625rem] text-[var(--text-secondary)] leading-[1.7] max-w-[26rem] mb-12 ${ready ? 'hero-fade-up' : ''}`}
              style={ready ? { animationDelay: '0.55s' } : undefined}
            >
              Distribuidor e aplicador oficial Spartan® em Angola.
              Equipas certificadas, produtos biodegradáveis e protocolos
              definidos para ambientes que não aceitam compromissos.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-start gap-4 ${ready ? 'hero-fade-up' : ''}`}
              style={ready ? { animationDelay: '0.7s' } : undefined}
            >
              <Link href="/contacto" className="btn-primary group">
                Solicitar orçamento
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link href="/servicos" className="btn-outline group">
                Conhecer serviços
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 opacity-50 group-hover:opacity-100" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Image — dramatic entrance with parallax */}
          <div className="lg:col-span-7 relative">
            <div
              className={`relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-[1.25rem] bg-[var(--bg-subtle)] shadow-[0_24px_64px_rgba(12,27,51,0.1)] ${ready ? 'hero-fade-in-right' : ''}`}
              style={ready ? {
                animationDelay: '0.3s',
                transform: `translateY(${-parallaxBg * 0.3}px)`,
              } : undefined}
            >
              <div className="absolute inset-0">
                <CampaignImage
                  src={campaignImages.hero}
                  alt="Ambiente corporativo profissional limpo pela Mahap Service em Luanda"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/15 via-transparent to-transparent pointer-events-none" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[var(--brand-blue)]/[0.06] pointer-events-none" aria-hidden />
            </div>

            {/* Glowing orb — animated */}
            <div
              className={`absolute -top-12 -right-12 w-48 h-48 bg-[var(--brand-blue)]/[0.07] rounded-full blur-3xl pointer-events-none ${ready ? 'hero-glow' : ''}`}
              aria-hidden
              style={ready ? { transform: `translateY(${-parallaxGlow}px)` } : undefined}
            />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-[var(--brand-blue)]/[0.04] rounded-full blur-2xl pointer-events-none"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
