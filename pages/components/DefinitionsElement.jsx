import textHelper from '../helpers/text-helper';

const DefinitionsElement = props => (
  props.definitions.map((definition, index) => {
    const japaneseDefinition = textHelper.getJapanese(definition).slice(0).pop();

    return (
      <div className="definition" key={index}>
        <span key={`${index}-japanese`} className="definition__japanese">
          { `${japaneseDefinition.word || ''} 「${japaneseDefinition.reading}」` }
        </span>

        <span key={`${index}-english`} className="definition__english">
          { textHelper.getEnglish(definition) }
        </span>
      </div>
    );
  })
);

export default DefinitionsElement;
