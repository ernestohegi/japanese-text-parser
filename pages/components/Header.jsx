import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <header>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/my-list">
      <a style={linkStyle}>My List</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </header>
);

export default Header;
