export interface SiteConfig {
  site_title_en: string;
  site_title_it: string;
  logo: string;
  phone: string;
  email: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  background_image: string;
  cta_text: string;
  secondary_cta_text: string;
}

export interface AboutContent {
  title: string;
  description: string;
  image: string;
}

export interface MachineSpecification {
  label_en: string;
  label_it: string;
  value_en: string;
  value_it: string;
}

export interface Machine {
  slug: string;
  title_en: string;
  title_it: string;
  description_en: string;
  description_it: string;
  long_description_en?: string;
  long_description_it?: string;
  image: string;
  gallery_images?: string[];
  specifications?: MachineSpecification[];
  features_en?: string[];
  features_it?: string[];
  history_en?: string;
  history_it?: string;
  featured: boolean;
  order: number;
}

export interface GalleryImage {
  image: string;
  alt_en: string;
  alt_it: string;
  order: number;
}

export interface Stat {
  number: string;
  label: string;
}

export interface StatsContent {
  stats: Stat[];
}

export type Locale = 'en' | 'it';