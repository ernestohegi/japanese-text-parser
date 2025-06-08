import { Html, Head, Main, NextScript } from 'next/document'
import { setJapaneseStyles } from '../styles/japanese-style'

import { ThemeContext, theme } from '../styles/theme-context'

export default function Document() {
  return (
    <Html>
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
          href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
          rel="stylesheet"
        />
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
        <link rel="canonical" href="https://www.japanscript.com" />
      </Head>
      <ThemeContext.Provider value={theme.default}>
        <body>
          <Main />
          <NextScript />
        </body>
      </ThemeContext.Provider>
    </Html>
  )
}
