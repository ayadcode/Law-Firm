// app/page.tsx
import type { Metadata } from 'next';
import HomeClient from '../components/HomeClient'; // client component — fine to import
// server fetch is fine here
export const metadata: Metadata = {
  title: 'Home',
};

export default async function Page() {
  const api = process.env.NEXT_PUBLIC_STRAPI_URL;

  // server-side fetch with Next caching
  const pagesResp = await fetch(`${api}/api/pages?filters[slug][$eq]=home&populate=hero_media`, { next: { revalidate: 60 } })
    .then(r => r.json())
    .catch(() => null);
  const servicesResp = await fetch(`${api}/api/services?populate=deep`, { next: { revalidate: 60 } })
    .then(r => r.json())
    .catch(() => null);
  const teamResp = await fetch(`${api}/api/team-members?populate=photo`, { next: { revalidate: 60 } })
    .then(r => r.json())
    .catch(() => null);
  const clientsResp = await fetch(`${api}/api/clients?populate=logo`, { next: { revalidate: 60 } })
    .then(r => r.json())
    .catch(() => null);

  const pageData = pagesResp?.data?.[0] ?? null;
  const services = servicesResp ?? { data: [] };
  const team = teamResp ?? { data: [] };
  const clients = clientsResp ?? { data: [] };

  // Pass JSON to the client component
  return <HomeClient pageData={pageData} services={services} team={team} clients={clients} />;
}
