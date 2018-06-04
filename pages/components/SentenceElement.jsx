import React from 'react';
import textHelper from '../helpers/text-helper';
import { ThemeContext } from '../styles/theme-context';

const sentenceStyle = {
  marginBottom: '5px'
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

    if (parentCallback) parentCallback();

    this.setState({
      highlighted: true,
      clicked: true
    });
  }

  render () {
    const sentence = this.props.sentence;
    const word = this.props.word;

    return (
      <ThemeContext.Consumer>
        {theme => {
          const highlightedSentenceStyle = Object.assign(
            {
              backgroundColor: theme.mainColor.rgba
            },
            sentenceStyle
          );

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
                dangerouslySetInnerHTML={{__html: textHelper.getCleanJapaneseSentence(sentence).replace(word, `<span class="highlight">${word}</span>`)}}
              ></span>

              <span key={`${this.props.id}-english`} className="sentence__english">
                「{ textHelper.getEnglish(sentence).split('-')[0] }」
              </span>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default SentenceElement;
