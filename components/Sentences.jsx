import React from "react";
import Sentence from "./Sentence";

class Sentences extends React.Component {
  render() {
    return (
      <div key="sentences" className="sentences">
        <h3>
          <a href={this.props.serviceUrl} target="_blank">
            {this.props.serviceName}
          </a>
        </h3>

        {this.props.sentences?.map((sentence, index) => {
          return (
            <Sentence
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

export default Sentences;
