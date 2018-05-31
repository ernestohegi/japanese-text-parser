import TextHelper from '../helpers/text-helper';

const DefinitionsElement = props => (
  props.definitions.map((definition, index) => {
    const japaneseDefinition = TextHelper.getJapanese(definition).slice(0).pop();

    return (
      <div className="definition">
        <span key={`${index}-japanese`} className="definition__japanese">
          { `${japaneseDefinition.word || ''} 「${japaneseDefinition.reading}」` }
        </span>

        <span key={`${index}-english`} className="definition__english">
          { TextHelper.getEnglish(definition) }
        </span>
      </div>
    );
  })
);

export default DefinitionsElement;
