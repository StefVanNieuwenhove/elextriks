import Link from 'next/link';

type NavLinkProps = {
  name: string;
  href: string;
  active?: boolean;
};

const NavLink = ({ name, href, active }: NavLinkProps) => {
  return (
    <Link
      href={href}
      style={{
        padding: '2px 6px',
        fontSize: '11px',
        fontFamily: 'Tahoma, Arial, sans-serif',
        color: active ? '#ffffff' : '#000000',
        backgroundColor: active ? '#316ac5' : 'transparent',
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          (e.target as HTMLAnchorElement).style.backgroundColor = '#316ac5';
          (e.target as HTMLAnchorElement).style.color = '#ffffff';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
          (e.target as HTMLAnchorElement).style.color = '#000000';
        }
      }}>
      {name}
    </Link>
  );
};

export default NavLink;
