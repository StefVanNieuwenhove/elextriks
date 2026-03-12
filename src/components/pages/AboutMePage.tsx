import Image from 'next/image';
import logo from '../../../public/images/profile.jpg';
import { CheckCheck } from 'lucide-react';

const AboutMePage = () => {
  return (
    <>
      <section id='about' className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Text */}
            <div className='order-2 md:order-1'>
              <h2 className='text-4xl font-bold mb-6 text-gray-900'>
                Over <span className='text-red-600'>Elextriks Limbourg</span>
              </h2>

              <p className='text-lg text-gray-700 mb-4 leading-relaxed'>
                Elextriks Limbourg is uw lokale partner voor alle
                elektriciteitswerken in Affligem en omgeving. Met jarenlange
                ervaring en vakmanschap leveren wij hoogwaardige elektrische
                installaties en diensten aan zowel particulieren als bedrijven.
              </p>

              <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                Onze missie is om betrouwbare, veilige en professionele
                elektriciteitsoplossingen te bieden. Of het nu gaat om een
                kleine reparatie of een complete renovatie, wij staan klaar met
                deskundig advies en vakwerk van de hoogste kwaliteit.
              </p>

              <div className='grid grid-cols-2 gap-4'>
                {[
                  'Gecertificeerde elektriciens',
                  'Scherpe prijzen',
                  'Snelle service',
                  'Kwaliteitsgarantie',
                ].map((item) => (
                  <div key={item} className='flex items-start'>
                    <CheckCheck className='h-6 w-6 text-red-600 mr-2 flex-shrink-0 mt-1' />
                    <span className='text-gray-700'>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className='order-1 md:order-2'>
              <Image
                src={logo}
                alt='Elextriks Limbourg elektricien aan het werk'
                width={800}
                height={500}
                className='rounded-lg shadow-2xl w-full h-[500px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMePage;
