import React, { useState } from 'react'
import { getJapanese, getEnglish } from '../helpers/text-helper'
import { ThemeContext } from '../styles/theme-context'

const style = {
  padding: '0.75rem',
  marginBottom: '0.75rem',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  borderBottom: '1px solid #eee',
  transition: 'all 0.3s ease',
}

const japaneseTextStyle = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: '1.1rem',
  fontWeight: '500',
  color: '#333',
}

const englishTextStyle = {
  fontSize: '0.95rem',
  color: '#555',
}

const Definition = ({ definition, handleClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const japaneseDefinition = getJapanese(definition).slice(0).pop()

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const highlightedStyle = {
          ...style,
          backgroundColor: 'rgba(214, 69, 69, 0.08)',
          borderRadius: '2px',
          transform: 'translateY(-2px)',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        }

        return (
          <article
            onClick={() => {
              setIsHighlighted(true)
              handleClick()
            }}
            style={isHighlighted ? highlightedStyle : style}
            className="fade-in"
          >
            <span style={japaneseTextStyle}>
              {`${japaneseDefinition.word || ''} 「${
                japaneseDefinition.reading
              }」`}
            </span>

            <span style={englishTextStyle}>{getEnglish(definition)}</span>
          </article>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Definition
