// app/contacto/page.js — Página de Contacto (Server Component wrapper)

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactoContent from './ContactoContent';

export const metadata = {
  title: 'Contacto — Solicitar Orçamento Gratuito',
  description:
    'Entre em contacto com a Mahap Service para solicitar um orçamento gratuito. Formulário integrado com WhatsApp, telefones e morada em Luanda, Angola.',
  alternates: { canonical: 'https://mahapservice.com/contacto' },
  openGraph: {
    title: 'Contacto | Mahap Service — Solicitar Orçamento',
    description:
      'Solicite o seu orçamento gratuito. Respondemos em menos de 24 horas.',
    url: 'https://mahapservice.com/contacto',
  },
};

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <ContactoContent />
      <Footer />
    </main>
  );
}
