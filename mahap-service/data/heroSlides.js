/**
 * Dados dos slides do Hero — Mahap Service
 * 3 slides com imagens profissionais do Unsplash
 */

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?fm=jpg&q=60&w=1260&auto=format&fit=crop',
    eyebrow: 'Distribuidor oficial · Angola',
    title: 'Limpeza com precisão de detalhes',
    description:
      'A Mahap Service é o distribuidor e aplicador oficial Spartan® em Angola. Equipas certificadas, produtos biodegradáveis e protocolos definidos para ambientes que não aceitam compromissos.',
    ctaPrimary: { label: 'Solicitar orçamento', href: '/contacto' },
    ctaSecondary: { label: 'Conhecer serviços', href: '/servicos' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?fm=jpg&q=60&w=1260&auto=format&fit=crop',
    eyebrow: 'Spartan® · Angola',
    title: 'Produtos que as empresas mais exigentes escolhem',
    description:
      'Química profissional sustentável com eficácia comprovada. Da venda à aplicação técnica — o parceiro certo em Angola.',
    ctaPrimary: { label: 'Produtos Spartan', href: '/servicos#spartan' },
    ctaSecondary: { label: 'Contactar-nos', href: '/contacto' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?fm=jpg&q=60&w=1260&auto=format&fit=crop',
    eyebrow: 'Luanda · Angola',
    title: 'Ambientes impecáveis, sempre',
    description:
      'Limpeza geral, higienização de estofos, detailing automóvel e controlo de pragas — com o padrão Spartan®.',
    ctaPrimary: { label: 'Ver serviços', href: '/servicos' },
    ctaSecondary: { label: 'Falar connosco', href: '/contacto' },
  },
];

export default heroSlides;
