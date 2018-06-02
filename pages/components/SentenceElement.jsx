import React from 'react';
import textHelper from '../helpers/text-helper';

const sentenceStyle = {
  marginBottom: '5px'
};

const highlightedSentenceStyle = Object.assign(
  {
    backgroundColor: 'rgba(252, 99, 54, 0.2)'
  },
  sentenceStyle
);

const getCleanJapaneseSentence = (sentence, word) => {
  return textHelper.getJapanese(sentence)
    .replace('例文帳に追加', '')
    .replace(word, `<span class="highlight">${word}</span>`)
  ;
};

class SentenceElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: false,
      clicked: false
    };
  }

  handleSentenceClick(event, parentCallback) {
    if (this.state.clicked) return false;

    parentCallback();

    this.setState({
      highlighted: true,
      clicked: true
    });
  }

  render () {
    const sentence = this.props.sentence;
    const word = this.props.word;

    return (
      <div
        className="sentence"
        key={this.props.id}
        style={this.state.highlighted ? highlightedSentenceStyle : sentenceStyle}
        onClick={event => this.handleSentenceClick(event, this.props.handleClick)}
      >
        <span
          key={`${this.props.id}-japanese`}
          className="sentence__japanese"
          dangerouslySetInnerHTML={{__html: getCleanJapaneseSentence(sentence, word)}}
        ></span>

        <span key={`${this.props.id}-english`} className="sentence__english">
          「{ textHelper.getEnglish(sentence).split('-')[0] }」
        </span>
      </div>
    );
  }
}

export default SentenceElement;
