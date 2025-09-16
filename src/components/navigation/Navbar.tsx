'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { PhoneCall } from 'lucide-react';
import NavLink from './NavLink';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { Links } from '@/lib/Links';
import { H1 } from '../Typo';

const Navbar = () => {
  const { isMobile } = useSidebar();
  const [active, setActive] = useState('/');
  return (
    <header className='w-full h-20 px-5 flex items-center justify-between border-b border-solid border-gray-300'>
      {isMobile && <SidebarTrigger />}
      <H1>Elextriks</H1>

      {!isMobile && (
        <nav className='flex flex-row items-center justify-center gap-x-10 gap-y-4'>
          {Links.map((link) => (
            <NavLink
              key={link.href}
              name={link.name}
              href={link.href}
              icon={link.icon}
              active={active === link.href}
              setActive={setActive}
            />
          ))}
        </nav>
      )}
      <Button variant={'default'} className='hover:cursor-pointer'>
        <PhoneCall /> {isMobile ? null : <span>Contact</span>}
      </Button>
    </header>
  );
};

export default Navbar;
