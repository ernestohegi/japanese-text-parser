import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import GlobalStyles from '../styles/global';

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

    <style jsx global>{GlobalStyles}</style>

    <Header />
    <Title copy="よちむ"/>
    {props.children}
    <Footer />
  </div>
)

export default Layout
