'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/services';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: delayed entrance animation
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setVisible(true);
      return;
    }

    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${companyInfo.phone1Raw}?text=${encodeURIComponent(
    'Olá, Mahap Service! Gostaria de solicitar um orçamento.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ transition: 'opacity 0.5s ease, transform 0.5s ease' }}
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden />
        <MessageCircle size={24} strokeWidth={2} />
      </div>
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-white text-xs font-medium text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale connosco
      </span>
    </a>
  );
}
