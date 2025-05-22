import React from 'react'
import Sentence from './Sentence'
import { getCleanJapaneseSentence } from '../helpers/text-helper'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
  },
  sectionHeading: {
    fontFamily: "'Zen Maru Gothic', sans-serif",
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '0.75rem',
    color: '#333333',
    borderBottom: '2px solid #4d7298',
    display: 'inline-block',
    paddingBottom: '0.25rem',
  },
  serviceLink: {
    color: '#4d7298',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
}

const Sentences = ({ serviceUrl, serviceName, sentences, handleClick }) => (
  <section style={styles.container}>
    <h3 style={styles.sectionHeading}>
      <a
        href={serviceUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.serviceLink}
      >
        {serviceName}
      </a>
    </h3>

    {sentences?.map((sentence) => {
      const japaneseSentence = getCleanJapaneseSentence(sentence)

      return (
        japaneseSentence && (
          <React.Fragment key={japaneseSentence}>
            <Sentence
              sentence={sentence}
              showSaveButton
              handleClick={(isClicked) => handleClick(sentence, isClicked)}
            />
          </React.Fragment>
        )
      )
    })}
  </section>
)

export default Sentences
