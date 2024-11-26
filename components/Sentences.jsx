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
      <React.Fragment key={sentence}>
      <Sentence
        sentence={sentence}
        showSaveButton
        handleClick={() => handleClick(sentence, word, translationId)}
      />
      </React.Fragment>
    ))}
  </div>
)

export default Sentences
