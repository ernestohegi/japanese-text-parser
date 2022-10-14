import React from "react";
import uniqid from "uniqid";
import Sentence from "./Sentence";
import containerStyle from "../styles/container-style";
import textHelper from "../helpers/text-helper";
import fileHelper from "../helpers/file-helper";

const buttonStyle = {
  fontSize: "1rem",
  padding: "0.5rem",
  marginTop: "0.5rem",
  marginRight: "0.5rem",
  cursor: "pointer"
};

const renderListElements = listElements =>
  listElements.map(element =>
    element.sentence.map((sentence, index) => (
      <Sentence id={index} key={index} sentence={sentence} />
    ))
  );

const downloadList = list => {
  let tsvContent = "";

  list.map(elements => {
    let definition = "";

    if (elements.definition && elements.definition.length) {
      definition = `${elements.definition[0].japanese} ${elements.definition[0].english}`;
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

const List = ({ list, resetList }) => (
  <>
    <button onClick={() => downloadList(list)} style={buttonStyle}>
      Export to tsv
    </button>
    <button onClick={resetList} style={buttonStyle}>
      Reset list
    </button>

    <ul className="my-list" style={containerStyle}>
      {renderListElements(list)}
    </ul>
  </>
);

export default List;
