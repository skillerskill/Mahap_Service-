// components/ServicesGrid.js — Grid de Serviços Premium (Server Component)

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Sofa, Car, Shield } from 'lucide-react';
import { services } from '@/data/services';

const iconMap = {
  Building2,
  Sofa,
  Car,
  Shield,
};

export default function ServicesGrid() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="py-24 lg:py-32 bg-[#0F1923] relative z-0 overflow-hidden"
    >
      {/* BG decoration */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#B8860B]/5 blur-[150px] pointer-events-none" />

      <div className="container-xl relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="section-label mb-6 justify-center">Serviços</div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-5"
          >
            Soluções completas para{' '}
            <span className="gradient-text">cada necessidade</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Quatro serviços especializados, todos suportados pelos produtos profissionais Spartan®, 
            para garantir resultados que superam expectativas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <article
                key={service.id}
                className="glass-light rounded-2xl overflow-hidden card-glow group"
                aria-labelledby={`service-title-${service.id}`}
              >
                {/* Image */}
                <div className="relative h-52 lg:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Serviço de ${service.title} pela Mahap Service em Luanda, Angola`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/80 via-[#0F1923]/20 to-transparent" aria-hidden="true" />

                  {/* Service number */}
                  <div className="absolute top-4 left-4">
                    <span
                      style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                      className="service-number bg-[#0F1923]/70 backdrop-blur-sm px-3 py-1.5 rounded-md border border-[#B8860B]/20"
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#B8860B]/15 backdrop-blur-sm border border-[#B8860B]/20 flex items-center justify-center">
                    <Icon size={18} className="text-[#B8860B]" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <h3
                    id={`service-title-${service.id}`}
                    className="text-white text-xl font-semibold mb-3 leading-snug"
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Quick areas */}
                  <ul className="flex flex-wrap gap-2 mb-6" role="list" aria-label={`Áreas abrangidas pelo serviço ${service.title}`}>
                    {service.areas.slice(0, 3).map((area) => (
                      <li key={area}>
                        <span className="text-[11px] font-medium text-white/40 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                          {area}
                        </span>
                      </li>
                    ))}
                    {service.areas.length > 3 && (
                      <li>
                        <span className="text-[11px] font-medium text-[#B8860B]/70 bg-[#B8860B]/5 border border-[#B8860B]/15 px-2.5 py-1 rounded-full">
                          +{service.areas.length - 3} mais
                        </span>
                      </li>
                    )}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/servicos#${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#B8860B] text-sm font-semibold hover:text-[#D4A843] transition-colors duration-200 group/link focus-visible:outline-2 focus-visible:outline-[#B8860B] focus-visible:outline-offset-2 rounded"
                    aria-label={`Saber mais sobre ${service.title}`}
                  >
                    Saber mais
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href="/servicos"
            className="btn-outline"
            aria-label="Ver todos os serviços Mahap Service"
          >
            Ver todos os serviços
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
