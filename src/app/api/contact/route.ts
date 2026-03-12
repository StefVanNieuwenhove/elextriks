import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { env } from '@/env';

export async function POST(req: Request) {
  const { name, email, message, subject, phone } = await req.json();
  console.log(name, email, message);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GOOGLE_APP_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const textmessage = `Naam: ${name}\nEmail: ${email}\nTelefoon: ${phone}\n\nBericht:\n${message}`;

  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'stef.vannieuwenhove@telenet.be',
    subject: `${subject} - Contactformulier Elextriks`,
    text: textmessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      status: 200,
    });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: 'Email not sent' },
    );
  }
}
