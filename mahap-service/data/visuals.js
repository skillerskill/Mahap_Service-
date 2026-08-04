/**
 * Imagens de campanha — Mahap Service
 * Centralizado para trocar paths locais (/images/...) ou URLs remotas num só sítio.
 */

const local = {
  hero: '/images/hero-cleaning.jpg',
  hero2: '/images/trabalhores.jpg',
  hero3: '/images/vender.jpg',
  about: '/images/casafamilia.jpg',
  spartan: '/images/spartan-banner.jpg',
  spartan2: '/images/mahapfilda.jpg',
  limpeza: '/images/service-limpeza-geral.jpg',
  estofos: '/images/service-estofos.jpg',
  detailing: '/images/service-detailing.jpg',
  desinfestacao: '/images/service-desinfestacao.jpg',
  peroxy: '/images/peroxy.jpg',
  pessoas: '/images/pessoas.jpg',
  imageMahap: '/images/image_mahap.jpg',
};

export const campaignImages = {
  hero: local.hero,
  hero2: local.hero2,
  hero3: local.hero3,
  about: local.about,
  spartan: local.spartan,
  spartan2: local.spartan2,
  pessoas: local.pessoas,
  peroxy: local.peroxy,
  imageMahap: local.imageMahap,
  byServiceSlug: {
    'limpeza-geral-industrial': local.limpeza,
    'higienizacao-estofos': local.estofos,
    'detailer-automovel': local.detailing,
    'desinfestacao-controlo-pragas': local.desinfestacao,
  },
};

export function isRemoteSrc(src) {
  return typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'));
}
