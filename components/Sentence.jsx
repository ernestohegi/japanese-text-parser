import React, { useState } from 'react'
import { getCleanJapaneseSentence, getEnglish } from '../helpers/text-helper'
import { ThemeContext } from '../styles/theme-context'

const sentenceStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  gap: '0.5rem',
  borderBottom: '1px solid #FFF',
  paddingBottom: '0.5rem',
}

const Sentence = ({ sentence, handleClick }) => {
  const [state, setState] = useState({
    highlighted: false,
    clicked: false,
  })

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const highlightedSentenceStyle = {
          ...sentenceStyle,
          backgroundColor: theme.mainColor.rgba,
        }

        const cleanJapaneseSentence = getCleanJapaneseSentence(sentence)

        const englishSentence =
          typeof getEnglish(sentence) === 'string'
            ? getEnglish(sentence).split('-')[0]
            : []

        return (
          cleanJapaneseSentence &&
          englishSentence && (
            <article
              style={
                state.highlighted ? highlightedSentenceStyle : sentenceStyle
              }
              onClick={() => {
                const isClicked = !state.clicked
                const isHighlighted = !state.highlighted

                handleClick(isClicked)

                setState({
                  highlighted: isHighlighted,
                  clicked: isClicked,
                })
              }}
            >
              <p>
                <b>{cleanJapaneseSentence}</b>
              </p>
              <p>{englishSentence}</p>
            </article>
          )
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Sentence
