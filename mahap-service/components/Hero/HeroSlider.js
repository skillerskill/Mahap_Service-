'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import KenBurnsImage from './KenBurnsImage';
import HeroSlideContent from './HeroSlideContent';
import heroSlides from '@/data/heroSlides';

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div className="hero-fullscreen relative w-full overflow-hidden bg-[var(--brand-navy)]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0"
        aria-label="Apresentação Mahap Service"
        role="region"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <KenBurnsImage
                src={slide.image}
                alt={slide.title}
                isActive={activeIndex === index && ready}
                variant={index}
              />
              <div
                className="absolute inset-0 pointer-events-none z-10"
                aria-hidden
                style={{
                  background: `linear-gradient(
                    to top,
                    var(--brand-navy) 0%,
                    rgba(12, 27, 51, 0.55) 40%,
                    rgba(12, 27, 51, 0.25) 70%,
                    transparent 100%
                  )`,
                }}
              />
              <HeroSlideContent
                slide={slide}
                isActive={activeIndex === index}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" />
    </div>
  );
}
