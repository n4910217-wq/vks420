import { ContactInfo, NavLink } from './types';

export const CONTACTS: ContactInfo = {
  address: 'Садовод, корпус А, вход 5, этаж 1, офис 1Г-100',
  phone: '+79038911468',
  phoneDisplay: '+7 (903) 891-14-68',
  whatsappUrl: 'https://wa.me/79038911468',
  telegramUrl: 'https://t.me/vks_expert',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Главная', path: '/' },
  { label: 'Услуги', path: '/services' },
  { label: 'О компании', path: '/about' },
  { label: 'Таможенный Склад', path: '/warehouse' },
  { label: 'Контакты', path: '/contacts' },
];

export const COLORS = {
  brown: '#7B4F2E',
  beige: '#C6A78C',
  milk: '#EEE7DF',
  dark: '#3F2C20',
  white: '#FFFFFF',
  black: '#000000',
};