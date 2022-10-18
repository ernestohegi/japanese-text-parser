import React from "react";
import Definitions from "./Definitions";
import Sentences from "./Sentences";
import containerStyle from "../styles/container-style";
import textHelper from "../helpers/text-helper";
import listHelper from "../helpers/list-helper";

let translationsCounter = 0;

const SENTENCES_LIST_KEY = "sentence";

const services = [
  {
    key: "tangorin",
    name: "Tangorin",
    url: "http://tangorin.com"
  }
  // {
  //   key: "weblio",
  //   name: "Weblio",
  //   url: "http://ejje.weblio.jp"
  // }
];

const saveElementsIntoList = (listId, element, structure) => {
  const userList = listHelper.getUserList(SENTENCES_LIST_KEY);
  const updatedUserList = listHelper.addItemToListByPositionWithSubcategory(
    element,
    userList,
    listId,
    structure
  );

  listHelper.saveList(SENTENCES_LIST_KEY, updatedUserList);
};

const saveSentence = (translationId, sentence) =>
  saveElementsIntoList(translationId, sentence, "sentence");

const saveDefinition = (translationId, definition) =>
  saveElementsIntoList(translationId, definition, "definition");

const handleSentenceClick = (sentence, word, translationId) => {
  const newSentence = sentence;

  newSentence.japanese = textHelper.highlightWord(
    word,
    textHelper.getJapanese(sentence)
  );

  saveSentence(translationId, newSentence);
};

const handleDefinitionClick = (definition, translationId) => {
  const cleanJapaneseDefinition = textHelper
    .getJapanese(definition)
    .slice(0)
    .pop();

  saveDefinition(translationId, {
    english: textHelper.getEnglish(definition),
    japanese: `${cleanJapaneseDefinition.word || ""} 「${
      cleanJapaneseDefinition.reading
    }」`
  });
};

const Translations = ({ translations }) => (
  <div className="translations">
    {translations.map((translation, index) => {
      const word = translation.word;

      ++translationsCounter;

      return (
        <div className="translation" style={containerStyle} key={index}>
          <h2 key={`${word}`}>{word}</h2>

          <h3> Definitions </h3>

          <Definitions
            translationId={translationsCounter}
            definitions={translation.definitions}
            handleClick={handleDefinitionClick}
          />

          <h3> Sentences </h3>

          {services.map((service, index) => (
            <Sentences
              key={index}
              translationId={translationsCounter}
              sentences={translation.sentences[service.key]}
              word={word}
              handleClick={handleSentenceClick}
              serviceName={service.name}
              serviceUrl={service.url}
            />
          ))}
        </div>
      );
    })}
  </div>
);

export default Translations;
