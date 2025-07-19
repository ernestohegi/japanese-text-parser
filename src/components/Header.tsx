import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  // TODO as isActive functionality
  return <Link href={href}>{children}</Link>;
};

const Header = () => {
  return (
    <nav>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/help">Help</NavLink>
          <a
            className="nav-link"
            href="https://github.com/ernestohegi/japanese-text-parser"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
