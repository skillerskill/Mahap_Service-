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

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const isScrolled = scrollY > 8;
  const scrollProgress = Math.min(scrollY / 100, 1);
  const logoScale = 1 - scrollProgress * 0.08;

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: isScrolled ? `rgba(255,255,255,${0.88 + scrollProgress * 0.07})` : 'rgba(255,255,255,0)',
        backdropFilter: `blur(${12 + scrollProgress * 8}px) saturate(${100 + scrollProgress * 50}%)`,
        boxShadow: isScrolled
          ? `0 1px 3px rgba(15,23,42,${0.02 + scrollProgress * 0.04}), 0 ${4 + scrollProgress * 8}px ${16 + scrollProgress * 12}px rgba(15,23,42,${0.03 + scrollProgress * 0.05})`
          : '0 0 0 rgba(0,0,0,0)',
        transition: 'background-color 0.3s, box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <nav className="container-xl flex items-center justify-between h-[72px]" aria-label="Navegação principal">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Mahap Service — início"
          onClick={closeMenu}
        >
          <div
            className="relative w-9 h-9 rounded-lg overflow-hidden bg-white ring-1 ring-[var(--border-light)] transition-shadow group-hover:shadow-md"
            style={{ transform: `scale(${logoScale})`, transformOrigin: 'left center' }}
          >
            <Image
              src="/images/mahap.jpg"
              alt=""
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </div>
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
            href={`tel:${companyInfo.phone1Raw}`}
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
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white/95 backdrop-blur-xl border-b border-[var(--border-light)] shadow-lg`}
      >
        <div className="container-xl py-6 flex flex-col gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-3.5 text-[var(--text-primary)] font-medium text-[0.9375rem] hover:text-[var(--brand-blue)] transition-colors border-b border-[var(--border-light)] last:border-0"
              style={{ transitionDelay: isOpen ? `${idx * 50}ms` : '0ms' }}
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
