// app/page.js — Homepage

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SpartanBanner from '@/components/SpartanBanner';
import ServicesGrid from '@/components/ServicesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mahap Service — Limpeza Profissional & Aplicador Oficial Spartan® em Angola',
  description:
    'A Mahap Service é o distribuidor e aplicador oficial dos produtos Spartan® em Angola. Limpeza geral, higienização de estofos, detailing automóvel e controlo de pragas em Luanda.',
  alternates: { canonical: 'https://mahapservice.com' },
};

export default function HomePage() {
  return (
    <main className="bg-[#0F1923]">
      <Navbar />
      <Hero />
      <About />
      <SpartanBanner />
      <ServicesGrid />
      <CTASection />
      <Footer />
    </main>
  );
}
