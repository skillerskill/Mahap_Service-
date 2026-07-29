'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import CampaignImage from '@/components/CampaignImage';
import { campaignImages } from '@/data/visuals';

function useInView(ref, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) { setInView(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

export default function HeroContent() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, 0.1);

  const itemStyle = (i) => ({
    opacity: 1,
    transform: inView ? 'none' : 'translateY(30px)',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    transitionDuration: '700ms',
    transitionDelay: inView ? `${i * 120}ms` : '0ms',
  });

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-label="Mahap Service — limpeza profissional em Angola"
      className="relative bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[var(--brand-blue)]/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[var(--brand-blue)]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container-xl relative">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:min-h-[min(92vh,900px)] gap-6 lg:gap-4">

          <div className="lg:col-span-5 pt-32 pb-16 lg:pt-0 lg:pb-0 xl:pr-8">
            <h1
              className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[var(--brand-navy)] mb-8"
              style={itemStyle(0)}
            >
              Soluções de limpeza
              <br />
              <span className="text-[var(--brand-blue)]">para quem exige</span>
              <br />
              excelência.
            </h1>

            <p
              className="text-[1.0625rem] text-[var(--text-secondary)] leading-[1.7] max-w-[26rem] mb-12"
              style={itemStyle(1)}
            >
              Distribuidor e aplicador oficial Spartan® em Angola.
              Equipas certificadas, produtos biodegradáveis e protocolos
              definidos para ambientes que não aceitam compromissos.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={itemStyle(2)}
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

          <div className="lg:col-span-7 relative">
            <div
              className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-[1.25rem] bg-[var(--bg-subtle)] shadow-[0_24px_64px_rgba(12,27,51,0.08)]"
              style={{
                opacity: 1,
                transform: inView ? 'none' : 'translateX(30px) scale(1.04)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '1000ms',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: inView ? '200ms' : '0ms',
              }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/10 via-transparent to-transparent pointer-events-none" aria-hidden />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[var(--brand-blue)]/5 pointer-events-none" aria-hidden />
            </div>

            <div
              className="absolute -top-12 -right-12 w-48 h-48 bg-[var(--brand-blue)]/[0.06] rounded-full blur-3xl pointer-events-none"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
