import React from 'react'
import DefinitionElement from './Definition'

class DefinitionsElement extends React.Component {
  handleClick(definition, translationId, parentCallback) {
    if (parentCallback) parentCallback(definition, translationId)
  }

  render() {
    return (
      <div key="definitions" className="definitions">
        <h3>
          <a href="https://www.jisho.org" target="_blank">
            Jisho
          </a>
        </h3>
        {this.props.definitions?.map((definition) => {
          return (
            <DefinitionElement
              definition={definition}
              key={definition}
              handleClick={() =>
                this.handleClick(
                  definition,
                  this.props.translationId,
                  this.props.handleClick
                )
              }
            />
          )
        })}
      </div>
    )
  }
}

export default DefinitionsElement
