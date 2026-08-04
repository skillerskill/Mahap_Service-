// components/Gallery.js — Galeria de trabalhos Mahap Service

import ScrollReveal from './ScrollReveal';
import RevealImage from '@/components/motion/RevealImage';
import CampaignImage from '@/components/CampaignImage';
import SectionHeader from '@/components/ui/SectionHeader';
import { campaignImages } from '@/data/visuals';

const galleryItems = [
  { src: campaignImages.hero, alt: 'Ambiente corporativo limpo pela Mahap Service', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: campaignImages.byServiceSlug['limpeza-geral-industrial'], alt: 'Limpeza industrial em escritórios', span: 'col-span-1' },
  { src: campaignImages.byServiceSlug['higienizacao-estofos'], alt: 'Higienização profissional de estofos', span: 'col-span-1' },
  { src: campaignImages.byServiceSlug['detailer-automovel'], alt: 'Detailing automóvel profissional', span: 'col-span-1' },
  { src: campaignImages.byServiceSlug['desinfestacao-controlo-pragas'], alt: 'Desinfestação e controlo de pragas', span: 'col-span-1' },
];

export default function Gallery() {
  return (
    <section id="galeria" aria-labelledby="gallery-heading" className="py-24 lg:py-32">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Galeria"
          title="Resultados que falam por si."
          description="Cada projecto é um testemunho do nosso compromisso com a excelência e com ambientes impecáveis."
          align="center"
          className="mb-16 lg:mb-20"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, idx) => (
            <ScrollReveal key={idx} variant="scaleIn" delay={idx * 0.07} className={item.span}>
              <RevealImage className="relative aspect-square group h-full rounded-2xl bg-[var(--bg-subtle)]">
                <CampaignImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </RevealImage>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
