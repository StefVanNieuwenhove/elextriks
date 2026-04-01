'use client';

import { PhoneCall } from 'lucide-react';
import NavLink from './NavLink';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { Links } from '@/lib/Links';
import logo from '../../../public/logo_elextriks.jpeg';
import Image from 'next/image';

const Navbar = () => {
  const { isMobile } = useSidebar();

  return (
    <header
      className='w-full fixed top-0 z-50'
      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}>
      {/* Win2000 title bar */}
      <div className='win-titlebar' style={{ minHeight: '24px' }}>
        <span style={{ fontSize: '11px' }}>&#128290;</span>
        <span>Elextriks Limbourg - Elektrische Installaties</span>
        {/* Classic window control buttons */}
        <div className='ml-auto flex gap-1'>
          <button
            className='win-btn'
            style={{
              minWidth: '18px',
              height: '18px',
              padding: '0',
              fontSize: '10px',
              lineHeight: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label='Minimaliseren'>
            _
          </button>
          <button
            className='win-btn'
            style={{
              minWidth: '18px',
              height: '18px',
              padding: '0',
              fontSize: '10px',
              lineHeight: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label='Maximaliseren'>
            &#9633;
          </button>
          <button
            className='win-btn'
            style={{
              minWidth: '18px',
              height: '18px',
              padding: '0',
              fontSize: '11px',
              fontWeight: 'bold',
              lineHeight: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#cc0000',
            }}
            aria-label='Sluiten'>
            &#10005;
          </button>
        </div>
      </div>

      {/* Win2000 menu bar */}
      <div className='win-menubar' style={{ borderBottom: '1px solid #808080' }}>
        {isMobile && (
          <SidebarTrigger
            style={{
              padding: '2px 6px',
              fontSize: '11px',
              color: '#000',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        )}
        <div className='flex items-center' style={{ gap: '2px' }}>
          {!isMobile &&
            Links.map((link) => (
              <NavLink
                key={link.href}
                name={link.name}
                href={link.href}
                active={false}
              />
            ))}
        </div>
        <div className='ml-auto flex items-center gap-2'>
          <Image
            src={logo}
            alt='Elextriks logo'
            width={80}
            height={24}
            style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
          />
          <a href='tel:+32497209377'>
            <button
              className='win-btn-primary'
              style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '3px 10px' }}>
              <PhoneCall size={12} />
              {isMobile ? '24/7' : 'Contact 24/7'}
            </button>
          </a>
        </div>
      </div>

      {/* Win2000 toolbar / address bar */}
      {!isMobile && (
        <div
          className='win-menubar'
          style={{ borderBottom: '2px solid #808080', borderTop: '1px solid #ffffff', backgroundColor: '#d4d0c8' }}>
          <span style={{ fontSize: '11px', color: '#444' }}>Adres:</span>
          <div
            className='win-inset'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '1px 6px',
              minWidth: '280px',
              fontSize: '11px',
              backgroundColor: '#ffffff',
              flex: 1,
              margin: '0 4px',
            }}>
            <span style={{ color: '#0000ff' }}>http://www.elextriks-limbourg.be/</span>
          </div>
          <button
            className='win-btn'
            style={{ padding: '2px 10px', fontSize: '11px' }}>
            Ga
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
