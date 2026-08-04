'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/services';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${companyInfo.phone1Raw}?text=${encodeURIComponent(
    'Olá, Mahap Service! Gostaria de solicitar um orçamento.'
  )}`;

  if (!visible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group animate-fade-in"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300">
        <MessageCircle size={24} strokeWidth={2} aria-hidden />
      </div>
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-white text-xs font-medium text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Fale connosco
      </span>
    </a>
  );
}
