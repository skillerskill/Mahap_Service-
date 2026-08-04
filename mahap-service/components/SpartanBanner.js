// components/SpartanBanner.js — Autoridade de marca, imagem visível

import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, Wrench } from 'lucide-react';
import CampaignImage from '@/components/CampaignImage';
import ScrollReveal from './ScrollReveal';
import RevealImage from '@/components/motion/RevealImage';
import { campaignImages } from '@/data/visuals';

const credentials = [
  { icon: Award, title: 'Distribuidor oficial', detail: 'Acesso directo à linha profissional Spartan® em Angola.' },
  { icon: ShieldCheck, title: 'Revendedor autorizado', detail: 'Produtos originais para empresas e parceiros certificados.' },
  { icon: Wrench, title: 'Aplicador certificado', detail: 'Equipas formadas para dosagem, segurança e performance.' },
];

export default function SpartanBanner() {
  return (
    <section id="spartan" aria-labelledby="spartan-heading" className="section-dark py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/10 via-transparent to-transparent pointer-events-none" />

      <div className="container-xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <ScrollReveal variant="fadeRight">
            <h2 id="spartan-heading" className="text-[clamp(2rem,3.5vw,2.75rem)] text-white mb-6">
              A química que as instalações mais exigentes escolhem.
            </h2>
            <p className="lead mb-12">
              Spartan® é referência global em limpeza profissional sustentável.
              A Mahap Service é o parceiro exclusivo em Angola — da venda à aplicação
              técnica no terreno.
            </p>

            <div className="space-y-6 mb-12">
              {credentials.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors duration-300">
                    <item.icon size={18} className="text-white/70" />
                  </div>
                  <div>
                    <dt className="text-white font-semibold text-[0.9375rem] mb-1">{item.title}</dt>
                    <dd className="text-white/45 text-sm leading-relaxed">{item.detail}</dd>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contacto" className="btn-primary-light group">
              Pedir informação Spartan®
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </ScrollReveal>

          <RevealImage delay={0.1} className="relative aspect-[4/5] max-h-[520px] rounded-2xl">
            <CampaignImage
              src={campaignImages.spartan}
              alt="Produtos e equipamento profissional Spartan utilizados pela Mahap Service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-inverse)]/60 via-transparent to-transparent" aria-hidden />
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
