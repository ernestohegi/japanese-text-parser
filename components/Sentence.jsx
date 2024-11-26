import React, { useState } from 'react'
import textHelper from '../helpers/text-helper'
import { ThemeContext } from '../styles/theme-context'

const sentenceStyle = {
  marginBottom: '5px',
  overflow: 'hidden',
}

const saveButtonStyle = {
  cursor: 'pointer',
  float: 'right',
}

const Sentence = ({ id, sentence, word, handleClick, showSaveButton }) => {
  const [state, setState] = useState({
    highlighted: false,
    clicked: false,
  })

  const handleSentenceClick = (parentCallback) => {
    if (state.clicked) return false

    if (parentCallback) parentCallback()

    setState({
      highlighted: true,
      clicked: true,
    })
  }

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const highlightedSentenceStyle = Object.assign(
          {
            backgroundColor: theme.mainColor.rgba,
          },
          sentenceStyle
        )

        const cleanJapaneseSentence =
          textHelper.getCleanJapaneseSentence(sentence)

        const englishSentence =
          typeof textHelper.getEnglish(sentence) === 'string'
            ? textHelper.getEnglish(sentence).split('-')[0]
            : []

        return (
          cleanJapaneseSentence &&
          englishSentence && (
            <div
              className="sentence"
              style={
                state.highlighted ? highlightedSentenceStyle : sentenceStyle
              }
            >
              <span className="sentence__japanese">
                {cleanJapaneseSentence}
              </span>

              <span className="sentence__english">「{englishSentence}」</span>

              {showSaveButton && (
                <button
                  onClick={() => handleSentenceClick(handleClick)}
                  style={saveButtonStyle}
                >
                  Save
                </button>
              )}
            </div>
          )
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Sentence
