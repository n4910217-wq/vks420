export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneDisplay: string;
  whatsappUrl: string;
  telegramUrl: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
}

export interface SiteContent {
  contacts: ContactInfo;
  hero: HeroSection;
  services: ServiceItem[];
}

export interface DataContextType {
  content: SiteContent;
  updateContent: (newContent: SiteContent) => void;
  resetContent: () => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}