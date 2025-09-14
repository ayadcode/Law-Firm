const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337/api";

/**
 * Fetch data from Strapi
 * @param path API endpoint (e.g. "/pages?populate=deep")
 */
export async function fetchStrapi(path: string) {
  const url = `${STRAPI_URL}${path}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.STRAPI_TOKEN
        ? `Bearer ${process.env.STRAPI_TOKEN}`
        : "",
    },
    next: { revalidate: 10 }, // ISR cache in Next.js
  });

  if (!res.ok) {
    console.error("Strapi fetch error:", res.status, res.statusText);
    throw new Error(`Failed to fetch ${path}`);
  }

  return res.json();
}
