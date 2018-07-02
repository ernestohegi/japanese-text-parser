import React from "react";
import textHelper from '../helpers/text-helper';

class DefinitionElement extends React.Component {
  render() {
    const { index, definition } = this.props;

    const japaneseDefinition = textHelper
      .getJapanese(definition)
      .slice(0)
      .pop()
    ;

    return (
      <div
        className="definition"
        key={index}
        onClick={this.props.handleClick}
      >
        <span key={`${index}-japanese`} className="definition__japanese">
          { `${japaneseDefinition.word || ''} 「${japaneseDefinition.reading}」` }
        </span>

        <span key={`${index}-english`} className="definition__english">
          { textHelper.getEnglish(definition) }
        </span>
      </div>
    );
  }
}

export default DefinitionElement;
