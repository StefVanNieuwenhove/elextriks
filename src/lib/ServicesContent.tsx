import Image from 'next/image';
import { ServiceContent } from './types';
import NieuwBouw from '/public/images/nieuw-bouw.jpg';
import Renovatie from '/public/images/renovatie.jpg';
import Demotica from '/public/images/demotica.jpg';
import Laadpalen from '/public/images/laadpalen.jpg';
import Depanage from '/public/images/depanage.jpg';
import TechnicalDrawing from '/public/images/technische-tekening.jpg';
import HouseConform from '/public/images/woning-keuringklaar.jpg';

export const ServicesContent: ServiceContent[] = [
  {
    title: 'Nieuw bouw',
    description: [
      'Volledige elektrische installatie',
      'Plaatsen van leidingen en kabels',
      'Zekeringskast plaatsen en aansluiten',
      'Plaatsen van lichtpunten, stopcontacten, schakelaars, ...',
      "Elektrische schema's",
    ],
    image: <Image src={NieuwBouw} alt='Nieuw bouw' className='object-cover' />,
  },
  {
    title: 'Renovatie',
    description: [
      'Aanpassen, bijplaatsen & vernieuwen bestaande woning',
      'Geen woning te groot of te klein',
      'Vervangen/bijplaatsen van zekeringen, differentieelschakelaars en aarding',
    ],
    image: <Image src={Renovatie} alt='Renovatie' className='object-cover' />,
  },
  {
    title: 'Woning keuringklaar maken',
    description: [
      'Woning conform zetten',
      'Vervangen/bijplaatsen van zekeringen, differentieelschakelaars en aarding',
    ],
    image: (
      <Image
        src={HouseConform}
        alt='Woning keuringklaar maken'
        className='object-cover'
      />
    ),
  },
  {
    title: '24/7, depanage',
    description: [
      'Storingen',
      'Problematiek opsporing en oplossen',
      'Snelle interventie',
      'Betrouwbare service',
    ],
    image: <Image src={Depanage} alt='Depanage' className='object-cover' />,
  },
  {
    title: 'Technische tekening',
    description: ["Opstellen elektrische schema's", "Eendraadschema's"],
    image: (
      <Image
        src={TechnicalDrawing}
        alt='Technische tekening'
        className='object-cover'
      />
    ),
  },
  {
    title: 'Demotica',
    description: [
      'Automatische besturingen van verlichting, verwarming, ventilatie en zonwering',
      'Meer comfort',
      'Energiebesparing',
      'Oplossing op maat gemaakt',
    ],
    image: <Image src={Demotica} alt='Demotica' className='object-cover' />,
  },
  {
    title: 'Plaatsen van laadpalen',
    description: ['B2B en B2C', 'Erkende laadpalen (Smappee, Zeptec)'],
    image: <Image src={Laadpalen} alt='Laadpalen' className='object-cover' />,
  },
];
