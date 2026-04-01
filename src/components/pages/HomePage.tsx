import { CheckCheck, Clock, Phone, Shield } from 'lucide-react';

const logo = {
  src: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg',
  alt: 'Elektricien aan het werk',
};

const HomePage = () => {
  return (
    <>
      {/* Main page container styled as Win2000 window */}
      <div
        id='home'
        style={{
          padding: '8px',
          paddingTop: '8px',
          backgroundColor: '#008080',
          minHeight: '100vh',
          /* Offset for the fixed navbar (title bar ~24px + menubar ~22px + toolbar ~22px = ~68px) */
        }}>

        {/* Hero window */}
        <div
          className='win-window'
          style={{ marginTop: '70px', marginBottom: '8px', overflow: 'hidden' }}>
          {/* Window title bar */}
          <div className='win-titlebar'>
            <span style={{ fontSize: '11px' }}>&#128161;</span>
            <span>Welkom bij Elextriks Limbourg</span>
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

          {/* Hero image with overlay */}
          <div
            style={{
              height: '320px',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${logo.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              padding: '24px',
            }}>
            <div>
              {/* IE-era heading style */}
              <h1
                style={{
                  fontFamily: 'Tahoma, Arial, sans-serif',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textShadow: '1px 1px 0 #000000',
                  marginBottom: '10px',
                }}>
                Elextriks Limbourg
              </h1>
              <p
                style={{
                  fontFamily: 'Tahoma, Arial, sans-serif',
                  fontSize: '13px',
                  color: '#e0e0e0',
                  marginBottom: '16px',
                  maxWidth: '500px',
                  lineHeight: '1.6',
                }}>
                Professionele elektriciteitswerken voor particulieren en
                bedrijven. 24/7 beschikbaar voor spoedinterventies.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a href='#contact'>
                  <button className='win-btn-primary' style={{ fontSize: '12px', padding: '5px 16px' }}>
                    Vraag offerte aan
                  </button>
                </a>
                <a href='tel:+32497209377'>
                  <button
                    className='win-btn'
                    style={{ fontSize: '12px', padding: '5px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Phone size={12} />
                    Bel direct
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Win2000 status bar at bottom of hero window */}
          <div className='win-statusbar'>
            <span
              style={{
                borderRight: '1px inset #808080',
                paddingRight: '8px',
                marginRight: '4px',
                flex: 1,
              }}>
              Gereed
            </span>
            <span style={{ borderLeft: '1px inset #808080', paddingLeft: '6px', color: '#444' }}>
              Lokaal intranet
            </span>
          </div>
        </div>

        {/* Info panels — 3 Win2000 windows side by side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '8px',
            marginBottom: '8px',
          }}>
          {[
            {
              icon: <Clock size={32} color='#0a246a' />,
              title: '24/7 Beschikbaar',
              desc: 'Dag en nacht bereikbaar voor uw elektrische problemen.',
            },
            {
              icon: <Shield size={32} color='#0a246a' />,
              title: 'Gecertificeerd',
              desc: 'Professioneel, verzekerd en erkend vakmanschap.',
            },
            {
              icon: <CheckCheck size={32} color='#0a246a' />,
              title: 'Kwaliteitsgarantie',
              desc: 'Werk van topkwaliteit met garantie op elk project.',
            },
          ].map((item) => (
            <div key={item.title} className='win-window' style={{ overflow: 'hidden' }}>
              <div className='win-titlebar' style={{ fontSize: '11px' }}>
                <span>{item.title}</span>
              </div>
              <div
                style={{
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  backgroundColor: '#d4d0c8',
                  gap: '10px',
                }}>
                {/* Icon "image" area */}
                <div
                  className='win-inset'
                  style={{
                    padding: '10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                  }}>
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: 'Tahoma, Arial, sans-serif',
                    fontSize: '11px',
                    color: '#000000',
                    lineHeight: '1.6',
                  }}>
                  {item.desc}
                </p>
              </div>
              <div className='win-statusbar'>
                <span style={{ fontSize: '11px', color: '#444' }}>Gereed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Win2000 taskbar at the very bottom of the hero section */}
        <div className='win-taskbar' style={{ marginTop: '4px' }}>
          <button className='win-start-btn'>
            <span style={{ color: '#0a246a', fontSize: '14px' }}>&#9670;</span>
            Start
          </button>
          <div className='win-divider' style={{ width: '1px', height: '20px', border: 'none', borderLeft: '1px solid #808080', borderRight: '1px solid #ffffff', margin: '0 2px' }} />
          {['Home', 'Over ons', 'Diensten', 'Contact'].map((item) => (
            <button
              key={item}
              className='win-btn'
              style={{ fontSize: '11px', padding: '2px 10px', minWidth: 'auto' }}>
              {item}
            </button>
          ))}
          <div className='ml-auto' style={{ display: 'flex', alignItems: 'center', gap: '6px', borderLeft: '1px solid #808080', paddingLeft: '8px' }}>
            <span style={{ fontSize: '11px', color: '#444' }}>
              {new Date().toLocaleTimeString('nl-BE', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
