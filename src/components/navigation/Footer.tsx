import Image from 'next/image';
import logo from '../../../public/logo_elextriks.jpeg';
import { Links } from '@/lib/Links';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-black text-white py-12'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo + description */}
          <div>
            <Image
              src={logo}
              alt='Elextriks Limbourg'
              width={200}
              height={48}
              className='h-12 w-auto mb-4'
            />
            <p className='text-gray-400'>
              Uw betrouwbare partner voor alle elektriciteitswerken in Affligem
              en omgeving.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className='font-bold text-lg mb-4'>Snelle Links</h4>

            <ul className='space-y-2'>
              {Links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-red-600 transition-colors'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className='font-bold text-lg mb-4'>Contact</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Calloystraat 30A</li>
              <li>1790 Affligem</li>
              <li>
                <a
                  href='tel:0497209377'
                  className='hover:text-red-600 transition-colors'>
                  0497 20 93 77
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='border-t border-gray-800 pt-8 text-center text-gray-400'>
          <p>
            © {new Date().getFullYear()} Elextriks Limbourg. Alle rechten
            voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
