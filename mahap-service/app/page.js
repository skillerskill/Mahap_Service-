// app/page.js — Homepage

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

const Hero = dynamic(() => import('@/components/Hero'), { loading: () => <div className="hero-fullscreen bg-[var(--brand-navy)]" /> });
const Stats = dynamic(() => import('@/components/Stats'), { loading: () => <div className="py-10 sm:py-16 bg-white border-y border-[var(--border-light)]" /> });
const About = dynamic(() => import('@/components/About'), { loading: () => <div className="py-16 sm:py-24 bg-[var(--bg-elevated)]" /> });
const SpartanBanner = dynamic(() => import('@/components/SpartanBanner'), { loading: () => <div className="min-h-[400px]" /> });
const ServicesGrid = dynamic(() => import('@/components/ServicesGrid'), { loading: () => <div className="min-h-[400px]" /> });
const Segments = dynamic(() => import('@/components/Segments'), { loading: () => <div className="min-h-[400px]" /> });
const Gallery = dynamic(() => import('@/components/Gallery'), { loading: () => <div className="min-h-[400px]" /> });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { loading: () => <div className="min-h-[400px]" /> });
const CTASection = dynamic(() => import('@/components/CTASection'), { loading: () => <div className="min-h-[400px]" /> });
const Footer = dynamic(() => import('@/components/Footer'), { loading: () => <div className="min-h-[200px]" /> });

export const metadata = {
  title: 'Mahap Service — Limpeza Profissional & Aplicador Oficial Spartan® em Angola',
  description:
    'A Mahap Service é o distribuidor e aplicador oficial dos produtos Spartan® em Angola. Especialistas em limpeza geral, higienização de estofos, detailing automóvel e controlo de pragas em Luanda.',
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
      <CTASection />
      <Footer />
    </main>
  );
}
