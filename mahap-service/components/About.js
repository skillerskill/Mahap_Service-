// components/About.js — Secção Sobre Nós (Server Component)

import { CheckCircle2, Target, Users, Leaf } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Oferecer soluções de limpeza e higienização de excelência, utilizando produtos profissionais sustentáveis da Spartan® para garantir ambientes mais saudáveis e seguros em Angola.',
  },
  {
    icon: Users,
    title: 'Equipa',
    text: 'A nossa equipa é composta por técnicos especializados, treinados para executar cada serviço com rigor, pontualidade e respeito pelo espaço do cliente.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    text: 'Utilizamos exclusivamente produtos Spartan® — formulações americanas que conciliam máxima eficácia com responsabilidade ambiental e segurança para os utilizadores.',
  },
];

const differentials = [
  'Distribuidor Oficial Spartan® em Angola',
  'Revendedor Oficial de produtos profissionais',
  'Aplicador Oficial com equipas certificadas',
  'Cobertura completa na cidade de Luanda',
  'Orçamento gratuito e sem compromisso',
  'Serviços adaptados a residências e empresas',
];

export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-24 lg:py-32 bg-[#1A2744] relative z-0 overflow-hidden"
    >
      {/* Background accent */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/10 to-transparent" />
      <div aria-hidden="true" className="absolute -top-64 -right-32 w-[500px] h-[500px] rounded-full bg-[#B8860B]/5 blur-[120px] pointer-events-none" />

      <div className="container-xl">

        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="section-label mb-6">Sobre Nós</div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-6"
          >
            Uma empresa construída sobre{' '}
            <span className="gradient-text">excelência e confiança</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            A Mahap Service nasceu com o propósito de elevar os padrões de limpeza e higienização em Angola. 
            Como parceiros oficiais da <strong className="text-white/80 font-semibold">Spartan®</strong>, 
            temos acesso às melhores tecnologias de limpeza profissional do mundo.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Differentials */}
          <div>
            <h3
              className="text-xl font-semibold text-white mb-8"
            >
              Os nossos diferenciais
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3" role="list">
              {differentials.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#B8860B] mt-0.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-white/65 text-[0.9375rem] leading-snug font-medium group-hover:text-white/85 transition-colors duration-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Quote block */}
            <blockquote className="mt-10 pl-5 border-l-2 border-[#B8860B]/40">
              <p className="text-white/50 text-sm italic leading-relaxed">
                &ldquo;A qualidade dos produtos que utilizamos não é uma opção — é uma exigência. 
                Com a Spartan®, entregamos sempre o melhor padrão ao nosso cliente.&rdquo;
              </p>
              <footer className="mt-2">
                <cite
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  className="text-[#B8860B] text-xs not-italic tracking-wider font-medium"
                >
                  — Mahap Service, Luanda
                </cite>
              </footer>
            </blockquote>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-light rounded-xl p-6 card-glow group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-lg bg-[#B8860B]/10 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#B8860B]/20"
                      aria-hidden="true"
                    >
                      <Icon size={20} className="text-[#B8860B]" />
                    </div>
                    <div>
                      <h3
                        className="text-white font-semibold text-lg mb-2"
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
