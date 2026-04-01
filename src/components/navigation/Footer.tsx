import Image from 'next/image';
import logo from '../../../public/logo_elextriks.jpeg';
import { Links } from '@/lib/Links';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#008080',
        padding: '8px',
        paddingTop: '0',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}>
      {/* Win2000 footer window */}
      <div className='win-window' style={{ overflow: 'hidden' }}>
        {/* Title bar */}
        <div
          className='win-titlebar'
          style={{ fontSize: '11px' }}>
          <span>Elextriks Limbourg</span>
        </div>

        {/* Win2000 status bar / footer content */}
        <div
          style={{
            backgroundColor: '#d4d0c8',
            padding: '12px 16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
          }}>
          {/* Logo + description */}
          <div>
            <div className='win-inset' style={{ display: 'inline-block', padding: '4px', marginBottom: '8px' }}>
              <Image
                src={logo}
                alt='Elextriks Limbourg'
                width={120}
                height={36}
                style={{ height: '32px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '11px', color: '#444', lineHeight: '1.6', margin: 0 }}>
              Uw betrouwbare partner voor alle elektriciteitswerken in Affligem
              en omgeving.
            </p>
          </div>

          {/* Quick links as classic Windows hyperlinks */}
          <div>
            <div className='win-groupbox'>
              <span className='win-groupbox-title'>Snelle Links</span>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {Links.map((link) => (
                  <li key={link.href} style={{ marginBottom: '3px' }}>
                    <Link href={link.href} className='win-link' style={{ fontSize: '11px' }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className='win-groupbox'>
              <span className='win-groupbox-title'>Contact</span>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', fontSize: '11px', color: '#000', lineHeight: '1.7' }}>
                <li>Calloystraat 30A</li>
                <li>1790 Affligem</li>
                <li>
                  <a href='tel:0497209377' className='win-link' style={{ fontSize: '11px' }}>
                    0497 20 93 77
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Win2000 status bar at bottom */}
        <div className='win-statusbar' style={{ justifyContent: 'center' }}>
          <span style={{ fontSize: '11px', color: '#444' }}>
            &copy; {new Date().getFullYear()} Elextriks Limbourg. Alle rechten voorbehouden. &nbsp;|&nbsp;
            <span style={{ color: '#0000ff', textDecoration: 'underline', cursor: 'pointer' }}>Privacy</span>
            &nbsp;|&nbsp;
            <span style={{ color: '#0000ff', textDecoration: 'underline', cursor: 'pointer' }}>Disclaimer</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
