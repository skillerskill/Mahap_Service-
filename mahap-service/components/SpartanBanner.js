// components/SpartanBanner.js — Banner Parceria Oficial Spartan® (Server Component)

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Globe, Leaf, ShieldCheck } from 'lucide-react';
import { companyInfo } from '@/data/services';

const roles = [
  {
    icon: Award,
    label: 'Distribuidor Oficial',
    desc: 'Único distribuidor autorizado dos produtos Spartan® em Angola.',
  },
  {
    icon: ShieldCheck,
    label: 'Revendedor Oficial',
    desc: 'Comercialização direta dos produtos profissionais originais.',
  },
  {
    icon: Leaf,
    label: 'Aplicador Oficial',
    desc: 'Equipa treinada para aplicação técnica com máxima eficácia.',
  },
];

export default function SpartanBanner() {
  return (
    <section
      id="spartan"
      aria-labelledby="spartan-heading"
      className="py-24 lg:py-32 bg-[#0F1923] relative z-0 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/spartan-banner.jpg"
          alt="Linha de produtos profissionais Spartan® utilizados pela Mahap Service"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] via-[#0F1923]/90 to-[#0F1923]/70" />
      </div>

      {/* Top separator */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent z-10" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B8860B]/25 bg-[#B8860B]/10 mb-8">
              <Globe size={13} className="text-[#B8860B]" aria-hidden="true" />
              <span
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                className="text-[#B8860B] text-[10px] font-medium tracking-[0.14em] uppercase"
              >
                Parceria Americana · Impacto Angolano
              </span>
            </div>

            <h2
              id="spartan-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-6"
            >
              Orgulhosamente parceiros{' '}
              <span className="gradient-text">Spartan®</span>{' '}
              em Angola
            </h2>

            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-lg">
              A Spartan® é uma marca americana de referência mundial em produtos químicos 
              profissionais sustentáveis para limpeza, higienização e desinfestação. 
              A Mahap Service é o único distribuidor, revendedor e aplicador oficial em Angola.
            </p>

            {/* Spartan attributes */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['Certificação Internacional', 'Fórmulas Biodegradáveis', 'Alta Performance', 'Segurança Comprovada'].map((attr) => (
                <span
                  key={attr}
                  className="text-xs font-medium text-white/50 border border-white/10 px-3 py-1.5 rounded-full bg-white/5"
                >
                  {attr}
                </span>
              ))}
            </div>

            <Link
              href="/contacto"
              className="btn-primary group"
              aria-label="Solicitar mais informações sobre os produtos Spartan"
            >
              Conhecer os Produtos
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Right column — roles */}
          <div className="flex flex-col gap-4">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.label}
                  className="flex items-start gap-5 p-6 glass rounded-xl card-glow group"
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:bg-[#B8860B]/20 group-hover:border-[#B8860B]/40"
                    aria-hidden="true"
                  >
                    <Icon size={22} className="text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3
                        className="text-white font-semibold text-lg"
                      >
                        {role.label}
                      </h3>
                      <span
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        className="text-[#B8860B] text-[10px] bg-[#B8860B]/10 px-2 py-0.5 rounded font-medium tracking-wider"
                        aria-label="Número de credencial"
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-white/45 text-sm leading-relaxed">{role.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Tagline bottom */}
            <div className="mt-2 text-center">
              <p style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-white/20 text-xs tracking-widest uppercase">
                {companyInfo.spartan.brand} · {companyInfo.spartan.origin} · Angola
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/15 to-transparent z-10" />
    </section>
  );
}
