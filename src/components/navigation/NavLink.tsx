import { Button } from '../ui/button';
import Link from 'next/link';

type NavLinkProps = {
  href: string;
  name: string;
  active?: boolean;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
};

const NavLink = ({ href, name, active, setActive }: NavLinkProps) => {
  return (
    <Link key={name} href={href}>
      <Button
        variant={active ? 'default' : 'link'}
        className='hover:cursor-pointer hover:underline'>
        {name}
      </Button>
    </Link>
  );
};

export default NavLink;
