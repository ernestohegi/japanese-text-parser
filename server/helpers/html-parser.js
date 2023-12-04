import jsdom from "jsdom";

const { JSDOM } = jsdom;

let formatters = {
  japaneseSentence: undefined,
  englishSentence: undefined,
};

let selectors = {
  mainSentence: "",
  japaneseSentence: "",
  englishSentence: "",
};

const removeRubyContent = (element) => {
  if (element) {
    Array.prototype.forEach.call(element.querySelectorAll("rt"), (node) =>
      node.remove(),
    );
  }

  return element;
};

const parseSentence = (sentence, selector, formatter) => {
  const retrievedSentence = sentence.querySelector(selector);
  const cleanSentence = removeRubyContent(retrievedSentence);

  let parsedSentence = {};

  if (cleanSentence) {
    parsedSentence = cleanSentence.textContent;

    if (formatter) {
      parsedSentence = formatter(parsedSentence);
    }
  }

  return parsedSentence;
};

const initialize = (data) => {
  selectors = data.selectors;
  formatters = data.formatters || formatters;
};

const getSentencesFromHtml = (html) => {
  const { document } = new JSDOM(html).window;
  const sentences = document.querySelectorAll(selectors.mainSentence);

  return Array.prototype.slice.call(sentences).map((sentence) => ({
    japanese: parseSentence(
      sentence,
      selectors.japaneseSentence,
      formatters.japaneseSentence,
    ),
    english: parseSentence(
      sentence,
      selectors.englishSentence,
      formatters.englishSentence,
    ),
  }));
};

export { initialize, getSentencesFromHtml };
