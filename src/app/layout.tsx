import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Footer, Navbar, SideBar } from '@/components';
import { SidebarProvider } from '@/components/ui/sidebar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Elextriks',
    template: '%s | Home',
  },
  description: 'Personal website',
  keywords: 'Elextriks, Kobe, limbourg, Elektricity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='nl'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-full min-h-screen flex flex-col`}>
        <SidebarProvider defaultOpen={false}>
          <main className='w-full flex-grow'>
            <SideBar />
            {children}
          </main>
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
