import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import listHelper from '../helpers/list-helper';
import { setGlobalStyles } from '../styles/global-style';
import { ThemeContext, theme } from '../styles/theme-context';

const FONT_URL = 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css';
const SENTENCES_LIST_KEY = 'sentence';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

class Layout extends React.Component {
  static async getInitialProps({pathname, req}) {
    console.log('We are on the layout server');

    if (listHelper.getUserList(SENTENCES_LIST_KEY).length === 0) {
      listHelper.createUserList(SENTENCES_LIST_KEY);
    }

    return {
      pathname
    };
  }

  render() {
    const defaultTheme = theme.default;
    const globalStyle = setGlobalStyles(defaultTheme);

    return (
      <ThemeContext.Provider　value={defaultTheme}>
        <div style={layoutStyle}>
          <Head>
            <link href={FONT_URL} rel="stylesheet" />
            <style jsx global>{globalStyle}</style>
          </Head>

          <Header />
          <Title copy="よちむ"/>
          {this.props.children}
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Layout
