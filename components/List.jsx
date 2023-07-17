import React from "react";
import uniqid from "uniqid";
import Sentence from "./Sentence";
import containerStyle from "../styles/container-style";
import textHelper from "../helpers/text-helper";
import fileHelper from "../helpers/file-helper";
import SmallTitle from "./sections/SmallTitle";

const buttonStyle = {
  fontSize: "1rem",
  padding: "0.5rem",
  marginTop: "0.5rem",
  marginRight: "0.5rem",
  cursor: "pointer"
};

const downloadList = list => {
  let tsvContent = "";

  list.map(elements => {
    let definition = "";

    if (elements.definition?.length) {
      definition = `${elements.definition[0].japanese} ${elements.definition[0].english}`;
    }

    if (elements.sentence?.length) {
      elements.sentence.map(sentence => {
        const japaneseSentence = textHelper.getCleanJapaneseSentence(sentence);
        const englishSentence = textHelper.getCleanEnglishSentence(sentence);
        tsvContent += `${japaneseSentence}\t${definition}\t${englishSentence}\n`;
      });
    }
  });

  fileHelper.saveFile(
    `yochimu-${uniqid()}-deck.tsv`,
    tsvContent,
    "text/plain;charset=utf-8"
  );
};

const List = ({ list, resetList }) => {
  const definitions = [...list.map(element => element.definition)].filter(
    Boolean
  );
  const sentences = [...list.map(element => element.sentence)].filter(Boolean);

  return (
    <>
      <button onClick={() => downloadList(list)} style={buttonStyle}>
        Export to tsv
      </button>
      <button onClick={resetList} style={buttonStyle}>
        Reset list
      </button>

      {definitions.length > 0 && (
        <>
          <SmallTitle copy="Definitions" />
          <ul className="my-list" style={containerStyle}>
            {definitions.map(element =>
              element.map((sentence, index) => (
                <Sentence id={index} key={index} sentence={sentence} />
              ))
            )}
          </ul>
        </>
      )}

      {sentences.length > 0 && (
        <>
          <SmallTitle copy="Sentences" />
          <ul className="my-list" style={containerStyle}>
            {sentences.map(element =>
              element.map((sentence, index) => (
                <Sentence id={index} key={index} sentence={sentence} />
              ))
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default List;
