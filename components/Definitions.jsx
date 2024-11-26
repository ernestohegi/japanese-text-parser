import React from 'react'
import DefinitionElement from './Definition'

const DefinitionsElement = ({ definitions, translationId, handleClick }) => (
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
            onClick={() => handleClick(definition, translationId)}
          />
        )
      })}
    </div>
  )

export default DefinitionsElement
