import React from "react";
import FileSaver from "file-saver";
import uniqid from "uniqid";
import SentenceElement from "./SentenceElement";
import containerStyle from "../styles/container-style";
import textHelper from "../helpers/text-helper";

const restListButtonStyle = {
  marginLeft: "10px"
};

const getStructuresFromList = (list, structure) => {
  return list.map(elements => elements[structure]);
};

const renderListElements = listElements => {
  const structures = getStructuresFromList(listElements, 'sentences');

  return structures.map(sentences => {
    return sentences.map((sentence, index) => {
      return <SentenceElement id={index} key={index} sentence={sentence} />
    });
  });
}

class ListElement extends React.Component {
  async handleSaveListButtonClick() {
    let tsvContent = "";

    this.props.list.map(elements => {
      const definition = `${elements.definitions[0].japanese} ${elements.definitions[0].english}`;

      elements.sentences.map(sentence => {
        const japaneseSentence = textHelper.getCleanJapaneseSentence(sentence);
        const englishSentence = textHelper.getCleanEnglishSentence(sentence);
        tsvContent += `${japaneseSentence}\t${definition}\t${englishSentence}\n`;
      })
    });

    const blob = new Blob([tsvContent], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, `yochimu-${uniqid()}-deck.tsv`);
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

export default ListElement;
