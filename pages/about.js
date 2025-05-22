import React from 'react'
import Head from 'next/head'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  articleContainer: {
    backgroundColor: 'white',
    borderRadius: '2px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  japaneseHeading: {
    fontFamily: "'Zen Maru Gothic', sans-serif",
    fontWeight: '500',
    borderBottom: '3px solid #d64545',
    display: 'inline-block',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  kanji: {
    fontFamily: "'Noto Sans JP', sans-serif",
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    margin: '2rem 0',
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '2px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
}

const About = () => {
  return (
    <>
      <Head>
        <title>About | Yochimu - Japanese Text Parser</title>
      </Head>
      <section style={styles.container}>
        <article style={styles.articleContainer}>
          <h1 style={styles.japaneseHeading}>About Yochimu</h1>
          <p>
            <span style={styles.kanji}>よちむ</span> (Yochimu) means "prophetic
            dream" in Japanese. This tool was created to help Japanese language
            learners efficiently study vocabulary in context.
          </p>
          <p>
            Unlike traditional vocabulary lists or flashcards, Yochimu allows
            you to work with real Japanese sentences, preserving the context
            that is so important for proper language acquisition.
          </p>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Features</h2>
          <div style={styles.cardGrid}>
            <div style={styles.card}>
              <h3>Search in Japanese</h3>
              <p>
                Enter any Japanese word or phrase and get detailed translations
                and example sentences.
              </p>
            </div>
            <div style={styles.card}>
              <h3>Save Your Favorites</h3>
              <p>
                Collect useful sentences by clicking on them, building your
                personalized study list.
              </p>
            </div>
            <div style={styles.card}>
              <h3>Export to Anki</h3>
              <p>
                Download your saved sentences as a TSV file that can be easily
                imported into Anki for spaced repetition practice.
              </p>
            </div>
          </div>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Why Context Matters</h2>
          <p>
            Learning words in isolation makes it difficult to understand how
            they're actually used in real Japanese. Yochimu focuses on providing
            complete sentences so you can learn:
          </p>
          <ul>
            <li>Natural word usage</li>
            <li>Common collocations (words that often appear together)</li>
            <li>Grammatical patterns</li>
            <li>Cultural context</li>
          </ul>
          <p>
            This approach leads to better retention and more natural Japanese
            expression.
          </p>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Built With</h2>
          <p>Yochimu is built with modern web technologies:</p>
          <ul>
            <li>React.js and Next.js for the frontend</li>
            <li>Node.js for the backend services</li>
            <li>Integration with Japanese dictionary APIs</li>
          </ul>
          <p>
            The project is open-source and available on{' '}
            <a
              href="https://github.com/ernestohegi/japanese-text-parser"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </article>
      </section>
    </>
  )
}

export default About
