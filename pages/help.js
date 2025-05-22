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
  stepContainer: {
    borderLeft: '2px solid #4d7298',
    paddingLeft: '1.5rem',
    marginLeft: '1rem',
    marginBottom: '2rem',
  },
  step: {
    marginBottom: '1.5rem',
    position: 'relative',
  },
  stepNumber: {
    position: 'absolute',
    left: '-2.5rem',
    top: '0',
    width: '2rem',
    height: '2rem',
    backgroundColor: '#4d7298',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRadius: '2px',
    fontFamily: 'monospace',
    overflowX: 'auto',
    margin: '1rem 0',
  },
}

const Help = () => {
  return (
    <>
      <Head>
        <title>Help | Yochimu - Japanese Text Parser</title>
      </Head>
      <section style={styles.container}>
        <article style={styles.articleContainer}>
          <h1 style={styles.japaneseHeading}>How to Use Yochimu</h1>
          <p>
            Yochimu is designed to be simple and intuitive. Here's a quick guide
            to get you started.
          </p>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Basic Usage</h2>
          <div style={styles.stepContainer}>
            <div style={styles.step}>
              <span style={styles.stepNumber}>1</span>
              <h3>Enter a Japanese Word or Phrase</h3>
              <p>
                In the search box on the home page, type any Japanese word,
                phrase, or sentence you want to learn more about.
              </p>
              <p>Examples:</p>
              <ul>
                <li>単語 (word)</li>
                <li>日本語 (Japanese language)</li>
                <li>勉強する (to study)</li>
              </ul>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>2</span>
              <h3>Review the Results</h3>
              <p>
                Yochimu will display definitions and example sentences
                containing your search term. The results come from trusted
                sources like Jisho and Tangorin.
              </p>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>3</span>
              <h3>Save Sentences You Want to Study</h3>
              <p>
                Click on any sentence to add it to your study list. The sentence
                will be highlighted to show it's been selected.
              </p>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>4</span>
              <h3>Export Your Study List</h3>
              <p>
                Once you've collected some sentences, click the "Export to tsv"
                button to download your list as a TSV (Tab-Separated Values)
                file.
              </p>
            </div>
          </div>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Importing to Anki</h2>
          <p>
            The TSV files from Yochimu are formatted for easy import into Anki,
            a popular spaced repetition flashcard program.
          </p>

          <div style={styles.stepContainer}>
            <div style={styles.step}>
              <span style={styles.stepNumber}>1</span>
              <h3>Open Anki</h3>
              <p>Start Anki on your computer.</p>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>2</span>
              <h3>Create or Select a Deck</h3>
              <p>
                Create a new deck for your Japanese study or select an existing
                one.
              </p>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>3</span>
              <h3>Import File</h3>
              <p>
                Click "File" → "Import" and select the TSV file you downloaded
                from Yochimu.
              </p>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>4</span>
              <h3>Configure Import Settings</h3>
              <p>
                Make sure the field mapping is correct. The first field should
                be for Japanese and the second for English.
              </p>
            </div>

            <div style={styles.step}>
              <span style={styles.stepNumber}>5</span>
              <h3>Begin Studying</h3>
              <p>
                Once imported, you can begin studying your new cards using
                Anki's spaced repetition system.
              </p>
            </div>
          </div>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Tips for Effective Study</h2>
          <ul>
            <li>
              Choose sentences that are at or slightly above your current level
            </li>
            <li>
              Focus on natural, everyday expressions rather than literary or
              extremely formal Japanese
            </li>
            <li>Try to understand the grammar patterns in each sentence</li>
            <li>Read sentences aloud to practice pronunciation</li>
            <li>Create a consistent study routine with Anki</li>
          </ul>
        </article>

        <article style={styles.articleContainer}>
          <h2 style={styles.japaneseHeading}>Need More Help?</h2>
          <p>
            If you have questions or need assistance, please visit the
            <a
              href="https://github.com/ernestohegi/japanese-text-parser/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              GitHub issues page
            </a>
            to report problems or request features.
          </p>
        </article>
      </section>
    </>
  )
}

export default Help
