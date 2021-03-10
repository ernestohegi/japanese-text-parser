import React from "react";
import textHelper from "../helpers/text-helper";
import { ThemeContext } from "../styles/theme-context";

const sentenceStyle = {
  marginBottom: "5px",
  overflow: "hidden"
};

const saveButtonStyle = {
  cursor: "pointer",
  float: "right"
};

class Sentence extends React.Component {
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

  render() {
    const sentence = this.props.sentence;
    const word = this.props.word || "";

    return (
      <ThemeContext.Consumer>
        {theme => {
          const highlightedSentenceStyle = Object.assign(
            {
              backgroundColor: theme.mainColor.rgba
            },
            sentenceStyle
          );

          const cleanJapaneseSentence = textHelper.highlightWord(
            word,
            textHelper.getCleanJapaneseSentence(sentence)
          );

          const englishSentence =
            typeof textHelper.getEnglish(sentence) === "string"
              ? textHelper.getEnglish(sentence).split("-")[0]
              : [];

          return (
            <div
              className="sentence"
              key={this.props.id}
              style={
                this.state.highlighted
                  ? highlightedSentenceStyle
                  : sentenceStyle
              }
            >
              <span
                key={`${this.props.id}-japanese`}
                className="sentence__japanese"
                dangerouslySetInnerHTML={{ __html: cleanJapaneseSentence }}
              />

              <span
                key={`${this.props.id}-english`}
                className="sentence__english"
              >
                「{englishSentence}」
              </span>

              <button
                onClick={event =>
                  this.handleSentenceClick(event, this.props.handleClick)
                }
                style={saveButtonStyle}
              >
                {" "}
                Save{" "}
              </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Sentence;
