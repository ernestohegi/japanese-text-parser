import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

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
    <>
      <Head>
        <title>Yochimu | Japanese Text Parser</title>
        <meta
          name="description"
          content="Yochimu lets you look for Japanese definitions and sentences for learning the language, save them to a list, and export them as a file you can then add import to Anki."
        />
      </Head>
      <div
        className="container"
        style={{ minHeight: '100vh', maxWidth: '100%', overflowX: 'hidden' }}
      >
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
        <Analytics />
        <SpeedInsights />
        <script src="/js/japanese-animations.js"></script>
        <script src="/js/mobile-touch-handlers.js"></script>
      </div>
    </>
  )
}

export default MyApp
