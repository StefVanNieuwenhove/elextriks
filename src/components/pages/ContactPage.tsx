'use client';

import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

const ContactFormValidationSchema = z.object({
  subject: z.string().min(1),
  email: z.string().email().min(1),
  message: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(1),
});

type FormData = z.infer<typeof ContactFormValidationSchema>;

const inputStyle: React.CSSProperties = {
  width: '100%',
  borderTop: '2px solid #404040',
  borderLeft: '2px solid #404040',
  borderRight: '2px solid #ffffff',
  borderBottom: '2px solid #ffffff',
  backgroundColor: '#ffffff',
  color: '#000000',
  fontFamily: 'Tahoma, Arial, sans-serif',
  fontSize: '11px',
  padding: '3px 5px',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Tahoma, Arial, sans-serif',
  fontSize: '11px',
  color: '#000000',
  display: 'block',
  marginBottom: '2px',
};

const ContactPage = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(ContactFormValidationSchema),
    defaultValues: {
      subject: '',
      email: '',
      message: '',
      name: '',
      phone: '',
    },
  });

  const handleSubmit = form.handleSubmit(async (data: FormData) => {
    try {
      toast.loading('Bericht verzenden...');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('Bericht succesvol verzonden!');
      } else {
        toast.error('Er is iets fout opgetreden!');
      }
    } catch (error) {
      console.error('Error sending mail:', error);
      toast.error('Er is iets fout opgetreden!');
    } finally {
      form.reset();
    }
  });

  return (
    <div
      id='contact'
      style={{
        backgroundColor: '#008080',
        padding: '8px',
        paddingTop: '0',
      }}>
      {/* Outer Win2000 window */}
      <div className='win-window' style={{ overflow: 'hidden' }}>
        {/* Title bar */}
        <div className='win-titlebar'>
          <span style={{ fontSize: '11px' }}>&#9993;</span>
          <span>Contact - Elextriks Limbourg</span>
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

        {/* Section header */}
        <div
          style={{
            padding: '10px 16px 6px',
            backgroundColor: '#d4d0c8',
            borderBottom: '1px solid #808080',
          }}>
          <h2
            style={{
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#000000',
              margin: 0,
            }}>
            Neem{' '}
            <span style={{ color: '#0a246a' }}>Contact</span> Op
          </h2>
          <p
            style={{
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '11px',
              color: '#444',
              marginTop: '3px',
              marginBottom: 0,
            }}>
            Heeft u een vraag of wenst u een offerte? Contacteer ons
            vrijblijvend.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            padding: '12px',
            backgroundColor: '#d4d0c8',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '12px',
          }}>
          {/* Contact form window */}
          <div className='win-window' style={{ overflow: 'hidden' }}>
            <div className='win-titlebar' style={{ fontSize: '11px' }}>
              <span>&#9998;</span>
              <span>Stuur ons een bericht</span>
            </div>
            <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                  {/* Name */}
                  <div>
                    <label style={labelStyle} htmlFor='win-name'>
                      Naam:
                    </label>
                    <input
                      id='win-name'
                      type='text'
                      placeholder='Jan Jansens'
                      style={inputStyle}
                      {...form.register('name')}
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label style={labelStyle} htmlFor='win-phone'>
                      Telefoon:
                    </label>
                    <input
                      id='win-phone'
                      type='tel'
                      placeholder='+32 471 12 34 56'
                      style={inputStyle}
                      {...form.register('phone')}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '8px' }}>
                  <label style={labelStyle} htmlFor='win-email'>
                    E-mailadres:
                  </label>
                  <input
                    id='win-email'
                    type='email'
                    placeholder='jan.jansens@gmail.com'
                    style={inputStyle}
                    {...form.register('email')}
                    required
                  />
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '8px' }}>
                  <label style={labelStyle} htmlFor='win-subject'>
                    Onderwerp:
                  </label>
                  <input
                    id='win-subject'
                    type='text'
                    placeholder='Onderwerp van uw bericht'
                    style={inputStyle}
                    {...form.register('subject')}
                    required
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={labelStyle} htmlFor='win-message'>
                    Bericht:
                  </label>
                  <textarea
                    id='win-message'
                    rows={5}
                    placeholder='Typ hier uw bericht...'
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '80px',
                    }}
                    {...form.register('message')}
                    required
                  />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px' }}>
                  <button
                    type='submit'
                    className='win-btn-primary'
                    disabled={form.formState.isSubmitting}
                    style={{ fontSize: '11px', padding: '4px 18px' }}>
                    Verzenden
                  </button>
                  <button
                    type='button'
                    className='win-btn'
                    style={{ fontSize: '11px' }}
                    onClick={() => form.reset()}>
                    Annuleren
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact info + map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Contact info window */}
            <div className='win-window' style={{ overflow: 'hidden' }}>
              <div className='win-titlebar' style={{ fontSize: '11px' }}>
                <span>&#128222;</span>
                <span>Contactgegevens</span>
              </div>
              <div style={{ padding: '12px', backgroundColor: '#d4d0c8' }}>
                {/* Address */}
                <div className='win-groupbox' style={{ marginBottom: '8px' }}>
                  <span className='win-groupbox-title'>
                    <MapPin size={10} style={{ display: 'inline', marginRight: '3px' }} />
                    Adres
                  </span>
                  <p
                    style={{
                      fontFamily: 'Tahoma, Arial, sans-serif',
                      fontSize: '11px',
                      margin: 0,
                      lineHeight: '1.7',
                    }}>
                    Calloystraat 30A
                    <br />
                    1790, Affligem
                    <br />
                    België
                  </p>
                </div>

                {/* Phone */}
                <div className='win-groupbox' style={{ marginBottom: '8px' }}>
                  <span className='win-groupbox-title'>
                    <Phone size={10} style={{ display: 'inline', marginRight: '3px' }} />
                    Telefoon
                  </span>
                  <a
                    href='tel:+32497209377'
                    className='win-link'
                    style={{
                      fontFamily: 'Tahoma, Arial, sans-serif',
                      fontSize: '11px',
                    }}>
                    +32 497 20 93 77
                  </a>
                </div>

                {/* Hours */}
                <div className='win-groupbox'>
                  <span className='win-groupbox-title'>
                    <Clock size={10} style={{ display: 'inline', marginRight: '3px' }} />
                    Openingstijden
                  </span>
                  <p
                    style={{
                      fontFamily: 'Tahoma, Arial, sans-serif',
                      fontSize: '11px',
                      margin: 0,
                      lineHeight: '1.7',
                    }}>
                    24 uur per dag geopend
                    <br />
                    <span style={{ color: '#444' }}>
                      Spoedinterventie altijd mogelijk
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map window */}
            <div className='win-window' style={{ overflow: 'hidden', flex: 1 }}>
              <div className='win-titlebar' style={{ fontSize: '11px' }}>
                <span>&#127759;</span>
                <span>Locatie op kaart</span>
              </div>
              <div className='win-inset' style={{ margin: '6px' }}>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.0477891234567!2d4.0858!3d50.9047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e5a5e5a5e5a5%3A0x5a5a5a5a5a5a5a5a!2sCalloystraat%2030A%2C%201790%20Affligem!5e0!3m2!1snl!2sbe!4v1234567890'
                  width='100%'
                  height='240'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Elextriks Limbourg - Calloystraat 30A, 1790 Affligem'
                  style={{ border: '0', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className='win-statusbar'>
          <span style={{ borderRight: '1px solid #808080', paddingRight: '8px', marginRight: '4px' }}>
            Gereed
          </span>
          <span style={{ color: '#444' }}>Formulier beschikbaar</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
