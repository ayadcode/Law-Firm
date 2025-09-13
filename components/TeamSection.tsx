'use client';
import Image from 'next/image';
import { buildMediaUrl } from '../lib/media';
import { StrapiEntity } from '@/strapi/types/generated/strapi';

type MemberAttrs = { name: string; role: string; photo: { data: { attributes: { url: string } } } };
type Props = { members: StrapiEntity<MemberAttrs>[] };

export default function TeamSection({ members = [] }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-primaryBrown text-center">Our Team</h2>
        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">Lorem Ipsum is simply dummy text...</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map(m => (
            <div key={m.id} className="text-center">
              <div className="w-64 h-48 mx-auto relative bg-brownLight">
                <Image src={buildMediaUrl(m.attributes.photo.data.attributes.url)} alt={m.attributes.name} style={{ objectFit: 'cover' }} fill />
              </div>
              <h3 className="mt-4 font-semibold text-primaryBrown">{m.attributes.name}</h3>
              <p className="text-sm text-gray-400">{m.attributes.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
