import React from 'react'
import ReactGA from 'react-ga'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import { setGlobalStyles } from '../styles/global-style'
import { ThemeContext, theme } from '../styles/theme-context'

const handleAcceptCookie = () => {
  ReactGA.initialize('UA-126811205-1')
}

const handleDeclineCookie = () => {
  Cookies.remove('_ga')
  Cookies.remove('_gat')
  Cookies.remove('_gid')
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  footerStyle: {
    marginTop: '15px',
    textAlign: 'center',
  },
}

const CURRENT_YEAR = new Date().getFullYear()

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeContext.Provider value={theme.default}>
      <Head>
        <title> Yochimu | Japanese Text Parser </title>
        <meta
          name="description"
          content="Yochimu lets you look for Japanese definitions and sentences for learning the language, save them to a list, and export them as a file you can then add import to Anki."
        />
        <style>{setGlobalStyles(theme.default)}</style>
      </Head>
      <div style={{ ...styles.container, height: '100%' }}>
        <div
          style={{
            ...styles.container,
            maxWidth: '1024px',
            alignSelf: 'center',
          }}
        >
          <h1 style={{ fontSize: '3rem' }}>よちむ 「Yochimu」</h1>
          <Component {...pageProps} />
        </div>

        <footer style={styles.footerStyle}>
          Ernesto Hegi, {CURRENT_YEAR} &copy;
        </footer>

        <CookieConsent
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>

        <Analytics />
      </div>
    </ThemeContext.Provider>
  )
}

export default MyApp
