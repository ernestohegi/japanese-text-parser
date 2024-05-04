import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontWeight: '700',
}

const links = [{
  url: '/',
  copy: 'Home'
},
{
  url: '/my-list',
  copy: 'My list'
},
{
  url: '/about',
  copy: 'About'
}
]

const Header = () => (
  <header>
    {links.map(({ url, copy}) => (
        <Link href={url} style={linkStyle}>
        {copy}
      </Link>
    ))}
  </header>
)

export default Header
