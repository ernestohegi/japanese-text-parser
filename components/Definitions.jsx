import React from 'react'
import DefinitionElement from './Definition'

const DefinitionsElement = ({ definitions, translationId, handleClick }) => {
  const onClick = (definition) => {
    handleClick(definition, translationId)
  }

  return (
    <div className="definitions">
      <h3>
        <a href="https://www.jisho.org" target="_blank">
          Jisho
        </a>
      </h3>
      {definitions?.map((definition) => {
        return (
          <DefinitionElement
            key={definition}
            definition={definition}
            onClick={() =>
              onClick(
                definition
              )
            }
          />
        )
      })}
    </div>
  )
}

export default DefinitionsElement
