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
        <SidebarHeader
          style={{
            borderBottom: '2px solid #404040',
            borderTop: '2px solid #ffffff',
            padding: '6px',
            backgroundColor: '#d4d0c8',
          }}>
          {/* Win2000 mini title bar inside sidebar */}
          <div className='win-titlebar' style={{ marginBottom: '4px', fontSize: '11px' }}>
            <span>Navigatie</span>
          </div>
          <figure>
            <Image
              src={logo}
              alt='Elextriks logo'
              width={200}
              height={60}
              style={{ objectFit: 'contain', height: '40px', width: 'auto' }}
              className='mx-auto'
            />
          </figure>
        </SidebarHeader>
        <div style={{ backgroundColor: '#d4d0c8', flex: 1 }}>
          <SidebarMenu>
            {Links.map((link) => (
              <SidebarMenuItem
                key={link.name}
                className='w-full'
                onClick={toggleSidebar}
                style={{ borderBottom: '1px solid #b0aca4' }}>
                <SidebarMenuButton asChild>
                  <Link
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 10px',
                      fontSize: '11px',
                      fontFamily: 'Tahoma, Arial, sans-serif',
                      color: '#000000',
                      textDecoration: 'none',
                      backgroundColor: '#d4d0c8',
                    }}>
                    <span
                      style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#0a246a',
                        display: 'inline-block',
                        flexShrink: 0,
                        borderTop: '1px solid #ffffff',
                        borderLeft: '1px solid #ffffff',
                        borderRight: '1px solid #404040',
                        borderBottom: '1px solid #404040',
                      }}
                    />
                    <span>{link.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBar;
