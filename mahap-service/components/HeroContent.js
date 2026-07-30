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

  const reveal = (i, delay = 0) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'none' : 'translateY(20px)',
    transitionProperty: 'opacity, transform',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    transitionDuration: '800ms',
    transitionDelay: inView ? `${i * 100 + delay}ms` : '0ms',
  });

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-label="Mahap Service — limpeza profissional em Angola"
      className="relative bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-blue)]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container-xl relative">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:min-h-[min(92vh,880px)] gap-8 lg:gap-10">

          <div className="lg:col-span-5 pt-16 pb-12 lg:pt-0 lg:pb-0">
            <p
              className="eyebrow mb-6"
              style={reveal(0)}
            >
              Distribuidor oficial · Angola
            </p>

            <h1
              className="text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--brand-navy)] mb-6"
              style={reveal(1)}
            >
              Limpeza com
              <br />
              <span className="text-[var(--brand-blue)]">precisão de detalhes</span>
            </h1>

            <p
              className="text-[1.0625rem] text-[var(--text-secondary)] leading-[1.7] max-w-[28rem] mb-10"
              style={reveal(2)}
            >
              A Mahap Service é o distribuidor e aplicador oficial Spartan® em Angola.
              Equipas certificadas, produtos biodegradáveis e protocolos definidos
              para ambientes que não aceitam compromissos.
            </p>

            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={reveal(3)}
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
              className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateX(30px) scale(1.03)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '1000ms',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: inView ? '200ms' : '0ms',
              }}
            >
              <CampaignImage
                src={campaignImages.hero}
                alt="Ambiente corporativo profissional limpo pela Mahap Service em Luanda"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/25 via-transparent to-transparent pointer-events-none" aria-hidden />
            </div>

            <div
              className="absolute -bottom-4 -left-4 w-28 h-28 border border-[var(--brand-blue)]/[0.06] rounded-full pointer-events-none"
              aria-hidden
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'scale(0.7)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: inView ? '500ms' : '0ms',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
