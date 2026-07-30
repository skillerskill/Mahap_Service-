'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from '@/data/services';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrollY(y);
        setIsScrolled(y > 8);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      role="banner"
      className={\`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-[450ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] \${
        isScrolled
          ? 'bg-white/92 backdrop-saturate-150 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)]'
          : 'bg-white/0'
      }\`}
    >
      <nav className="container-xl flex items-center justify-between h-[72px]" aria-label="Navegação principal">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Mahap Service — início"
          onClick={closeMenu}
        >
          <Image
            src="/images/mahap.png"
            alt=""
            width={36}
            height={36}
            className="object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold text-[0.9375rem] tracking-tight text-[var(--text-primary)] leading-tight">
              Mahap Service
            </span>
            <span className="text-[0.625rem] font-medium text-[var(--text-muted)] tracking-wide uppercase leading-tight hidden sm:block">
              Limpeza Profissional
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors duration-300 py-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={\`tel:\${companyInfo.phone1Raw}\`}
            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors tabular-nums group"
          >
            <Phone size={14} className="text-[var(--brand-blue)] opacity-70 group-hover:opacity-100 transition-opacity" />
            {companyInfo.phone1}
          </a>
          <Link href="/contacto" className="btn-primary !py-2.5 !px-5 !text-sm">
            Orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 -mr-2 text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] rounded-lg transition-colors"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={\`lg:hidden overflow-hidden transition-all duration-300 ease-out \${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-[var(--border-light)] shadow-lg\`}
      >
        <div className="container-xl py-6 flex flex-col gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3.5 text-[var(--text-primary)] font-medium text-[0.9375rem] hover:text-[var(--brand-blue)] transition-colors border-b border-[var(--border-light)] last:border-0"
              style={{ transitionDelay: isOpen ? \`\${idx * 50}ms\` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={closeMenu} className="btn-primary mt-4 justify-center">
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
