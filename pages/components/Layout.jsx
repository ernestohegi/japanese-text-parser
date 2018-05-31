import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Title from './Title';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <link
        href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
        rel="stylesheet"
      />
    </Head>

    <style jsx global>{`
        body {
          font-family: 'Noto Sans Japanese';
          font-style: normal;
          font-weight: 100;
        }

        a,
        a:hover,
        a:focus,
        a:visited {
          color: #FC6336;
          text-decoration: none;
          display: inline-block;
          min-width: 50px;
        }

        a:hover {
          font-weight: 700;
        }
    `}</style>

    <Header />
    <Title copy="よちむ"/>
    {props.children}
    <Footer />
  </div>
)

export default Layout
