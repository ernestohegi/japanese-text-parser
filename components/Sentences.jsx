import React from 'react'
import Sentence from './Sentence'

const Sentences = ({
  serviceUrl,
  serviceName,
  sentences,
  word,
  handleClick,
  translationId,
}) => (
  <div className="sentences">
    <h3>
      <a href={serviceUrl} target="_blank">
        {serviceName}
      </a>
    </h3>

    {sentences?.map((sentence, index) => (
      <Sentence
        id={index}
        key={sentence}
        sentence={sentence}
        word={word}
        showSaveButton
        handleClick={() => handleClick(sentence, word, translationId)}
      />
    ))}
  </div>
)

export default Sentences
