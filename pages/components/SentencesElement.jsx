import React from 'react';
import SentenceElement from './SentenceElement';

class SentencesElement extends React.Component {
  render () {
    return this.props.sentences.map((sentence, index) => {
      return (
        <SentenceElement
          id={index}
          key={index}
          sentence={sentence}
          word={this.props.word}
          handleClick={() => this.props.handleClick(sentence, this.props.word)}
        />
      );
    });
  }
}

export default SentencesElement;
