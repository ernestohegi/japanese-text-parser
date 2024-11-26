import React from 'react'
import Sentence from './Sentence'
import { getCleanJapaneseSentence } from '../helpers/text-helper'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
}

const Sentences = ({ serviceUrl, serviceName, sentences, handleClick }) => (
  <section style={styles.container}>
    <h3>
      <a href={serviceUrl} target="_blank">
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
