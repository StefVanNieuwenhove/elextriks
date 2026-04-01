import { AboutMe, Contact, HomePage, Services } from '@/components/pages';

export default function Home() {
  return (
    /* paddingTop accounts for the fixed Win2000 3-bar navbar:
       title bar ~24px + menu bar ~24px + address bar ~24px = ~72px */
    <div style={{ paddingTop: '72px' }}>
      <HomePage />
      <AboutMe />
      <Services />
      <Contact />
    </div>
  );
}
