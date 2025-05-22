import React from 'react'
import Definitions from './Definitions'
import Sentences from './Sentences'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  wordHeading: {
    fontFamily: "'Zen Maru Gothic', sans-serif",
    fontSize: '2rem',
    fontWeight: '500',
    borderBottom: '2px solid #d64545',
    display: 'inline-block',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  sectionHeading: {
    fontFamily: "'Zen Maru Gothic', sans-serif",
    fontSize: '1.5rem',
    fontWeight: '500',
    marginBottom: '0.75rem',
    color: '#333333',
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '2px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
    borderLeft: '4px solid #d64545',
    width: '100%',
    overflowX: 'hidden',
    overflowWrap: 'break-word',
  },
}

const services = [
  {
    key: 'tangorin',
    name: 'Tangorin',
    url: 'http://tangorin.com',
  },
  // {
  //   key: "weblio",
  //   name: "Weblio",
  //   url: "http://ejje.weblio.jp"
  // }
]

let translationsCounter = 0

// Placeholder function - this will prevent errors since it's referenced but not implemented
const handleDefinitionClick = () => {}

const Translations = ({ translations, handleSentenceClick }) => {
  return (
    <div style={styles.container}>
      {translations.length > 0 ? (
        translations.map((translation) => {
          const word = translation.word

          translationsCounter++

          return (
            <div
              key={translation.word}
              style={styles.resultContainer}
              className="parsed-result fade-in"
            >
              <h2 style={styles.wordHeading}>{word}</h2>

              {translation.definition && (
                <>
                  <h3 style={styles.sectionHeading}>Definitions</h3>
                  <Definitions
                    translationId={translationsCounter}
                    definitions={translation.definitions}
                    handleClick={handleDefinitionClick}
                  />
                </>
              )}

              {services.map((service) => (
                <React.Fragment key={service.key}>
                  <Sentences
                    translationId={translationsCounter}
                    sentences={translation.sentences[service.key]}
                    word={word}
                    handleClick={handleSentenceClick}
                    serviceName={service.name}
                    serviceUrl={service.url}
                  />
                </React.Fragment>
              ))}
            </div>
          )
        })
      ) : (
        <div style={{ minHeight: '100px' }}></div>
      )}
    </div>
  )
}

export default Translations
