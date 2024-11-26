import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.japanscript.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}