import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { env } from '@/env';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
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

  const mailOptions = {
    from: 'stef.vannieuwenhove@telenet.be',
    to: 'stef.vannieuwenhove@telenet.be',
    subject: `test mail`,
    text: `<p>joepie het werky</p>`,
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
      { status: 500, statusText: 'Email not sent' }
    );
  }
}
