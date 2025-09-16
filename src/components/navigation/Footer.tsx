import NavLink from './NavLink';
import Image from 'next/image';
import logo from '../../../public/logo_elextriks.jpeg';
import { Links } from '@/lib/Links';
import Link from 'next/link';
import { UserRound, PhoneCall, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { TypoLarge } from '../Typo';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full h-15 p-5 bottom-0 border-t border-solid border-gray-300'>
      <div className='w-full container mx-auto flex flex-wrap justify-between pb-5'>
        <dl className='flex flex-col'>
          <dt>
            <TypoLarge>Contact details</TypoLarge>
          </dt>
          <dd>
            <Button variant={'ghost'}>
              <UserRound />
              <span>Kobe Limbourg</span>
            </Button>
          </dd>
          <dd>
            <Button variant={'ghost'}>
              <PhoneCall />
              <span>070-1234567</span>
            </Button>
          </dd>
          <dd>
            <Button variant={'ghost'}>
              <Mail />
              <span>kobe.limbourg@gmail.com</span>
            </Button>
          </dd>
        </dl>
        <section className=''>
          <Image src={logo} alt='logo' width={100} height={100} />
        </section>
      </div>
      <p className='w-full text-center'>&copy; {year} Elextriks</p>
    </footer>
  );
};

export default Footer;
