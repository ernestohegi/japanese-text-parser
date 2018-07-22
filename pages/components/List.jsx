import React from "react";
import uniqid from "uniqid";
import Sentence from "../Sentence";
import containerStyle from "../styles/container-style";
import textHelper from "../helpers/text-helper";
import fileHelper from "../helpers/file-helper";

const restListButtonStyle = {
  marginLeft: "10px"
};

const renderListElements = listElements => {
  return listElements.map(element => {
    return element.sentence.map((sentence, index) => {
      return <Sentence id={index} key={index} sentence={sentence} />;
    });
  });
};

const downloadList = list => {
  let tsvContent = "";

  list.map(elements => {
    let definition = "";

    if (elements.definition && elements.definition.length) {
      definition = `${elements.definition[0].japanese} ${
        elements.definition[0].english
      }`;
    }

    elements.sentence.map(sentence => {
      const japaneseSentence = textHelper.getCleanJapaneseSentence(sentence);
      const englishSentence = textHelper.getCleanEnglishSentence(sentence);
      tsvContent += `${japaneseSentence}\t${definition}\t${englishSentence}\n`;
    });
  });

  fileHelper.saveFile(
    `yochimu-${uniqid()}-deck.tsv`,
    tsvContent,
    "text/plain;charset=utf-8"
  );
};

class List extends React.Component {
  async handleSaveListButtonClick() {
    downloadList(this.props.list);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleSaveListButtonClick.bind(this)}>
          Save list
        </button>
        <button onClick={this.props.resetList} style={restListButtonStyle}>
          Reset list
        </button>
        <ul className="my-list" style={containerStyle}>
          {renderListElements(this.props.list)}
        </ul>
      </React.Fragment>
    );
  }
}

export default List;
