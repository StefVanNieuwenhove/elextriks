import { CheckCheck, Clock, Phone, Shield } from 'lucide-react';
import { Button } from '../ui/button';

const logo = {
  src: 'https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg',
  alt: 'logo',
};

const HomePage = () => {
  return (
    <>
      <section
        id='home'
        className='relative h-[600px] bg-cover bg-center pt-20 md:pt-2'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${logo.src}); background-attachment: fixed;`,
        }}>
        <div className='container mx-auto px-6 h-full flex items-center'>
          <div className='max-w-3xl text-white animate-fade-in'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
              <span>Elextriks Limbourg</span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-gray-200'>
              Professionele elektriciteitswerken voor particulieren en
              bedrijven. 24/7 beschikbaar voor spoedinterventies.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 rounded-md bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                <a href='#contact'>Vraag offerte aan</a>
              </Button>
              <a href='tel:+32497209377'>
                <Button className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:text-accent-foreground h-10 rounded-md bg-white text-red-600 border-2 border-white hover:bg-gray-100 text-lg px-8 py-6'>
                  <Phone className='mr-2 h-5 w-5' />
                  Bel direct
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-red-500 text-white py-8'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='flex flex-col items-center'>
              <Clock className='h-12 w-12 mb-3' />
              <h3 className='font-bold text-lg mb-1'>24/7 Beschikbaar</h3>
              <p className='text-muted'>Dag en nacht bereikbaar</p>
            </div>
            <div className='flex flex-col items-center'>
              <Shield className='h-12 w-12 mb-3' />
              <h3 className='font-bold text-lg mb-1'>24/7 Gecertificeerd</h3>
              <p className='text-muted'>Professioneel & verzekerd</p>
            </div>
            <div className='flex flex-col items-center'>
              <CheckCheck className='h-12 w-12 mb-3' />
              <h3 className='font-bold text-lg mb-1'>Kwaliteitsgarantie</h3>
              <p className='text-muted'>Werk van topkwaliteit</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
