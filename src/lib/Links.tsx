import { Link } from './types';
import { House, Mail, UserRound } from 'lucide-react';

export const Links: Link[] = [
  { name: 'Home', href: '/', icon: <House /> },
  { name: 'About me', href: '/aboutme', icon: <UserRound /> },
  { name: 'Contact', href: '/contact', icon: <Mail /> },
];
