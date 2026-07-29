// app/servicos/page.js — Página de Serviços Completa

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, Building2, Sofa, Car, Shield, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { services, faqs, companyInfo } from '@/data/services';

export const metadata = {
  title: 'Serviços de Limpeza Profissional em Angola',
  description:
    'Conheça os quatro serviços especializados da Mahap Service: limpeza geral e industrial, higienização de estofos, detailing automóvel e controlo de pragas. Todos com produtos Spartan® oficiais.',
  alternates: { canonical: 'https://mahapservice.com/servicos' },
  openGraph: {
    title: 'Serviços | Mahap Service — Limpeza Profissional em Angola',
    description:
      'Quatro serviços especializados com produtos Spartan® em Angola: limpeza geral, estofos, detailing automóvel e controlo de pragas.',
    url: 'https://mahapservice.com/servicos',
  },
};

const iconMap = { Building2, Sofa, Car, Shield };

// FAQ Accordion — Client Component
import FAQAccordion from './FAQAccordion';

export default function ServicosPage() {
  return (
    <main>
      <Navbar />

      {/* ── HERO ───────────────────────────────────────── */}
      <section
        aria-labelledby="servicos-hero-heading"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#0F1923] overflow-hidden dot-pattern"
      >
        <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8860B]/5 blur-[120px] pointer-events-none" />
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <div className="section-label mb-6 justify-center">Os Nossos Serviços</div>
          <h1
            id="servicos-hero-heading"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight tracking-tight mb-6"
          >
            Soluções de limpeza{' '}
            <span className="gradient-text">para cada espaço</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Quatro serviços especializados, executados por equipas certificadas e suportados 
            pelos produtos profissionais <strong className="text-white/80">Spartan®</strong> — 
            os melhores do mundo na sua categoria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="btn-primary group"
              aria-label="Solicitar orçamento de serviço"
            >
              Solicitar Orçamento
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={`https://wa.me/${companyInfo.phone1Raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="Contactar via WhatsApp"
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES DETAIL ─────────────────────────────── */}
      <div className="bg-[#0F1923]">
        {services.map((service, idx) => {
          const Icon = iconMap[service.icon] || Shield;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.slug}
              aria-labelledby={`service-heading-${service.id}`}
              className={`py-20 lg:py-28 ${isEven ? 'bg-[#0F1923]' : 'bg-[#1A2744]'} relative overflow-hidden`}
            >
              {/* Subtle separator */}
              <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              <div className="container-xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(184,134,11,0.12)' }} aria-hidden="true" />
                      <Image
                        src={service.image}
                        alt={`${service.title} — Mahap Service em Luanda, Angola`}
                        width={620}
                        height={440}
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ aspectRatio: '620/440' }}
                      />
                      {/* Number overlay */}
                      <div className="absolute bottom-5 right-5">
                        <span
                          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                          className="text-5xl font-bold text-[#B8860B]/15 select-none"
                          aria-hidden="true"
                        >
                          {service.number}
                        </span>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div
                      className={`absolute -z-10 w-32 h-32 rounded-2xl border border-[#B8860B]/15 ${isEven ? '-bottom-5 -right-5' : '-bottom-5 -left-5'}`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center">
                        <Icon size={18} className="text-[#B8860B]" aria-hidden="true" />
                      </div>
                      <span
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        className="text-[#B8860B] text-xs font-medium tracking-widest uppercase"
                      >
                        Serviço {service.number}
                      </span>
                    </div>

                    <h2
                      id={`service-heading-${service.id}`}
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-4"
                    >
                      {service.title}
                    </h2>

                    <p className="text-white/55 text-[1.0625rem] leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Two-column lists */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      {/* Areas */}
                      <div>
                        <h3
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
                        >
                          Abrangência
                        </h3>
                        <ul className="flex flex-col gap-2.5" role="list">
                          {service.areas.map((area) => (
                            <li key={area} className="flex items-start gap-2.5">
                              <CheckCircle2 size={15} className="text-[#B8860B] mt-0.5 shrink-0" aria-hidden="true" />
                              <span className="text-white/50 text-sm leading-snug">{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
                        >
                          Benefícios
                        </h3>
                        <ul className="flex flex-col gap-2.5" role="list">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2.5">
                              <div className="w-3.5 h-3.5 rounded-full border-2 border-[#B8860B] mt-0.5 shrink-0" aria-hidden="true" />
                              <span className="text-white/50 text-sm leading-snug">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/contacto"
                      className="btn-primary group"
                      aria-label={`Solicitar orçamento para ${service.title}`}
                    >
                      Pedir Orçamento
                      <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-24 lg:py-32 bg-[#1A2744] relative overflow-hidden"
      >
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <div className="section-label mb-6 justify-center">FAQ</div>
              <h2
                id="faq-heading"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-5"
              >
                Perguntas{' '}
                <span className="gradient-text">frequentes</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed">
                Tudo o que precisa de saber antes de contratar os nossos serviços.
              </p>
            </div>

            <FAQAccordion />
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
