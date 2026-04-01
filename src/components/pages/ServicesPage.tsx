import { ServicesContent } from '@/lib/ServicesContent';
import ServicesCard from '../card/ServicesCard';

const ServicesPage = () => {
  return (
    <div
      id='services'
      style={{
        backgroundColor: '#008080',
        padding: '8px',
        paddingTop: '0',
      }}>
      {/* Outer Win2000 window */}
      <div className='win-window' style={{ overflow: 'hidden' }}>
        {/* Title bar */}
        <div className='win-titlebar'>
          <span style={{ fontSize: '11px' }}>&#128295;</span>
          <span>Diensten - Elextriks Limbourg</span>
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

        {/* Win2000 Explorer-style toolbar */}
        <div
          style={{
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
          <button className='win-btn' style={{ fontSize: '11px', padding: '2px 10px' }}>
            &#9664; Vorige
          </button>
          <button className='win-btn' style={{ fontSize: '11px', padding: '2px 10px' }}>
            Volgende &#9654;
          </button>
          <div className='win-divider' style={{ width: '1px', height: '20px', border: 'none', borderLeft: '1px solid #808080', borderRight: '1px solid #ffffff', margin: '0 4px' }} />
          <button className='win-btn' style={{ fontSize: '11px', padding: '2px 10px' }}>
            Vernieuwen
          </button>
        </div>

        {/* Header text */}
        <div
          style={{
            padding: '10px 16px 4px',
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #d0ccc4',
          }}>
          <h2
            style={{
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#000000',
              margin: 0,
            }}>
            Onze{' '}
            <span style={{ color: '#0a246a' }}>Diensten</span>
          </h2>
          <p
            style={{
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px',
              color: '#444444',
              marginTop: '4px',
              marginBottom: '0',
            }}>
            Algemene elektriciteitswerken voor elk project, groot of klein
          </p>
        </div>

        {/* Services grid */}
        <div
          style={{
            padding: '10px',
            backgroundColor: '#d4d0c8',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '8px',
          }}>
          {ServicesContent.map((service) => (
            <ServicesCard key={service.title} {...service} />
          ))}
        </div>

        {/* Status bar */}
        <div className='win-statusbar'>
          <span
            style={{
              borderRight: '1px inset #808080',
              paddingRight: '8px',
              marginRight: '4px',
            }}>
            {ServicesContent.length} object(en)
          </span>
          <span style={{ color: '#444', paddingLeft: '4px' }}>
            Lokaal intranet
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
