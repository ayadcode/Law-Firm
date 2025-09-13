'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { buildMediaUrl } from '../lib/media';

type Slide = { url: string; type: 'video' | 'image'; title?: string; subtitle?: string; alt?: string; };

export default function HeroSlider({ slides = [] as Slide[] }) {
  return (
    <section className="relative">
      <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 4000 }} loop navigation pagination={{ clickable: true }} className="h-[520px]">
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[520px]">
              {s.type === 'video' ? (
                <video className="w-full h-full object-cover filter grayscale brightness-75" autoPlay muted loop playsInline src={buildMediaUrl(s.url)} />
              ) : (
                <Image src={buildMediaUrl(s.url)} alt={s.alt || 'hero'} style={{ objectFit: 'cover' }} fill />
              )}

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 text-left max-w-2xl text-white">
                  <h1 className="text-4xl font-bold">{s.title}</h1>
                  <p className="mt-3 text-sm">{s.subtitle}</p>
                  <a className="mt-6 inline-block px-5 py-2 bg-white text-primaryBrown rounded">Read More</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
