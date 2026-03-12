import { ServicesContent } from '@/lib/ServicesContent';
import ServicesCard from '../card/ServicesCard';

const ServicesPage = () => {
  return (
    <>
      <section
        id='services'
        className='w-full flex-col items-center space-y-3 flex px-10 py-20'>
        <div className='w-full flex flex-col items-center gap-2 mb-10'>
          <h2 className='text-3xl font-bold text-center'>
            Onze <span className='text-red-500'> Diensten</span>
          </h2>
          <p className='text-muted-foreground text-center max-w-2xl'>
            Algemene elektriciteitswerken voor elk project, groot of klein
          </p>
        </div>
        <div className='px-4 py-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {ServicesContent.map((service) => (
            <ServicesCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
