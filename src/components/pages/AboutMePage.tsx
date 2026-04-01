import Image from 'next/image';
import logo from '../../../public/images/profile.jpg';
import { CheckCheck } from 'lucide-react';

const features = [
  'Gecertificeerde elektriciens',
  'Scherpe prijzen',
  'Snelle service',
  'Kwaliteitsgarantie',
];

const AboutMePage = () => {
  return (
    <div
      id='about'
      style={{
        backgroundColor: '#008080',
        padding: '8px',
        paddingTop: '0',
      }}>
      {/* Win2000 window */}
      <div className='win-window' style={{ overflow: 'hidden' }}>
        {/* Title bar */}
        <div className='win-titlebar'>
          <span style={{ fontSize: '11px' }}>&#8505;</span>
          <span>Over Elextriks Limbourg - Eigenschappen</span>
          <div className='ml-auto flex gap-1'>
            <button
              className='win-btn'
              style={{ minWidth: '18px', height: '18px', padding: '0', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              _
            </button>
            <button
              className='win-btn'
              style={{ minWidth: '18px', height: '18px', padding: '0', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              &#9633;
            </button>
          </div>
        </div>

        {/* Tab bar (Win2000 property sheet style) */}
        <div
          style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
            display: 'flex',
            gap: '0',
            paddingTop: '4px',
            paddingLeft: '6px',
          }}>
          {['Algemeen', 'Details', 'Licentie'].map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: '4px 16px',
                fontSize: '11px',
                fontFamily: 'Tahoma, Arial, sans-serif',
                borderTop: i === 0 ? '2px solid #ffffff' : '1px solid #808080',
                borderLeft: i === 0 ? '2px solid #ffffff' : '1px solid #808080',
                borderRight: i === 0 ? '1px solid #404040' : '1px solid #808080',
                borderBottom: i === 0 ? 'none' : '1px solid #404040',
                backgroundColor: i === 0 ? '#d4d0c8' : '#b0aca4',
                cursor: 'pointer',
                marginBottom: i === 0 ? '-1px' : '0',
                zIndex: i === 0 ? 1 : 0,
                position: 'relative',
              }}>
              {tab}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div
          style={{
            padding: '16px',
            backgroundColor: '#d4d0c8',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}>
          {/* Text content */}
          <div>
            <h2
              style={{
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#000000',
              }}>
              Over{' '}
              <span style={{ color: '#0a246a' }}>Elextriks Limbourg</span>
            </h2>

            <p
              style={{
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '11px',
                color: '#000000',
                lineHeight: '1.7',
                marginBottom: '10px',
              }}>
              Elextriks Limbourg is uw lokale partner voor alle
              elektriciteitswerken in Affligem en omgeving. Met jarenlange
              ervaring en vakmanschap leveren wij hoogwaardige elektrische
              installaties en diensten aan zowel particulieren als bedrijven.
            </p>

            <p
              style={{
                fontFamily: 'Tahoma, Arial, sans-serif',
                fontSize: '11px',
                color: '#000000',
                lineHeight: '1.7',
                marginBottom: '14px',
              }}>
              Onze missie is om betrouwbare, veilige en professionele
              elektriciteitsoplossingen te bieden. Of het nu gaat om een
              kleine reparatie of een complete renovatie, wij staan klaar
              met deskundig advies en vakwerk van de hoogste kwaliteit.
            </p>

            {/* Win2000 groupbox */}
            <div className='win-groupbox' style={{ marginTop: '12px' }}>
              <span className='win-groupbox-title'>Kenmerken</span>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  paddingTop: '4px',
                }}>
                {features.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '6px',
                      fontSize: '11px',
                      fontFamily: 'Tahoma, Arial, sans-serif',
                    }}>
                    <CheckCheck
                      size={13}
                      color='#0a246a'
                      style={{ flexShrink: 0, marginTop: '1px' }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image in a Win2000 inset panel */}
          <div>
            <div className='win-groupbox' style={{ padding: '4px' }}>
              <span className='win-groupbox-title'>Foto</span>
              <div className='win-inset' style={{ overflow: 'hidden' }}>
                <Image
                  src={logo}
                  alt='Elextriks Limbourg elektricien aan het werk'
                  width={800}
                  height={400}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Win2000-style button row */}
        <div
          style={{
            padding: '8px 16px',
            backgroundColor: '#d4d0c8',
            borderTop: '1px solid #808080',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '6px',
          }}>
          <a href='#contact'>
            <button className='win-btn-primary' style={{ padding: '4px 20px', fontSize: '11px' }}>
              Offerte aanvragen
            </button>
          </a>
          <button className='win-btn' style={{ fontSize: '11px' }}>
            Annuleren
          </button>
          <button className='win-btn' style={{ fontSize: '11px' }}>
            Toepassen
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
