// app/layout.js — Root Layout com Metadata Global

import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://mahapservice.com'),
  title: {
    default: 'Mahap Service — Limpeza Profissional & Aplicador Oficial Spartan® em Angola',
    template: '%s | Mahap Service',
  },
  description:
    'A Mahap Service é o distribuidor e aplicador oficial dos produtos Spartan® em Angola. Especialistas em limpeza geral, higienização de estofos, detailing automóvel e controlo de pragas em Luanda.',
  keywords: [
    'limpeza profissional angola',
    'limpeza industrial luanda',
    'spartan angola',
    'higienização estofos luanda',
    'detailing automóvel angola',
    'desinfestação luanda',
    'controlo pragas angola',
    'mahap service',
    'distribuidor spartan angola',
  ],
  authors: [{ name: 'Mahap Service', url: 'https://mahapservice.com' }],
  creator: 'Mahap Service',
  publisher: 'Mahap Service',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    url: 'https://mahapservice.com',
    siteName: 'Mahap Service',
    title: 'Mahap Service — Limpeza Profissional & Aplicador Oficial Spartan® em Angola',
    description:
      'Distribuidor e aplicador oficial dos produtos Spartan® em Angola. Limpeza geral, estofos, detailing automóvel e controlo de pragas em Luanda.',
    images: [
      {
        url: '/images/mahap.png',
        width: 1200,
        height: 630,
        alt: 'Mahap Service — Serviços de Limpeza Profissional em Angola',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahap Service — Limpeza Profissional & Aplicador Oficial Spartan® em Angola',
    description:
      'Distribuidor e aplicador oficial dos produtos Spartan® em Angola. Limpeza geral, estofos, detailing automóvel e controlo de pragas em Luanda.',
    images: ['/images/mahap.png'],
  },
  alternates: {
    canonical: 'https://mahapservice.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://mahapservice.com',
  name: 'Mahap Service',
  legalName: 'Mahap Service, Comércio & Prestação de Serviços, Lda.',
  description:
    'Distribuidor e aplicador oficial dos químicos profissionais Spartan® em Angola. Especialistas em limpeza geral, higienização de estofos, detailing automóvel e controlo de pragas.',
  url: 'https://mahapservice.com',
  telephone: ['+244928258795', '+244974384524'],
  email: 'info@mahapservice.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Sagrada Esperança, Travessa nº 12',
    addressLocality: 'Prenda, Luanda',
    addressCountry: 'AO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -8.8385,
    longitude: 13.2344,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Limpeza Profissional',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Limpeza Geral e Industrial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Higienização de Estofos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Detailer Automóvel' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desinfestação e Controlo de Pragas' } },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-AO">
      <head>
        <meta name="theme-color" content="#0C1B33" />
        <meta name="msapplication-TileColor" content="#0C1B33" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" />
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1581578731548-c64695cc6952?fm=jpg&q=60&w=1260&auto=format&fit=crop" fetchPriority="high" />
        <link rel="stylesheet" href="/swiper.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--brand-blue)] focus:text-white focus:rounded-lg focus:outline-none"
        >
          Ir para o conteúdo principal
        </a>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
