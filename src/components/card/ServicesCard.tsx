import { ServiceContent } from '@/lib/types';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ServicesCard = ({ title, description, image }: ServiceContent) => {
  return (
    <Card className='pt-0'>
      <div className='relative w-full h-48 overflow-hidden rounded-t-lg'>
        {image}
        <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
          <h3 className='text-2xl font-semibold text-white text-center px-4 uppercase hover:underline'>
            {title}
          </h3>
        </div>
      </div>
      <CardContent>
        <ul className='flex flex-col gap-y-2 text-left list-disc list-inside'>
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
