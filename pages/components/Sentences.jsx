import React from "react";
import SentenceElement from "./Sentence";

class SentencesElement extends React.Component {
  render() {
    return (
      <div key="sentences" className="sentences">
        <h3>
          Sentences{" "}
          <a href={this.props.serviceUrl} target="_blank">
            {" "}
            {this.props.serviceName}{" "}
          </a>
        </h3>
        {this.props.sentences.map((sentence, index) => {
          return (
            <SentenceElement
              id={index}
              key={index}
              sentence={sentence}
              word={this.props.word}
              handleClick={() =>
                this.props.handleClick(
                  sentence,
                  this.props.word,
                  this.props.translationId
                )
              }
            />
          );
        })}
      </div>
    );
  }
}

export default SentencesElement;
