'use client';
import Image from 'next/image';
import { buildMediaUrl } from '../lib/media';
import { StrapiEntity } from '../types/strapi';

type ClientAttrs = { name: string; position?: string; testimonial?: string; logo: { data: { attributes: { url: string } } } };
type Props = { clients: StrapiEntity<ClientAttrs>[] };

export default function ClientsSection({ clients = [] }: Props) {
  const first = clients[0];
  return (
    <section className="py-16 bg-primaryBrown text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">What our clients are saying</h2>
        <p className="max-w-2xl mt-4 text-white/80">Our clients range from individual investors to local, international ...</p>

        {first && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-1">
              <div className="w-64 h-64 bg-brownLight relative">
                <Image src={buildMediaUrl(first.attributes.logo.data.attributes.url)} alt={first.attributes.name} style={{ objectFit: 'cover' }} fill />
              </div>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-xl leading-relaxed">"{first.attributes.testimonial || 'Client testimonial...'}"</blockquote>
              <div className="mt-6 font-bold">{first.attributes.name}</div>
              <div className="text-sm text-white/80">{first.attributes.position}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
