import { Button } from '../ui/button';
import Link from 'next/link';

type NavLinkProps = {
  name: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
  //setActive?: React.Dispatch<React.SetStateAction<string>>;
};

const NavLink = ({ name, href, icon, active }: NavLinkProps) => {
  return (
    <Link key={name} href={href}>
      <Button
        variant={active ? 'default' : 'link'}
        className='hover:cursor-pointer hover:underline text-md'>
        {icon}
        <span>{name}</span>
      </Button>
    </Link>
  );
};

export default NavLink;
