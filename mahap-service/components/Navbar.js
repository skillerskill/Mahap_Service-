'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { companyInfo } from '@/data/services';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre Nós', href: '/#sobre' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1923]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-xl flex items-center justify-between h-[72px]"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Mahap Service — Página Inicial"
          onClick={closeMenu}
        >
          <div className="w-9 h-9 rounded-lg bg-[#B8860B] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2L4 6v12l8 4 8-4V6L12 2z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path d="M12 2v18M4 6l8 4 8-4" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              className="text-white font-semibold text-[17px] tracking-tight"
            >
              Mahap Service
            </span>
            <span
              style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              className="text-[#B8860B] text-[9px] tracking-widest uppercase"
            >
              Spartan® Partner
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-[0.9375rem] font-medium text-white/75 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-[#B8860B] focus-visible:outline-offset-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${companyInfo.phone1Raw}`}
            className="flex items-center gap-2 text-white/60 hover:text-[#B8860B] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B]"
            aria-label={`Ligar para ${companyInfo.phone1}`}
          >
            <Phone size={15} strokeWidth={2} />
            <span style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-sm font-medium">
              {companyInfo.phone1}
            </span>
          </a>
          <Link
            href="/contacto"
            className="btn-primary !py-2.5 !px-5 !text-sm"
            aria-label="Solicitar orçamento de serviço"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-white/75 hover:text-white hover:bg-white/5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#B8860B]"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação móvel"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0F1923]/98 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="container-xl py-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150 font-medium focus-visible:outline-2 focus-visible:outline-[#B8860B]"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-3">
            <a
              href={`tel:${companyInfo.phone1Raw}`}
              className="flex items-center gap-2 text-white/60 hover:text-[#B8860B] transition-colors px-4"
              aria-label={`Ligar para ${companyInfo.phone1}`}
            >
              <Phone size={15} />
              <span style={{ fontFamily: 'IBM Plex Mono, monospace' }} className="text-sm">
                {companyInfo.phone1}
              </span>
            </a>
            <Link
              href="/contacto"
              onClick={closeMenu}
              className="btn-primary mx-4 justify-center !text-sm"
              aria-label="Solicitar orçamento"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
