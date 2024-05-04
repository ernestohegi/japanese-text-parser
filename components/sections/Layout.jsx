import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Title from './Title'
import { setGlobalStyles } from '../../styles/global-style'
import { ThemeContext, theme } from '../../styles/theme-context'

const FONT_URL = 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css'

const layoutStyle = {
  margin: '1rem auto',
  padding: '1rem',
  border: '1px solid #DDD',
}

const Layout = ({ children }) => (
  <ThemeContext.Provider value={theme.default}>
    <Head>
      <title> Yochimu | Japanese Text Parser </title>
      <meta
        name="description"
        content="Yochimu lets you look for Japanese definitions and sentences for learning the language, save them to a list, and export them as a file you can then add import to Anki."
      />
      <link href={FONT_URL} rel="stylesheet" />
      <link rel="canonical" href="https://www.japanscript.com" />
      <style>{setGlobalStyles(theme.default)}</style>
    </Head>

    <div style={layoutStyle}>
      <Header />
      <Title copy="よちむ |「Yochimu」" />
      {children}
      <Footer />
    </div>
  </ThemeContext.Provider>
)

export default Layout
