// components/SolutionsGrid.js — Secção de Soluções Mahap Service

import Link from 'next/link';
import { ArrowRight, Building2, Sofa, Car, Shield, SprayCan, GraduationCap, Lightbulb } from 'lucide-react';
import { services } from '@/data/services';
import { campaignImages } from '@/data/visuals';
import CampaignImage from '@/components/CampaignImage';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  Building2, Sofa, Car, Shield,
};

const solutions = [
  {
    icon: Building2,
    title: 'Comércio de Produtos Profissionais',
    description: 'Produtos de limpeza, higienização, desinfeção e tratamento de pisos para ambientes profissionais e industriais.',
    link: '/servicos',
  },
  {
    icon: SprayCan,
    title: 'Prestação de Serviços',
    description: 'Limpeza profissional, higienização de ambientes, limpeza industrial, hospitalar e corporativa com equipas certificadas.',
    link: '/servicos',
  },
  {
    icon: GraduationCap,
    title: 'Formação Técnica',
    description: 'Capacitação de equipas, utilização correta dos produtos e boas práticas de higiene profissional.',
    link: '/contacto',
  },
  {
    icon: Lightbulb,
    title: 'Consultoria Técnica',
    description: 'Diagnóstico de necessidades, planeamento de processos de higienização e recomendações especializadas.',
    link: '/contacto',
  },
];

function serviceImage(slug) {
  return campaignImages.byServiceSlug[slug] || services.find((s) => s.slug === slug)?.image;
}

export default function ServicesGrid() {
  return (
    <>
      {/* Soluções Mahap Service */}
      <section id="solucoes" aria-labelledby="solutions-heading" className="py-24 lg:py-32 bg-[var(--bg-elevated)]">
        <div className="container-xl">
          <ScrollReveal variant="fadeUp">
            <div className="max-w-2xl mb-16 lg:mb-20">
              <p className="eyebrow mb-6">Soluções</p>
              <h2 id="solutions-heading" className="text-[clamp(2rem,3.5vw,2.75rem)] mb-6">
                Soluções completas para cada necessidade.
              </h2>
              <p className="lead">
                Da venda de produtos profissionais à formação técnica — oferecemos um ecossistema
                completo de limpeza e higienização para empresas angolanas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, idx) => (
              <ScrollReveal key={solution.title} variant="fadeUp" delay={idx * 0.05}>
                <Link href={solution.link} className="group block p-8 rounded-2xl bg-white border border-[var(--border-light)] card-hover card-premium">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-blue-soft)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105">
                    <solution.icon size={22} className="text-[var(--brand-blue)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{solution.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{solution.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)]">
                    Saber mais
                    <ArrowRight size={14} className="icon-hover" aria-hidden />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" aria-labelledby="services-heading" className="py-24 lg:py-32">
        <div className="container-xl">
          <ScrollReveal variant="fadeUp">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
              <div className="max-w-xl">
                <p className="eyebrow mb-6">Serviços</p>
                <h2 id="services-heading" className="text-[clamp(2rem,3.5vw,2.75rem)] mb-6">
                  Quatro especialidades. Um único padrão de excelência.
                </h2>
                <p className="lead">
                  Cada serviço é executado com produtos Spartan® e protocolos definidos —
                  para que o resultado seja consistente, mensurável e duradouro.
                </p>
              </div>
              <Link
                href="/servicos"
                className="btn-outline shrink-0 self-start lg:self-auto group"
              >
                Ver detalhes
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const IconComp = iconMap[service.icon] || Building2;
              return (
                <ScrollReveal key={service.id} variant="fadeUp" delay={idx * 0.05}>
                  <Link href={`/servicos#${service.slug}`} className="group block rounded-2xl overflow-hidden bg-white border border-[var(--border-light)] card-hover card-premium">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-subtle)]">
                      <CampaignImage
                        src={serviceImage(service.slug)}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm">
                          <IconComp size={18} className="text-[var(--brand-blue)]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[var(--brand-blue)] tabular-nums">{service.number}</span>
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">{service.title}</h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
