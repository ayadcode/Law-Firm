export function buildMediaUrl(url?: string | null) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  const base = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  return `${base}${url}`;
}
