import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import GlobalStyles from '../styles/global';
import listHelper from '../helpers/list-helper';

const FONT_URL = 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

class Layout extends React.Component {
  static async getInitialProps({pathname, req}) {
    console.log('We are on the layout server');

    if (listHelper.getUserList().length === 0) {
      listHelper.createUserList();
    }

    return {
      pathname
    };
  }

  render() {
    return (
      <div style={layoutStyle}>
        <Head>
          <link href={FONT_URL} rel="stylesheet" />
          <style jsx global>{GlobalStyles}</style>
        </Head>

        <Header />
        <Title copy="よちむ"/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout
