import React from 'react';
import textHelper from '../helpers/text-helper';

class DefinitionsElement extends React.Component {
  handleClick(definition, translationId, parentCallback) {
    if (parentCallback) parentCallback(definition, translationId);
  }

  render() {
    return (
      <div key="definitions" className="definitions">
        <h3>
          Definitions <a href="https://www.jisho.org" target="_blank"> Jisho </a>
        </h3>
        {
          this.props.definitions.map((definition, index) => {
            const japaneseDefinition = textHelper.getJapanese(definition).slice(0).pop();

            return (
              <div
                className="definition"
                key={index}
                onClick={event => this.handleClick(
                  definition,
                  this.props.translationId,
                  this.props.handleClick
                )}
              >
                <span key={`${index}-japanese`} className="definition__japanese">
                  { `${japaneseDefinition.word || ''} 「${japaneseDefinition.reading}」` }
                </span>

                <span key={`${index}-english`} className="definition__english">
                  { textHelper.getEnglish(definition) }
                </span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default DefinitionsElement;
