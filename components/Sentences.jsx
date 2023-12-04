import React from "react";
import Sentence from "./Sentence";

const Sentences = ({
  serviceUrl,
  serviceName,
  sentences,
  word,
  handleClick,
  translationId,
}) => (
  <div key="sentences" className="sentences">
    <h3>
      <a href={serviceUrl} target="_blank">
        {serviceName}
      </a>
    </h3>

    {sentences?.map((sentence, index) => (
      <Sentence
        id={index}
        key={index}
        sentence={sentence}
        word={word}
        showSaveButton
        handleClick={() => handleClick(sentence, word, translationId)}
      />
    ))}
  </div>
);

export default Sentences;
