// src/data/services.js — Dados dos serviços Mahap Service

export const services = [
  {
    id: 1,
    slug: 'limpeza-geral-industrial',
    number: '01',
    title: 'Limpeza Geral e Industrial',
    shortDescription:
      'Soluções profissionais de limpeza para empresas, escritórios, condomínios e residências — com produtos sustentáveis Spartan®.',
    description:
      'A Mahap Service oferece serviços completos de limpeza geral e industrial, utilizando os produtos químicos profissionais da marca americana Spartan®. As nossas equipas especializadas garantem ambientes impecáveis em qualquer escala — de residências a grandes instalações industriais.',
    image: '/images/service-limpeza-geral.jpg',
    icon: 'Building2',
    areas: [
      'Escritórios e sedes corporativas',
      'Empresas e indústrias',
      'Condomínios residenciais e comerciais',
      'Residências particulares',
      'Limpeza pós-obra',
      'Limpezas profundas periódicas',
    ],
    benefits: [
      'Equipas certificadas e uniformizadas',
      'Produtos Spartan® biodegradáveis',
      'Resultados garantidos',
      'Flexibilidade de horários',
    ],
    color: '#B8860B',
  },
  {
    id: 2,
    slug: 'higienizacao-estofos',
    number: '02',
    title: 'Higienização de Estofos',
    shortDescription:
      'Eliminação profunda de manchas, ácaros, fungos e odores em sofás, tapetes, carpetes e colchões.',
    description:
      'O nosso serviço de higienização de estofos combina tecnologia de extração a vapor com os produtos especializados Spartan® para restaurar e proteger os seus estofados. Eliminamos manchas resistentes, ácaros, fungos e odores desagradáveis com eficácia comprovada.',
    image: '/images/service-estofos.jpg',
    icon: 'Sofa',
    areas: [
      'Sofás e divãs',
      'Tapetes e carpetes',
      'Colchões e bases',
      'Cadeiras de escritório',
      'Poltronas e banquetas',
      'Alcatifas e passadeiras',
    ],
    benefits: [
      'Remoção de manchas resistentes',
      'Eliminação de ácaros e alérgenos',
      'Eliminação de fungos e mofos',
      'Neutralização de odores',
    ],
    color: '#B8860B',
  },
  {
    id: 3,
    slug: 'detailer-automovel',
    number: '03',
    title: 'Detailer Automóvel',
    shortDescription:
      'Lavagem técnica, polimento, proteção de pintura e higienização interior para devolver o brilho ao seu veículo.',
    description:
      'O nosso serviço de Detailing Automóvel vai além da lavagem convencional. Utilizamos técnicas profissionais e produtos Spartan® de alta performance para restaurar, proteger e valorizar o seu veículo. Cada trabalho é executado com rigor e atenção ao detalhe.',
    image: '/images/service-detailing.jpg',
    icon: 'Car',
    areas: [
      'Lavagem técnica exterior',
      'Higienização completa do interior',
      'Limpeza e desincrustação de motor',
      'Polimento e correção de pintura',
      'Proteção cerâmica da pintura',
      'Tratamento de bancos e teto',
      'Restauração de faróis',
    ],
    benefits: [
      'Valorização do veículo',
      'Proteção duradoura da pintura',
      'Interior higienizado e perfumado',
      'Técnicos especializados em detailing',
    ],
    color: '#B8860B',
  },
  {
    id: 4,
    slug: 'desinfestacao-controlo-pragas',
    number: '04',
    title: 'Desinfestação e Controlo de Pragas',
    shortDescription:
      'Sanitização profissional contra vírus, bactérias, insetos e pragas urbanas com produtos certificados Spartan®.',
    description:
      'A Mahap Service oferece soluções completas de desinfestação e controlo de pragas para ambientes residenciais e comerciais. Utilizamos os biocidas profissionais da Spartan® para garantir ambientes seguros, sanitizados e livres de qualquer agente nocivo.',
    image: '/images/service-desinfestacao.jpg',
    icon: 'Shield',
    areas: [
      'Sanitização de espaços interiores',
      'Eliminação de vírus e bactérias',
      'Controlo de insetos rastejantes',
      'Eliminação de pragas urbanas',
      'Desratização e desbaratização',
      'Tratamento preventivo e curativo',
    ],
    benefits: [
      'Produtos biocidas certificados',
      'Equipa com equipamento de proteção',
      'Tratamento sem risco para moradores',
      'Relatório técnico do serviço',
    ],
    color: '#B8860B',
  },
];

export const companyInfo = {
  name: 'Mahap Service',
  legalName: 'Mahap Service, Comércio & Prestação de Serviços, Lda.',
  tagline: 'Distribuidor & Aplicador Oficial Spartan® em Angola',
  description:
    'Empresa angolana especializada em serviços de limpeza, higienização, detailing automóvel e controlo de pragas, utilizando produtos profissionais sustentáveis da marca americana Spartan®.',
  phone1: '+244 928 258 795',
  phone2: '+244 974 384 524',
  phone1Raw: '244928258795',
  phone2Raw: '244974384524',
  email: 'info@mahapservice.com',
  address: {
    street: 'Rua Sagrada Esperança, Travessa nº 12',
    neighborhood: 'Prenda',
    city: 'Luanda',
    country: 'Angola',
    full: 'Rua Sagrada Esperança, Travessa nº 12, Prenda, Luanda, Angola',
  },
  workingHours: {
    weekdays: 'Segunda a Sexta: 08h00 – 18h00',
    saturday: 'Sábado: 09h00 – 14h00',
    sunday: 'Domingo: Fechado',
  },
  spartan: {
    role: 'Distribuidor Oficial · Revendedor Oficial · Aplicador Oficial',
    brand: 'Spartan®',
    origin: 'EUA',
    description:
      'A Mahap Service é o único distribuidor, revendedor e aplicador oficial dos produtos químicos profissionais sustentáveis da marca americana Spartan® em Angola.',
  },
};

export const faqs = [
  {
    question: 'Quais são os produtos utilizados nos serviços?',
    answer:
      'Utilizamos exclusivamente produtos químicos profissionais da marca americana Spartan®, reconhecida mundialmente pela sua eficácia e sustentabilidade ambiental. Somos o distribuidor e aplicador oficial em Angola.',
  },
  {
    question: 'Os produtos são seguros para crianças e animais de estimação?',
    answer:
      'Sim. Os produtos Spartan® são formulados com tecnologia sustentável, sendo seguros após o período de secagem recomendado. A nossa equipa fornece todas as instruções de segurança antes de cada intervenção.',
  },
  {
    question: 'Qual é o prazo para agendar um serviço?',
    answer:
      'O agendamento pode ser feito com 24 a 48 horas de antecedência para a maioria dos serviços. Para projetos de maior dimensão, recomendamos contactar-nos com uma semana de antecedência.',
  },
  {
    question: 'Disponibilizam serviços para empresas com contratos regulares?',
    answer:
      'Sim. Oferecemos planos de manutenção periódica para empresas, condomínios e instalações industriais, com condições especiais e preços adaptados ao volume de trabalho.',
  },
  {
    question: 'Como posso solicitar um orçamento?',
    answer:
      'Pode solicitar um orçamento gratuito através do formulário de contacto, por telefone (+244 928 258 795) ou via WhatsApp. Respondemos em menos de 24 horas.',
  },
  {
    question: 'A Mahap Service atua apenas em Luanda?',
    answer:
      'A nossa sede e principal área de atuação é Luanda. Para serviços fora da capital, contacte-nos para verificar a disponibilidade e condições específicas.',
  },
];
