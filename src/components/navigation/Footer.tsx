import { links } from '@/lib/utils';
import React from 'react';
import NavLink from './NavLink';
import Image from 'next/image';
import logo from '../../../public/logo_elextriks.jpeg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full h-15 p-5 bottom-0 border-t border-solid border-gray-300'>
      <div className='w-full container mx-auto flex justify-between items-baseline pb-5'>
        <dl className='flex flex-col gap-y-2'>
          <dt className='underline font-bold uppercase'>Contact details</dt>
          <dd>Kobe Limbourg</dd>
          <dd>070-1234567</dd>
          <dd>kobe.limbourg@gmail.com</dd>
        </dl>
        <nav className='flex flex-col items-center gap-x-10 gap-y-4'>
          <p className='font-bold underline uppercase text-center'>Menu</p>
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              name={link.name}
              active={false}
            />
          ))}
        </nav>
        <section className=''>
          <Image src={logo} alt='logo' width={100} height={100} />
        </section>
      </div>
      <p className='w-full text-center'>&copy; {year} Elextriks</p>
    </footer>
  );
};

export default Footer;
