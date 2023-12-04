import React, { useState } from "react";
import textHelper from "../helpers/text-helper";
import { ThemeContext } from "../styles/theme-context";

const sentenceStyle = {
  marginBottom: "5px",
  overflow: "hidden",
};

const saveButtonStyle = {
  cursor: "pointer",
  float: "right",
};

const Sentence = ({ id, sentence, word, handleClick, showSaveButton }) => {
  const [state, setState] = useState({
    highlighted: false,
    clicked: false,
  });

  const handleSentenceClick = (parentCallback) => {
    if (state.clicked) return false;

    if (parentCallback) parentCallback();

    setState({
      highlighted: true,
      clicked: true,
    });
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const highlightedSentenceStyle = Object.assign(
          {
            backgroundColor: theme.mainColor.rgba,
          },
          sentenceStyle,
        );

        const cleanJapaneseSentence = textHelper.highlightWord(
          word,
          textHelper.getCleanJapaneseSentence(sentence),
        );

        const englishSentence =
          typeof textHelper.getEnglish(sentence) === "string"
            ? textHelper.getEnglish(sentence).split("-")[0]
            : [];

        return (
          <div
            className="sentence"
            key={id}
            style={state.highlighted ? highlightedSentenceStyle : sentenceStyle}
          >
            <span
              key={`${id}-japanese`}
              className="sentence__japanese"
              dangerouslySetInnerHTML={{ __html: cleanJapaneseSentence }}
            />

            <span key={`${id}-english`} className="sentence__english">
              「{englishSentence}」
            </span>

            {showSaveButton && (
              <button
                onClick={() => handleSentenceClick(handleClick)}
                style={saveButtonStyle}
              >
                Save
              </button>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Sentence;
