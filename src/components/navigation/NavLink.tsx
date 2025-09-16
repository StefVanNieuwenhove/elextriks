import { Button } from '../ui/button';
import Link from 'next/link';

type NavLinkProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
};

const NavLink = ({ name, href, icon, active, setActive }: NavLinkProps) => {
  return (
    <Link key={name} href={href}>
      <Button
        variant={active ? 'default' : 'link'}
        onClick={setActive ? () => setActive(href) : undefined}
        className='hover:cursor-pointer hover:underline'>
        {icon}
        <span>{name}</span>
      </Button>
    </Link>
  );
};

export default NavLink;
