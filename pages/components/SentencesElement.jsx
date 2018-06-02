import React from 'react';
import SentenceElement from './SentenceElement';
import listHelper from '../helpers/list-helper';

const saveSentence = sentence => {
  const userList = listHelper.getUserList();
  const updatedList = listHelper.addItemToList(sentence, userList);
  listHelper.saveList(updatedList);
  return listHelper.getUserList();
};

class SentencesElement extends React.Component {
  handleSentenceClick(event, sentence) {
    saveSentence(sentence);
  }

  render () {
    return this.props.sentences.map((sentence, index) => {
      return (
        <SentenceElement
          id={index}
          key={index}
          sentence={sentence}
          word={this.props.word}
          handleClick={event => this.handleSentenceClick(event, sentence)}
        />
      );
    });
  }
}

export default SentencesElement;
