// types/components.d.ts
// Shared types for Strapi responses & media
export interface StrapiMedia {
  id: number;
  attributes: {
    url: string; // relative or absolute
    alternativeText?: string | null;
    mime?: string | null;
    name?: string;
    size?: number;
  };
}

export interface StrapiRelation<T = any> {
  data: StrapiEntity<T> | null;
}

export interface StrapiEntity<T = any> {
  id: number;
  attributes: T;
}

export interface StrapiListResponse<T = any> {
  data: StrapiEntity<T>[];
  meta?: any;
}
