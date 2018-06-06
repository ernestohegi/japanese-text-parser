import React from 'react';
import SentenceElement from './SentenceElement';
import listHelper from '../helpers/list-helper';
import textHelper from '../helpers/text-helper';

const SENTENCES_LIST_KEY = 'sentence';

const saveSentence = sentence => {
  const userList = listHelper.getUserList(SENTENCES_LIST_KEY);
  const updatedList = listHelper.addItemToList(sentence, userList);
  listHelper.saveList(SENTENCES_LIST_KEY, updatedList);
  return listHelper.getUserList(SENTENCES_LIST_KEY);
};

class SentencesElement extends React.Component {
  handleSentenceClick(event, sentence, word) {
    const newSentence = sentence;
    newSentence.japanese = textHelper.highlightWord(word, textHelper.getJapanese(sentence));

    saveSentence(newSentence);
  }

  render () {
    return this.props.sentences.map((sentence, index) => {
      return (
        <SentenceElement
          id={index}
          key={index}
          sentence={sentence}
          word={this.props.word}
          handleClick={event => this.handleSentenceClick(event, sentence, this.props.word)}
        />
      );
    });
  }
}

export default SentencesElement;
