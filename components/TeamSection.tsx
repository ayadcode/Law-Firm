'use client';
import Image from 'next/image';
import { buildMediaUrl } from '../lib/media';

export default function TeamSection({ members = [] as any[] }) {
  return (
    <section className="py-16 bg-white/5 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-primaryBrown">Our Team</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((m:any) => (
            <div key={m.id} className="text-center">
              <div className="w-64 h-48 mx-auto relative bg-brownLight">
                <Image src={buildMediaUrl(m.attributes.photo?.data?.attributes?.url)} alt={m.attributes.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <h3 className="mt-4 font-semibold text-primaryBrown">{m.attributes.name}</h3>
              <p className="text-sm text-gray-300">{m.attributes.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
