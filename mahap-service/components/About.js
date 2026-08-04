// components/About.js — Narrativa de confiança com imagem editorial

import Link from 'next/link';
import { ArrowRight, Target, Users, Leaf } from 'lucide-react';
import CampaignImage from '@/components/CampaignImage';
import ScrollReveal from './ScrollReveal';
import RevealImage from '@/components/motion/RevealImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { campaignImages } from '@/data/visuals';

const proofPoints = [
  {
    icon: Target,
    title: 'Parceiro oficial Spartan®',
    description: 'Único distribuidor e aplicador oficial para distribuição e aplicação em Angola.',
  },
  {
    icon: Users,
    title: 'Equipas certificadas',
    description: 'Profissionais uniformizados, formados e supervisionados em cada intervenção.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Produtos profissionais biodegradáveis — eficácia com responsabilidade ambiental.',
  },
];

export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="py-24 lg:py-32 bg-[var(--bg-elevated)]">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <RevealImage className="relative aspect-[4/5] max-h-[560px] w-full rounded-2xl shadow-[0_20px_60px_rgba(12,27,51,0.08)]">
            <CampaignImage
              src={campaignImages.about}
              alt="Espaço corporativo limpo — resultado Mahap Service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </RevealImage>

          <div>
            <SectionHeader
              eyebrow="Sobre nós"
              title="Construímos reputação em cada espaço que entregamos."
              description="A Mahap Service existe para elevar o padrão de higienização em Angola. Com acesso directo à linha Spartan®, combinamos química de referência mundial com execução local rigorosa — em empresas, condomínios e residências."
            />

            <ScrollReveal variant="fadeLeft" delay={0.1}>
              <div className="space-y-6 mb-12 mt-10">
                {proofPoints.map((point) => (
                  <div key={point.title} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[var(--brand-blue-soft)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105">
                      <point.icon size={18} className="text-[var(--brand-blue)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] text-[0.9375rem] mb-1">{point.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contacto" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] group link-underline">
                Falar com a equipa
                <ArrowRight size={15} className="icon-hover" aria-hidden />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
