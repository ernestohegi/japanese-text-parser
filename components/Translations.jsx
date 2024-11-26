import React from 'react'
import Definitions from './Definitions'
import Sentences from './Sentences'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
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

const Translations = ({ translations, handleSentenceClick }) => {
  return (
    <div style={styles.container}>
      {translations.map((translation) => {
        const word = translation.word

        translationsCounter++

        return (
          <div key={translation.word} style={styles.container}>
            <h2>{word}</h2>

            {translation.definition && (
              <>
                <h3>Definitions</h3>
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
      })}
    </div>
  )
}

export default Translations
