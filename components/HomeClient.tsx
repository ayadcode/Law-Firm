'use client';
import HeaderNav from './HeaderNav';
import HeroSlider from './HeroSlider';
import TeamSection from './TeamSection';
import ClientsSection from './ClientsSection';
import FooterSubscribe from './FooterSubscribe';

export default function HomeClient({ pageData, services, team, clients }: any) {
  const heroMedia = pageData?.attributes?.hero_media?.data || [];
  const slides = heroMedia.map((m:any) => {
    const url = m.attributes.url;
    const mime = m.attributes.mime || '';
    return { url, type: mime.startsWith('video') ? 'video' : 'image', title: pageData?.attributes?.title || '', subtitle: '' };
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
