'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const ContactFormValidationSchema = z.object({
  subject: z.string().min(1),
  email: z.email().min(1),
  message: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(1),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof ContactFormValidationSchema>>({
    resolver: zodResolver(ContactFormValidationSchema),
    defaultValues: {
      subject: '',
      email: '',
      message: '',
      name: '',
      phone: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof ContactFormValidationSchema>) => {
    console.log(data);
  };

  const handleSendMail = async () => {
    try {
      console.log('Sending mail...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john.doe@example.com',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          subject: 'Test email from contact form',
          phone: '+32 471 12 34 56',
        }),
      });

      console.log(response);
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  };
  return (
    <>
      <section
        id='contact'
        className='bg-muted w-full flex-col items-center space-y-3 flex px-10 py-20'>
        <div className='w-full flex flex-col items-center gap-2 mb-10'>
          <h2 className='text-3xl font-bold'>
            Neem <span className='text-red-500'> Contact</span> Op
          </h2>
          <p className='text-muted-foreground'>
            Heeft u een vraag of wenst u een offerte? Contacteer ons
            vrijblijvend.
          </p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-3'>
          <article className='w-full'>
            <Card>
              <CardHeader className='border-b mx-2'>
                <p className='font-bold text-2xl py-0'>Stuur ons een bericht</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className='space-y-4'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Naam</FormLabel>
                          <FormControl>
                            <Input
                              type='text'
                              placeholder='Jan Jansens'
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='email'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type='email'
                              placeholder='jan.jansens@gmail.com'
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='phone'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefoon</FormLabel>
                          <FormControl>
                            <Input
                              type='tel'
                              placeholder='+32 471 12 34 56'
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='subject'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Onderwerp</FormLabel>
                          <FormControl>
                            <Input
                              type='text'
                              placeholder='Onderwerp'
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bericht</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Bericht'
                              {...field}
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                  <Button
                    type='submit'
                    className='mt-4 w-full'
                    onClick={handleSendMail}>
                    Verzenden
                  </Button>
                </Form>
              </CardContent>
            </Card>
          </article>
          <article className='w-full space-y-3'>
            <Card>
              <CardHeader className='border-b mx-2'>
                <p className='font-bold text-2xl py-0'>Contactgegevens</p>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <div className='flex items-center gap-2'>
                    <MapPin className='inline mr-2 text-red-500' />
                    <p className='font-bold'>Adres</p>
                  </div>
                  <div className='ml-10'>
                    <p>Calloystraat 30A</p>
                    <p>1790, Affligem</p>
                    <p>België</p>
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <Phone className='inline mr-2 text-red-500' />
                    <p className='font-bold'>Telefoon</p>
                  </div>
                  <div className='ml-10'>
                    <p>+32 16 12 34 56</p>
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <Clock className='inline mr-2 text-red-500' />
                    <p className='font-bold'>Openingstijden</p>
                  </div>
                  <div className='ml-10'>
                    <p>24 uur per dag geopend</p>
                    <p className='text-sm text-muted-foreground'>
                      Spoedinterventie altijd mogelijk
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className='h-[300px] p-0 rounded'>
              <iframe
                width={'100%'}
                height={'300px'}
                loading='lazy'
                style={{ border: '0px' }}
                referrerPolicy='no-referrer-when-downgrade'
                title='Elextriks Limbourg - Calloystraat 30A, 1790 Affligem'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.0477891234567!2d4.0858!3d50.9047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e5a5e5a5e5a5%3A0x5a5a5a5a5a5a5a5a!2sCalloystraat%2030A%2C%201790%20Affligem!5e0!3m2!1snl!2sbe!4v1234567890'
              />
            </Card>
          </article>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
