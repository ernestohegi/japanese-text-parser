import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import { setGlobalStyles } from "../../styles/global-style";
import { ThemeContext, theme } from "../../styles/theme-context";

const FONT_URL =
  "https://fonts.googleapis.com/earlyaccess/notosansjapanese.css";

const layoutStyle = {
  margin: "20px auto",
  padding: 20,
  maxWidth: "960px",
  border: "1px solid #DDD"
};

class Layout extends React.Component {
  render() {
    const defaultTheme = theme.default;

    return (
      <ThemeContext.Provider value={defaultTheme}>
        <Head>
          <title> Yochimu | Japanese Text Parser </title>
          <link href={FONT_URL} rel="stylesheet" />
          <style>{setGlobalStyles(defaultTheme)}</style>
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
