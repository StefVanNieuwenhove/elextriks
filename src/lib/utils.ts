import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const links: Link[] = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/aboutme' },
  { name: 'Contact', href: '/contact' },
];
