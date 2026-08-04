'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo } from '@/data/services';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let rafId;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8);
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

  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[450ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)]'
          : 'bg-transparent'
      }`}
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
            alt="Mahap Service"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
          <div className="flex flex-col">
            <span className={`font-bold text-[0.9375rem] tracking-tight leading-tight transition-colors duration-300 ${isScrolled ? 'text-[var(--text-primary)]' : 'text-white'}`}>
              Mahap Service
            </span>
            <span className={`text-[0.625rem] font-medium tracking-wide uppercase leading-tight hidden sm:block transition-colors duration-300 ${isScrolled ? 'text-[var(--text-muted)]' : 'text-white/70'}`}>
              Limpeza Profissional
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`nav-link text-[0.875rem] font-medium transition-colors duration-300 py-1 ${
                  isActive(link.href)
                    ? isScrolled ? 'text-[var(--brand-blue)]' : 'text-white'
                    : isScrolled ? 'text-[var(--text-secondary)] hover:text-[var(--brand-blue)]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[var(--brand-blue)] rounded-full" aria-hidden />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${companyInfo.phone1Raw}`}
            className={`flex items-center gap-2 text-sm font-medium transition-colors tabular-nums group ${
              isScrolled ? 'text-[var(--text-secondary)] hover:text-[var(--brand-blue)]' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone size={14} className={isScrolled ? 'text-[var(--brand-blue)]' : 'text-white'} />
            {companyInfo.phone1}
          </a>
          <Link href="/contacto" className="btn-primary !py-2.5 !px-5 !text-sm">
            Orçamento
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 -mr-2 rounded-lg transition-colors ${
            isScrolled ? 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]' : 'text-white hover:bg-white/10'
          }`}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        role="menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-b border-[var(--border-light)] shadow-lg`}
      >
        <div className="container-xl py-6 flex flex-col gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              role="menuitem"
              className={`py-3.5 font-medium text-[0.9375rem] transition-colors border-b border-[var(--border-light)] last:border-0 ${
                isActive(link.href)
                  ? 'text-[var(--brand-blue)]'
                  : 'text-[var(--text-primary)] hover:text-[var(--brand-blue)]'
              }`}
              style={{ transitionDelay: isOpen ? `${idx * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" onClick={closeMenu} className="btn-primary mt-4 justify-center" role="menuitem">
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
