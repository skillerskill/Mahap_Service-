/**
 * Imagens de campanha — Mahap Service
 * Centralizado para trocar paths locais (/images/...) ou URLs remotas num só sítio.
 */

/** true até existirem ficheiros em public/images/ */
const useRemoteFallback = process.env.NEXT_PUBLIC_IMAGE_FALLBACK !== 'local';

const remote = {
  hero: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=85',
  about: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
  spartan: 'https://images.unsplash.com/photo-1563453392217-320f3277c317?w=1400&q=85',
  limpeza: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
  estofos: 'https://images.unsplash.com/photo-1555041469-a586c0e06427?w=1200&q=85',
  detailing: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&q=85',
  desinfestacao: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85',
};

const local = {
  hero: '/images/hero-cleaning.jpg',
  about: '/images/hero-cleaning.jpg',
  spartan: '/images/spartan-banner.jpg',
  limpeza: '/images/service-limpeza-geral.jpg',
  estofos: '/images/service-estofos.jpg',
  detailing: '/images/service-detailing.jpg',
  desinfestacao: '/images/service-desinfestacao.jpg',
};

function pick(key) {
  return useRemoteFallback ? remote[key] : local[key];
}

export const campaignImages = {
  hero: pick('hero'),
  about: pick('about'),
  spartan: pick('spartan'),
  byServiceSlug: {
    'limpeza-geral-industrial': pick('limpeza'),
    'higienizacao-estofos': pick('estofos'),
    'detailer-automovel': pick('detailing'),
    'desinfestacao-controlo-pragas': pick('desinfestacao'),
  },
};

export function isRemoteSrc(src) {
  return typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'));
}
