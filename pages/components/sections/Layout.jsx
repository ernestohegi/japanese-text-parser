import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import listHelper from "../../helpers/list-helper";
import { setGlobalStyles } from "../../styles/global-style";
import { ThemeContext, theme } from "../../styles/theme-context";

const FONT_URL =
  "https://fonts.googleapis.com/earlyaccess/notosansjapanese.css";
const SENTENCES_LIST_KEY = "sentence";

const layoutStyle = {
  margin: "20px auto",
  padding: 20,
  maxWidth: "960px",
  border: "1px solid #DDD"
};

class Layout extends React.Component {
  static async getInitialProps({ pathname, req }) {
    if (listHelper.getUserList(SENTENCES_LIST_KEY).length === 0) {
      listHelper.createUserList(SENTENCES_LIST_KEY);
    }

    return {
      pathname
    };
  }

  render() {
    const defaultTheme = theme.default;

    return (
      <ThemeContext.Provider value={defaultTheme}>
        <Head>
          <link href={FONT_URL} rel="stylesheet" />
          <style>{`
            body {
              font-family: "Noto Sans Japanese";
              font-style: normal;
              font-weight: 100;
            }

            a,
            a:hover,
            a:focus,
            a:visited {
              color: ${defaultTheme.mainColor.hex};
              text-decoration: none;
              display: inline-block;
              min-width: 50px;
            }

            a:hover {
              font-weight: 700;
            }

            h2 {
              margin: 0;
              padding: 0;
            }

            button {
              border: 0;
              background: ${defaultTheme.mainColor.hex};
              color: #fff;
            }

            .highlight {
              font-weight: 500;
              color: #5d5d5d;
            }
          `}</style>
        </Head>

        <div style={layoutStyle}>
          <Header />
          <Title copy="よちむ" />
          {this.props.children}
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Layout;
