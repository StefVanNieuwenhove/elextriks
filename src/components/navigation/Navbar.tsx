'use client';

import { Button } from '../ui/button';
import { PhoneCall } from 'lucide-react';
import NavLink from './NavLink';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { Links } from '@/lib/Links';
import logo from '../../../public/logo_elextriks.jpeg';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const { isMobile } = useSidebar();
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className='w-full h-20 px-5 flex items-center justify-between border-b border-solid border-gray-300 fixed top-0 bg-white shadow-md z-50 transition-all duration-300 backdrop-blur-3xl'>
      {isMobile && <SidebarTrigger />}
      <Image src={logo} alt='logo' width={130} height={130} />

      {!isMobile && (
        <nav className='flex flex-row items-center justify-center gap-x-10 gap-y-4'>
          {Links.map((link) => (
            <NavLink
              key={link.href}
              name={link.name}
              href={link.href}
              active={isActive(link.href)}
            />
          ))}
        </nav>
      )}
      <a href='tel:+32497209377'>
        <Button variant={'default'} className='hover:cursor-pointer text-md'>
          <PhoneCall />{' '}
          {isMobile ? <span>24/7</span> : <span>Contact 24/7</span>}
        </Button>
      </a>
    </header>
  );
};

export default Navbar;
