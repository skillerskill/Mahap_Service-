// components/CTASection.js — Fecho focado em confiança

import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/data/services';
import ScrollReveal from './ScrollReveal';

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${companyInfo.phone1Raw}?text=${encodeURIComponent(
    'Olá, gostaria de solicitar um orçamento para os vossos serviços.'
  )}`;

  return (
    <section id="orcamento" aria-labelledby="cta-heading" className="py-24 lg:py-32 bg-[var(--bg-elevated)]">
      <div className="container-xl">
        <ScrollReveal variant="fadeUp">
          <div className="relative rounded-3xl overflow-hidden bg-[var(--brand-navy)] p-10 lg:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-blue)]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="lg:col-span-7 mb-10 lg:mb-0">
                <p className="text-[0.75rem] font-bold tracking-[0.14em] uppercase text-white/50 mb-4">Próximo passo</p>
                <h2 id="cta-heading" className="text-[clamp(1.75rem,3vw,2.5rem)] text-white mb-4 leading-tight">
                  Conte-nos o seu espaço. Nós desenhamos a solução.
                </h2>
                <p className="text-base text-white/50 leading-relaxed max-w-md">
                  Orçamento gratuito, resposta em 24 horas e proposta adaptada
                  ao volume, horário e criticidade do ambiente.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="flex flex-col gap-4">
                  <Link href="/contacto" className="btn-primary w-full sm:w-auto justify-center group">
                    Solicitar orçamento
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary-light w-full sm:w-auto justify-center group">
                    WhatsApp
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-white/40">
                    <Phone size={14} className="text-white/30" />
                    <span className="tabular-nums">{companyInfo.phone1}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/40">
                    <Mail size={14} className="text-white/30" />
                    <span>{companyInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/40">
                    <MapPin size={14} className="text-white/30" />
                    <span>{companyInfo.address.city}, {companyInfo.address.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
