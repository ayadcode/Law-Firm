'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { buildMediaUrl } from '../lib/media';

type Slide = { url: string; type: 'video'|'image'; title?: string; subtitle?: string; alt?: string; };

export default function HeroSlider({ slides = [] as Slide[] }) {
  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="h-[520px]"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[520px]">
              {s.type === 'video' ? (
                <video className="w-full h-full object-cover filter grayscale brightness-75" autoPlay muted loop playsInline src={buildMediaUrl(s.url)} />
              ) : (
                <Image src={buildMediaUrl(s.url)} alt={s.alt || 'hero'} fill style={{ objectFit: 'cover' }} />
              )}

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-6">
                  <h1 className="text-4xl font-bold text-white">{s.title}</h1>
                  {s.subtitle && <p className="mt-3 text-sm text-white/90">{s.subtitle}</p>}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
