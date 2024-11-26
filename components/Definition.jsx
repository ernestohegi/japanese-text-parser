import React, { useState } from 'react'
import { getJapanese, getEnglish } from '../helpers/text-helper'
import { ThemeContext } from '../styles/theme-context'

const style = {
  marginBottom: '5px',
  cursor: 'pointer',
}

const Definition = ({ definition, handleClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false)

  const japaneseDefinition = getJapanese(definition).slice(0).pop()

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const highlightedStyle = Object.assign(
          {
            backgroundColor: theme.mainColor.rgba,
          },
          style
        )

        return (
          <article
            onClick={() => {
              setIsHighlighted(true)
              handleClick()
            }}
            style={isHighlighted ? highlightedStyle : style}
          >
            <span>
              {`${japaneseDefinition.word || ''} 「${
                japaneseDefinition.reading
              }」`}
            </span>

            <span>{getEnglish(definition)}</span>
          </article>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Definition
