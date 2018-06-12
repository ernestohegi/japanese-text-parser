import React from 'react';
import DefinitionsElement from './DefinitionsElement';
import SentencesElement from './SentencesElement';
import containerStyle from '../styles/container-style';
import textHelper from '../helpers/text-helper';
import listHelper from '../helpers/list-helper';

const SENTENCES_LIST_KEY = 'sentence';

const saveSentence = (translationId, sentence) => {
  const userList = listHelper.getUserList(SENTENCES_LIST_KEY);

  if (Array.isArray(userList[translationId]) === false) userList[translationId] = [];
  if (!userList[translationId].sentences) userList[translationId]['sentences'] = []

  userList[translationId].sentences.push(sentence);

  listHelper.saveList(SENTENCES_LIST_KEY, userList);

  return listHelper.getUserList(SENTENCES_LIST_KEY);
};

const saveDefinition = (translationId, definition) => {
  const userList = listHelper.getUserList(SENTENCES_LIST_KEY);

  if (Array.isArray(userList[translationId]) === false) userList[translationId] = [];
  if (!userList[translationId].definitions) userList[translationId]['definitions'] = []

  userList[translationId].definitions.push(definition);

  listHelper.saveList(SENTENCES_LIST_KEY, userList);

  return listHelper.getUserList(SENTENCES_LIST_KEY);
};

class TranslationElement extends React.Component {
  handleSentenceClick(sentence, word) {
    const newSentence = sentence;
    newSentence.japanese = textHelper.highlightWord(word, textHelper.getJapanese(sentence));
    console.log(
      saveSentence(this.props.id, newSentence)
    );
  }

  handleDefinitionClick(definition) {
    const cleanJapaneseDefinition = textHelper.getJapanese(definition).slice(0).pop();

    console.log(
      saveDefinition(this.props.id, {
        english: textHelper.getEnglish(definition),
        japanese: `${cleanJapaneseDefinition.word || ''} 「${cleanJapaneseDefinition.reading}」`
      })
    );
  }

  render() {
    const word = this.props.translation.word;

    return (
      <div className="translation" style={containerStyle}>
        <h2 key={`${word}`}>{ word }</h2>

        <div key="definitions" className="definitions">
          <h3> Definitions <a href="https://www.jisho.org" target="_blank"> Jisho </a></h3>
          <DefinitionsElement
            definitions={this.props.translation.definitions}
            handleClick={this.handleDefinitionClick.bind(this)}
          />
        </div>

        <div key="sentences" className="sentences">
          <h3> Sentences <a href="https://ejje.weblio.jp" target="_blank"> Weblio </a></h3>
          <SentencesElement
            sentences={this.props.translation.sentences}
            word={word}
            handleClick={this.handleSentenceClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default TranslationElement;
