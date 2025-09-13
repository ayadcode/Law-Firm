import axios from "axios";

const API = process.env.NEXT_PUBLIC_STRAPI_URL || "";

export async function fetchAPI<T = any>(path: string, params = ""): Promise<T> {
  const url = `${API}${path}${params ? `?${params}` : ""}`;
  const res = await axios.get<T>(url);
  return res.data;
}

export async function postAPI<T = any>(path: string, body: any): Promise<T> {
  const url = `${API}${path}`;
  const res = await axios.post<T>(url, body, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
}
