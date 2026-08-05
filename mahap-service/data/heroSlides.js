/**
 * Dados dos slides do Hero — Mahap Service
 * 3 slides com imagens locais optimizadas
 */

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    eyebrow: 'Distribuidor oficial · Angola',
    title: 'Limpeza com precisão de detalhes',
    description:
      'A Mahap Service é o distribuidor e aplicador oficial Spartan® em Angola. Equipas certificadas, produtos biodegradáveis e protocolos definidos para ambientes que não aceitam compromissos.',
    ctaPrimary: { label: 'Solicitar orçamento', href: '/contacto' },
    ctaSecondary: { label: 'Conhecer serviços', href: '/servicos' },
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    eyebrow: 'Spartan® · Angola',
    title: 'Produtos que as empresas mais exigentes escolhem',
    description:
      'Química profissional sustentável com eficácia comprovada. Da venda à aplicação técnica — o parceiro certo em Angola.',
    ctaPrimary: { label: 'Produtos Spartan', href: '/servicos#spartan' },
    ctaSecondary: { label: 'Contactar-nos', href: '/contacto' },
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    eyebrow: 'Luanda · Angola',
    title: 'Ambientes impecáveis, sempre',
    description:
      'Limpeza geral, higienização de estofos, detailing automóvel e controlo de pragas — com o padrão Spartan®.',
    ctaPrimary: { label: 'Ver serviços', href: '/servicos' },
    ctaSecondary: { label: 'Falar connosco', href: '/contacto' },
  },
];

export default heroSlides;
