import React from 'react'
import ReactGA from 'react-ga'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { setJapaneseStyles } from '../styles/japanese-style'
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
    width: '100%',
    maxWidth: '100%',
    overflowX: 'hidden',
  },
  mainContent: {
    maxWidth: '1200px',
    alignSelf: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  titleStyle: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    display: 'inline-block',
  },
}

const CURRENT_YEAR = new Date().getFullYear()

const NavLink = ({ href, children }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeContext.Provider value={theme.default}>
      <Head>
        <title> Yochimu | Japanese Text Parser </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="Yochimu lets you look for Japanese definitions and sentences for learning the language, save them to a list, and export them as a file you can then add import to Anki."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Zen+Maru+Gothic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/floating-buttons.css" />
        <style>{setJapaneseStyles(theme.default)}</style>
      </Head>
      <div
        className="container"
        style={{ minHeight: '100vh', maxWidth: '100%', overflowX: 'hidden' }}
      >
        {/* Decorative kanji elements */}
        <span className="kanji-decoration top-right">予</span>
        <span className="kanji-decoration bottom-left">夢</span>

        <nav>
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              <span>よちむ</span>
              <span>Yochimu</span>
            </Link>
            <div className="nav-links">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/help">Help</NavLink>
              <a
                className="nav-link"
                href="https://github.com/ernestohegi/japanese-text-parser"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>

        <div style={styles.mainContent}>
          <Component {...pageProps} />
        </div>

        <footer>Ernesto Hegi, {CURRENT_YEAR} &copy;</footer>

        <CookieConsent
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            color: '#333333',
          }}
          buttonStyle={{
            backgroundColor: '#d64545',
            color: 'white',
            fontSize: '13px',
          }}
          declineButtonStyle={{
            backgroundColor: '#1a1a1a',
            color: 'white',
            fontSize: '13px',
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Analytics />
        <SpeedInsights />
        <script src="/js/japanese-animations.js"></script>
        <script src="/js/mobile-touch-handlers.js"></script>
      </div>
    </ThemeContext.Provider>
  )
}

export default MyApp
