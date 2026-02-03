import { ReactNode } from 'react';

export type Link = {
  name: string;
  href: string;
  icon: ReactNode;
};

export type ServiceContent = {
  title: string;
  description: string[];
  image: ReactNode;
};
