// components/Footer.js

import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/data/services';
import { navLinks } from '@/data/navigation';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="section-dark pt-24 pb-12 overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/8">
          <ScrollReveal variant="fadeRight" className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white">
                <Image src="/images/mahap.png" alt="" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base leading-tight">Mahap Service</span>
                <span className="text-[0.625rem] font-medium text-white/40 tracking-wide uppercase leading-tight">
                  Limpeza Profissional
                </span>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-sm mb-8">
              Parceiro oficial Spartan® em Angola. Limpeza profissional com padrão internacional, sede em Luanda.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Atendimento disponível
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="md:col-span-3">
            <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-5">Navegação</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft" delay={0.2} className="md:col-span-4">
            <p className="text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-white/30 mb-5">Contacto</p>
            <address className="not-italic text-sm text-white/50 space-y-3 leading-relaxed">
              <a href={`tel:${companyInfo.phone1Raw}`} className="block hover:text-white transition-colors duration-300 tabular-nums break-all">
                {companyInfo.phone1}
              </a>
              <a href={`tel:${companyInfo.phone2Raw}`} className="block hover:text-white transition-colors duration-300 tabular-nums break-all">
                {companyInfo.phone2}
              </a>
              <a href={`mailto:${companyInfo.email}`} className="block hover:text-white transition-colors duration-300 break-all">
                {companyInfo.email}
              </a>
              <span className="block text-white/35 text-xs leading-relaxed pt-1">
                {companyInfo.address.street}, {companyInfo.address.neighborhood}, {companyInfo.address.city}
              </span>
            </address>
          </ScrollReveal>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/30">
          <p>© {year} {companyInfo.legalName}</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-blue)] opacity-60" />
            <p>Spartan® — parceiro oficial · Angola</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
