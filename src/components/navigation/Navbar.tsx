'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { PhoneCall } from 'lucide-react';
import { links } from '@/lib/utils';
import NavLink from './NavLink';

const Navbar = () => {
  const [active, setActive] = useState('/');
  return (
    <header className='w-full h-20 px-5 flex items-center justify-between border-b border-solid border-gray-300'>
      <h1>Elektriks</h1>
      <nav className='flex flex-row items-center justify-center gap-x-10 gap-y-4'>
        {links.map((link) => (
          <NavLink
            key={link.href}
            href='/'
            name={link.name}
            active={active === link.href}
            setActive={setActive}
          />
        ))}
      </nav>
      <section>
        <Button variant={'default'} className='hover:cursor-pointer'>
          <PhoneCall /> Call me
        </Button>
      </section>
    </header>
  );
};

export default Navbar;
