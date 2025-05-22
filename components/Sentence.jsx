import React, { useState } from 'react'
import { getCleanJapaneseSentence, getEnglish } from '../helpers/text-helper'
import { ThemeContext } from '../styles/theme-context'

const sentenceStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  gap: '0.75rem',
  borderBottom: '1px solid #eee',
  paddingBottom: '1rem',
  marginBottom: '1rem',
  transition: 'all 0.3s ease',
}

const japaneseTextStyle = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: '1.2rem',
  lineHeight: '1.8',
  fontWeight: '400',
}

const englishTextStyle = {
  fontStyle: 'italic',
  color: '#555',
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
          backgroundColor: 'rgba(214, 69, 69, 0.08)',
          borderRadius: '2px',
          padding: '1rem',
          transform: 'translateY(-2px)',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
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
              className="fade-in"
            >
              <p style={japaneseTextStyle}>{cleanJapaneseSentence}</p>
              <p style={englishTextStyle}>{englishSentence}</p>
            </article>
          )
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Sentence
