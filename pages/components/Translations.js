import React from 'react';
import TextHelper from '../helpers/text-helper';

const createDefinitionsElement = definitions => {
  return definitions.map((definition, index) => {
    const japaneseDefinition = TextHelper.getJapanese(definition).slice(0).pop();

    return (
      <div className="definition">
        <p key={`${index}-japanese`} className="definition__japanese">
          {
            `
              ${japaneseDefinition.word},
              ${japaneseDefinition.reading}
            `
          }
        </p>

        <p key={`${index}-english`} className="definition__english">
          { TextHelper.getEnglish(definition) }
        </p>
      </div>
    );
  });
};

const createSentencesElement = sentences => {
  return sentences.map((sentence, index) => (
    <div className="sentence">
      <p key={`${index}-japanese`} className="sentence__japanese">
        { TextHelper.getJapanese(sentence).replace('例文帳に追加', '') }
      </p>

      <p key={`${index}-english`} className="sentence__english">
        { TextHelper.getEnglish(sentence).split('-')[0] }
      </p>
    </div>
  ));
};

const createTranslationElement = (translation, index) => {
  const word = translation.word;

  return (
    <div className="translation">
      <h2 key={`${word}`}>{ word }</h2>

      <div key="definitions" className="definitions">
        { createDefinitionsElement(translation.definitions) }
      </div>

      <div key="sentences" className="sentences">
        { createSentencesElement(translation.sentences) }
      </div>
    </div>
  );
};

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
