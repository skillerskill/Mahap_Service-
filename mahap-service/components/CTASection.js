// components/CTASection.js — Chamada à Ação Final (Server Component)

import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/services';

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${companyInfo.phone1Raw}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20os%20vossos%20servi%C3%A7os.`;

  return (
    <section
      id="orcamento"
      aria-labelledby="cta-heading"
      className="py-24 lg:py-32 bg-[#1A2744] relative z-0 overflow-hidden"
    >
      {/* Top line */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />

      {/* Large background orb */}
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#B8860B]/5 blur-[120px]" />
      </div>

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <div className="section-label mb-8 justify-center">
            Contacte-nos
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Pronto para um ambiente{' '}
            <span className="gradient-text">mais limpo e saudável?</span>
          </h2>

          {/* Description */}
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Solicite um orçamento gratuito sem compromisso. 
            Respondemos em menos de 24 horas com uma proposta 
            personalizada para as suas necessidades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contacto"
              className="btn-primary !px-8 !py-4 !text-base group"
              aria-label="Solicitar orçamento de limpeza profissional"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-8 !py-4 !text-base group"
              aria-label="Contactar via WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
          </div>

          {/* Contact pills */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone1Raw}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-white/10 hover:border-[#B8860B]/30 transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-[#B8860B]"
              aria-label={`Ligar para ${companyInfo.phone1}`}
            >
              <Phone size={14} className="text-[#B8860B]" aria-hidden="true" />
              <span
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                className="text-white/60 text-sm group-hover:text-white/90 transition-colors"
              >
                {companyInfo.phone1}
              </span>
            </a>
            <a
              href={`tel:${companyInfo.phone2Raw}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-white/10 hover:border-[#B8860B]/30 transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-[#B8860B]"
              aria-label={`Ligar para ${companyInfo.phone2}`}
            >
              <Phone size={14} className="text-[#B8860B]" aria-hidden="true" />
              <span
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                className="text-white/60 text-sm group-hover:text-white/90 transition-colors"
              >
                {companyInfo.phone2}
              </span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border-white/10 hover:border-[#B8860B]/30 transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-[#B8860B]"
              aria-label={`Enviar email para ${companyInfo.email}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#B8860B]" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors">
                {companyInfo.email}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/10 to-transparent" />
    </section>
  );
}
