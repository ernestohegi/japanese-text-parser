import React from 'react';
import TextHelper from '../helpers/text-helper';

const createDefinitionsElement = definitions => {
  return definitions.map((definition, index) => {
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
  });
};

const createSentencesElement = sentences => {
  return sentences.map((sentence, index) => (
    <div className="sentence">
      <span key={`${index}-japanese`} className="sentence__japanese">
        { TextHelper.getJapanese(sentence).replace('例文帳に追加', '') }
      </span>

      <span key={`${index}-english`} className="sentence__english">
        「{ TextHelper.getEnglish(sentence).split('-')[0] }」
      </span>
    </div>
  ));
};

const createTranslationElement = (translation, index) => (
  <div className="translation">
    <h2 key={`${translation.word}`}>{ translation.word }</h2>

    <div key="definitions" className="definitions">
      <h3> Definitions </h3>
      { createDefinitionsElement(translation.definitions) }
    </div>

    <div key="sentences" className="sentences">
      <h3> Sentences</h3>
      { createSentencesElement(translation.sentences) }
    </div>
  </div>
);

const createTranslationsElement = translations => {
  return translations.map((translation, index) => (
    createTranslationElement(translation, index)
  ))
}

class Translations extends React.Component {
  render() {
    return (
      <div className="translations">
        { createTranslationsElement(this.props.translations) }
      </div>
    )
  }
}

export default Translations;
