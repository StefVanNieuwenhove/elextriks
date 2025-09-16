'use client';

import Navbar from './Navbar';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar,
  SidebarHeader,
  useSidebar,
} from '../ui/sidebar';
import Link from 'next/link';
import { Links } from '@/lib/Links';
import Image from 'next/image';
import logo from '../../../public/logo_elextriks.jpeg';

const SideBar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Navbar />
      <Sidebar variant='sidebar' side='left'>
        <SidebarHeader className='h-20 border-b border-solid border-gray-300 mb-2'>
          <figure>
            <Image
              src={logo}
              alt='logo'
              width={200}
              height={100}
              style={{ objectFit: 'contain' }}
              className='mx-auto'
            />
          </figure>
        </SidebarHeader>
        <SidebarMenu>
          {Links.map((link) => (
            <SidebarMenuItem
              key={link.name}
              className='w-full'
              onClick={toggleSidebar}>
              <SidebarMenuButton asChild>
                <Link href={link.href}>
                  {link.icon} <span>{link.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>
    </>
  );
};

export default SideBar;
