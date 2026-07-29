// components/Hero.js — Hero Section Premium (Server Component)

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Star, Shield, Award } from 'lucide-react';
import { companyInfo } from '@/data/services';

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Secção principal — Mahap Service"
      className="relative z-0 min-h-screen flex items-center hero-gradient dot-pattern"
    >
      {/* Background decorative elements */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large green orb */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B8860B]/5 blur-[100px]" />
        {/* Small accent orb */}
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#B8860B]/5 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-xl relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ───────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:gap-8">

            {/* Spartan Official Badge */}
            <div className="animate-fade-in">
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#B8860B]/30 bg-[#B8860B]/10 backdrop-blur-sm"
                role="status"
                aria-label="Parceiro oficial Spartan em Angola"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Award size={14} className="text-[#B8860B]" aria-hidden="true" />
                </div>
                <span
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                  className="text-[#B8860B] text-xs font-medium tracking-widest uppercase"
                >
                  Distribuidor Oficial Spartan® · Angola
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up delay-100">
              <h1
                className="text-4xl sm:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
              >
                Excelência em{' '}
                <span className="gradient-text">Limpeza Profissional</span>
                {' '}para Angola
              </h1>
            </div>

            {/* Subheadline */}
            <div className="animate-fade-in-up delay-200">
              <p
                className="text-lg text-white/60 font-medium leading-relaxed max-w-lg"
              >
                Distribuidor, revendedor e aplicador oficial dos produtos químicos profissionais{' '}
                <strong className="text-[#B8860B] font-semibold">Spartan®</strong> em Angola.
                Soluções sustentáveis para ambientes que exigem o melhor.
              </p>
            </div>

            {/* Stats row */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-6">
              {[
                { value: '4', label: 'Serviços Especializados' },
                { value: '100%', label: 'Produto Profissional' },
                { value: 'Luanda', label: 'Base de Operações' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                    className="text-[#B8860B] text-2xl font-semibold"
                  >
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-xs mt-0.5 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="btn-primary group"
                aria-label="Solicitar orçamento de serviço de limpeza"
              >
                Solicitar Orçamento
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/servicos"
                className="btn-outline"
                aria-label="Conhecer todos os serviços Mahap Service"
              >
                Conhecer Serviços
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-[#B8860B]" aria-hidden="true" />
                <span className="text-white/40 text-sm">Produtos certificados</span>
              </div>
              <div className="w-px h-4 bg-white/10" aria-hidden="true" />
              <div className="flex items-center gap-1.5">
                <Star size={14} className="text-[#B8860B]" aria-hidden="true" />
                <span className="text-white/40 text-sm">Equipa especializada</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ──────────────────────────────── */}
          <div className="animate-fade-in delay-200 relative overflow-hidden">
            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Glow border */}
              <div
                className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(184,134,11,0.15)' }}
                aria-hidden="true"
              />

              <Image
                src="/images/hero-cleaning.jpg"
                alt="Equipa Mahap Service a realizar limpeza profissional num escritório moderno em Luanda, Angola"
                width={680}
                height={480}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={{ aspectRatio: '680/480' }}
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Floating card — bottom left */}
              <div
                className="absolute bottom-5 left-5 glass rounded-xl px-4 py-3 flex items-center gap-3 z-20"
                role="note"
                aria-label="Parceiro oficial Spartan"
              >
                <div className="w-9 h-9 rounded-lg bg-[#B8860B] flex items-center justify-center shrink-0">
                  <Shield size={16} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-white text-sm font-semibold leading-tight">
                    Spartan® Partner Oficial
                  </div>
                  <div style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-[#B8860B] text-[10px] tracking-wider">
                    DISTRIBUIDOR · ANGOLA
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl border border-[#B8860B]/20 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-[#B8860B]/5 -z-10"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
          <span className="text-white/25 text-xs font-medium tracking-widest uppercase">
            Explorar
          </span>
          <ChevronDown size={18} className="text-white/25 animate-bounce" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
