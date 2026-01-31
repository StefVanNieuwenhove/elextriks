'use client';

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

const ContactFormValidationSchema = z.object({
  subject: z.string().min(1),
  email: z.email().min(1),
  message: z.string().min(1),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof ContactFormValidationSchema>>({
    resolver: zodResolver(ContactFormValidationSchema),
    defaultValues: {
      subject: '',
      email: '',
      message: '',
    },
  });

  const handleSubmit = (data: z.infer<typeof ContactFormValidationSchema>) => {
    console.log(data);
  };

  /* const handleSendMail = async () => {
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
        }),
      });

      console.log(response);
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  }; */
  return (
    <>
      <div>ContactPage</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-4'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Your email' {...field} required />
                </FormControl>
                <FormDescription>Provide your email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default ContactPage;
