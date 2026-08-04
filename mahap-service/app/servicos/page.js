// app/servicos/page.js

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Building2, Sofa, Car, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CampaignImage from '@/components/CampaignImage';
import ScrollReveal from '@/components/ScrollReveal';
import RevealImage from '@/components/motion/RevealImage';
import PageHero from '@/components/motion/PageHero';
import { services } from '@/data/services';
import { campaignImages } from '@/data/visuals';

const CTASection = dynamic(() => import('@/components/CTASection'), { loading: () => <div className="min-h-[300px]" /> });
const Footer = dynamic(() => import('@/components/Footer'), { loading: () => <div className="min-h-[200px]" /> });
const FAQAccordion = dynamic(() => import('./FAQAccordion'));

export const metadata = {
  title: 'Serviços de Limpeza Profissional em Angola',
  description:
    'Limpeza geral e industrial, higienização de estofos, detailing automóvel e controlo de pragas — Mahap Service, parceiro Spartan® em Luanda.',
  alternates: { canonical: 'https://mahapservice.com/servicos' },
};

const iconMap = { Building2, Sofa, Car, Shield };

function imageFor(slug) {
  return campaignImages.byServiceSlug[slug];
}

export default function ServicosPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <PageHero
        eyebrow="Serviços"
        title="Protocolos definidos para cada tipo de ambiente."
        description="Equipas certificadas e produtos Spartan® em todas as intervenções — residenciais, corporativas ou industriais."
      >
        <Link href="/contacto" className="btn-primary group">
          Solicitar orçamento
          <ArrowRight size={16} className="icon-hover" aria-hidden />
        </Link>
      </PageHero>

      {services.map((service, idx) => {
        const reversed = idx % 2 === 1;
        const IconComp = iconMap[service.icon] || Building2;
        return (
          <section
            key={service.id}
            id={service.slug}
            className={`py-20 lg:py-28 ${idx % 2 === 0 ? 'bg-[var(--bg-elevated)]' : 'bg-white'}`}
          >
            <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <RevealImage className={`relative aspect-[16/11] rounded-2xl ${reversed ? 'lg:order-2' : ''}`}>
                <CampaignImage
                  src={imageFor(service.slug)}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </RevealImage>

              <div className={reversed ? 'lg:order-1' : ''}>
                <ScrollReveal variant="fadeUp">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue-soft)] flex items-center justify-center">
                      <IconComp size={18} className="text-[var(--brand-blue)]" />
                    </div>
                    <span className="text-sm font-bold tabular-nums text-[var(--brand-blue)]">{service.number}</span>
                  </div>
                  <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] mb-6">{service.title}</h2>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-10">{service.description}</p>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.1}>
                  <div className="grid sm:grid-cols-2 gap-8 mb-10 text-sm">
                    <div>
                      <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-4">Abrangência</p>
                      <ul className="space-y-2.5 text-[var(--text-secondary)]">
                        {service.areas.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[var(--brand-blue)] mt-2 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--text-muted)] mb-4">Benefícios</p>
                      <ul className="space-y-2.5 text-[var(--text-secondary)]">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeUp" delay={0.15}>
                  <Link href="/contacto" className="btn-outline group">
                    Pedir orçamento
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5 opacity-50 group-hover:opacity-100" aria-hidden />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 lg:py-32 bg-[var(--bg-elevated)]">
        <div className="container-xl max-w-2xl mx-auto">
          <ScrollReveal variant="blurIn">
            <div className="text-center mb-12">
              <p className="eyebrow mb-6 justify-center">FAQ</p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)]">Perguntas frequentes</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
