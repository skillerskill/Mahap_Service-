// app/page.js — Homepage

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import SpartanBanner from '@/components/SpartanBanner';
import ServicesGrid from '@/components/ServicesGrid';
import Segments from '@/components/Segments';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
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
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <SpartanBanner />
      <ServicesGrid />
      <Segments />
      <Gallery />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
