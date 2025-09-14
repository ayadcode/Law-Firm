// lib/api.ts
const STRAPI = (
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
).replace(/\/$/, "");

export async function fetchAPI(path: string) {
  const url = `${STRAPI}${path}`;
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      // you can add credentials or headers here if needed
    });
    // For debugging, log url and status when not ok
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `Strapi fetch error: ${res.status} ${res.statusText} — ${url}`,
        text
      );
      throw new Error(
        `Failed to fetch ${path} — ${res.status} ${res.statusText}`
      );
    }
    const json = await res.json().catch(() => null);
    return json;
  } catch (err) {
    console.error("fetchAPI caught error for", url, err);
    throw err;
  }
}
export default fetchAPI;
