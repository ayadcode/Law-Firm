'use client';
import Image from 'next/image';
import { buildMediaUrl } from '../lib/media';

export default function ClientsSection({ clients = [] as any[] }) {
  const first = clients?.[0];
  return (
    <section className="py-16 bg-primaryBrown text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">What our clients say</h2>
        {first && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-1 w-64 h-64 relative bg-brownLight">
              <Image src={buildMediaUrl(first.attributes.logo?.data?.attributes?.url)} alt={first.attributes.name} fill style={{ objectFit: 'contain' }} />
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-xl">"{first.attributes.testimonial || 'Client testimonial...'}"</blockquote>
              <div className="mt-6 font-bold">{first.attributes.name}</div>
              <div className="text-sm text-white/80">{first.attributes.position}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
