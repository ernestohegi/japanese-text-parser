import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontWeight: '700',
}

const StyledLink = ({ url, copy }) => (
  <Link href={url} style={linkStyle}>
    {copy}
  </Link>
)

const Header = () => (
  <header>
    <StyledLink url="/" copy="Home" />
    <StyledLink url="/my-list" copy="My List" />
    <StyledLink url="/about" copy="About" />
  </header>
)

export default Header
