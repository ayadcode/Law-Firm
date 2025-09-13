// components/HomeClient.tsx
'use client';
import React from 'react';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import TeamSection from './TeamSection';
import ClientsSection from './ClientsSection';
import FooterSubscribe from './FooterSubscribe';

type Props = {
  pageData: any;
  services: any;
  team: any;
  clients: any;
};

export default function HomeClient({ pageData, services, team, clients }: Props) {
  const heroMedia = (pageData?.attributes?.hero_media as any)?.data || [];
  const slides = heroMedia.map((m: any) => {
    const url = m?.attributes?.url ?? '';
    const mime = m?.attributes?.mime ?? '';
    return {
      url,
      type: (mime || '').startsWith('video') ? 'video' : 'image',
      title: pageData?.attributes?.title ?? '',
      subtitle: '',
    };
  });

  return (
    <>
      <HeaderNav services={services?.data || []} />
      <HeroSlider slides={slides} />
      <TeamSection members={team?.data || []} />
      <ClientsSection clients={clients?.data || []} />
      <FooterSubscribe />
    </>
  );
}
