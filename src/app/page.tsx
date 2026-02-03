import ServicesCard from '@/components/card/ServicesCard';
import { H2 } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { ServicesContent } from '@/lib/ServicesContent';

export default function Home() {
  return (
    <div>
      <section className='container mx-auto my-12'>
        <H2 className='text-center font-bold'>Onze diensten</H2>
        <div className='px-4 py-3 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {ServicesContent.map((service) => (
            <ServicesCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <section className='container mx-auto my-12'>
        <H2 className='text-center font-bold border-0'>
          Vragen of opmerkingen?
        </H2>
        <p className='text-center text-xl'>
          Neem contact met ons op via{' '}
          <Button
            variant={'link'}
            className='text-md underline p-0 hover:cursor-pointer'>
            <a href='/contact'>contact formulier</a>
          </Button>
          .
        </p>
      </section>
      <section className='container mx-auto my-12'>
        <H2 className='text-center font-bold'>Gerealiseerde projecten</H2>
      </section>
      <section className='container mx-auto my-12'>
        <H2 className='text-center font-bold'>Sfeerbeelden</H2>
      </section>
    </div>
  );
}
