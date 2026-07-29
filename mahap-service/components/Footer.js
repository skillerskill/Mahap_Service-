// components/Footer.js — Rodapé Premium (Server Component)

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '@/data/services';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre Nós', href: '/#sobre' },
  { label: 'Contacto', href: '/contacto' },
];

const serviceLinks = [
  { label: 'Limpeza Geral e Industrial', href: '/servicos#limpeza-geral-industrial' },
  { label: 'Higienização de Estofos', href: '/servicos#higienizacao-estofos' },
  { label: 'Detailer Automóvel', href: '/servicos#detailer-automovel' },
  { label: 'Desinfestação e Controlo de Pragas', href: '/servicos#desinfestacao-controlo-pragas' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${companyInfo.phone1Raw}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.`;

  return (
    <footer
      role="contentinfo"
      className="bg-[#0A1219] border-t border-white/5"
    >
      {/* Main Footer */}
      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
              aria-label="Mahap Service — Página inicial"
            >
              <div className="w-9 h-9 rounded-lg bg-[#B8860B] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L4 6v12l8 4 8-4V6L12 2z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M12 2v18M4 6l8 4 8-4" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-white font-semibold text-[17px] tracking-tight">
                  Mahap Service
                </span>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-[#B8860B] text-[9px] tracking-widest uppercase">
                  Spartan® Partner
                </span>
              </div>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Distribuidor, revendedor e aplicador oficial dos produtos Spartan® em Angola. 
              Excelência em limpeza profissional desde Luanda.
            </p>

            {/* Social / WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#B8860B] hover:text-[#D4A843] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B] focus-visible:outline-offset-2 rounded"
              aria-label="Contactar via WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar connosco no WhatsApp
            </a>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3
              className="text-white font-semibold text-sm tracking-wide uppercase mb-5"
            >
              Navegação
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B] focus-visible:outline-offset-1 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3
              className="text-white font-semibold text-sm tracking-wide uppercase mb-5"
            >
              Serviços
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200 leading-snug focus-visible:outline-2 focus-visible:outline-[#B8860B] focus-visible:outline-offset-1 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3
              className="text-white font-semibold text-sm tracking-wide uppercase mb-5"
            >
              Contacto
            </h3>
            <address className="not-italic flex flex-col gap-4">
              {/* Phones */}
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${companyInfo.phone1Raw}`}
                  className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B] rounded group"
                  aria-label={`Ligar para ${companyInfo.phone1}`}
                >
                  <Phone size={13} className="text-[#B8860B] shrink-0" aria-hidden="true" />
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-sm">
                    {companyInfo.phone1}
                  </span>
                </a>
                <a
                  href={`tel:${companyInfo.phone2Raw}`}
                  className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B] rounded group"
                  aria-label={`Ligar para ${companyInfo.phone2}`}
                >
                  <Phone size={13} className="text-[#B8860B] shrink-0" aria-hidden="true" />
                  <span style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-sm">
                    {companyInfo.phone2}
                  </span>
                </a>
              </div>

              {/* Email */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B] rounded"
                aria-label={`Enviar email para ${companyInfo.email}`}
              >
                <Mail size={13} className="text-[#B8860B] shrink-0" aria-hidden="true" />
                <span className="text-sm">{companyInfo.email}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/40 text-sm leading-relaxed">
                  {companyInfo.address.street},<br />
                  {companyInfo.address.neighborhood},<br />
                  {companyInfo.address.city}, {companyInfo.address.country}
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <Clock size={13} className="text-[#B8860B] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-white/40 text-sm leading-relaxed">
                  <span>{companyInfo.workingHours.weekdays}</span><br />
                  <span>{companyInfo.workingHours.saturday}</span>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {currentYear} {companyInfo.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/15 text-xs">Parceiro oficial</span>
            <span
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              className="text-[#B8860B]/50 text-xs font-medium tracking-widest"
            >
              SPARTAN®
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
