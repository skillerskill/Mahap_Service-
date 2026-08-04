// components/Segments.js — Segmentos atendidos pela Mahap Service

import { Building2, Stethoscope, Hotel, Utensils, Factory, GraduationCap, Home, Landmark } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const segments = [
  { icon: Stethoscope, label: 'Hospitais e Clínicas' },
  { icon: Hotel, label: 'Hotéis e Restaurantes' },
  { icon: Building2, label: 'Escritórios e Corporações' },
  { icon: Home, label: 'Condomínios' },
  { icon: GraduationCap, label: 'Escolas e Instituições' },
  { icon: Factory, label: 'Indústrias' },
  { icon: Utensils, label: 'Cozinhas Industriais' },
  { icon: Landmark, label: 'Instituições Públicas' },
];

export default function Segments() {
  return (
    <section id="segmentos" aria-labelledby="segments-heading" className="py-16 sm:py-24 lg:py-32 bg-[var(--bg-elevated)]">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Segmentos"
          title="Setores que confiam na Mahap Service."
          description="Atendemos desde hospitais a hotéis, escritórios a indústrias — cada sector com protocolos específicos e equipas especializadas."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {segments.map((segment, idx) => (
            <ScrollReveal key={segment.label} variant="scaleIn" delay={idx * 0.05}>
              <div className="group flex flex-col items-center text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-white border border-[var(--border-light)] card-hover card-premium">
                <div className="w-14 h-14 rounded-2xl bg-[var(--brand-blue-soft)] flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)] transition-all duration-300 group-hover:scale-105">
                  <segment.icon size={24} className="text-[var(--brand-blue)] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-[var(--text-primary)]">{segment.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
