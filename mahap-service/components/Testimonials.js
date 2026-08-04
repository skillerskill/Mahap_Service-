// components/Testimonials.js — Testemunhos de clientes

import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Director de Operações',
    company: 'Hotel Presidente',
    text: 'A Mahap Service transformou a higienização do nosso hotel. O padrão de qualidade é consistente e a equipa é extremamente profissional.',
    rating: 5,
  },
  {
    name: 'Ana Rodrigues',
    role: 'Gestora de Facilities',
    company: 'Banco BAI',
    text: 'Contractamos a Mahap Service para limpeza dos nossos escritórios. A resposta é sempre rápida e os resultados superam as expectativas.',
    rating: 5,
  },
  {
    name: 'Miguel Santos',
    role: 'Director Técnico',
    company: 'Clínica Sagrada Esperança',
    text: 'A formação técnica que a Mahap Service prestou à nossa equipa foi fundamental para elevar os padrões de higienização hospitalar.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testemunhos" aria-labelledby="testimonials-heading" className="py-24 lg:py-32">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Testemunhos"
          title="O que dizem os nossos clientes."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal key={testimonial.name} variant="slideUpBounce" delay={idx * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border border-[var(--border-light)] card-hover card-premium flex flex-col">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote size={24} className="text-[var(--brand-blue)] opacity-20 mb-4" />

                <p className="text-[var(--text-secondary)] leading-relaxed mb-8 flex-1">
                  {testimonial.text}
                </p>

                <div className="pt-6 border-t border-[var(--border-light)]">
                  <p className="font-semibold text-[var(--text-primary)] text-sm">{testimonial.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{testimonial.role} · {testimonial.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
