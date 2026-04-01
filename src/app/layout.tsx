import type { Metadata } from 'next';
import { Footer, SideBar } from '@/components';
import { SidebarProvider } from '@/components/ui/sidebar';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: {
    default: 'Elextriks Limbourg',
    template: '%s | Elextriks',
  },
  description:
    'Professionele elektriciteitswerken voor particulieren en bedrijven in Affligem en omgeving.',
  keywords: 'Elextriks, Kobe, Limbourg, Elektriciteit, Affligem',
  themeColor: '#008080',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='nl'>
      <head>
        {/* Tahoma is a system font — load Inter as fallback from Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body
        style={{ fontFamily: "Tahoma, 'Noto Sans', Arial, sans-serif" }}
        className='min-h-screen flex flex-col max-w-full'>
        {/* Win2000 desktop background (teal) */}
        <div
          className='flex-1 flex flex-col'
          style={{ backgroundColor: '#008080' }}>
          <SidebarProvider defaultOpen={false}>
            <main className='w-full flex-grow'>
              <SideBar />
              {children}
            </main>
            <Toaster />
          </SidebarProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
