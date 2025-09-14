export function buildMediaUrl(url?: string | null) {
  if (!url) return "";
  // absolute?
  if (url.startsWith("http")) return url;
  const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ?? "";
  return `${base}${url}`;
}
