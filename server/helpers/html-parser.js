const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let selectors = {
  sentencesWrapper: "",
  mainSentence: "",
  japaneseSentence: "",
  englishSentence: ""
};

let formatters = {};

const isFunction = callback =>
  Object.toString.call(callback) === "[object Function]";

module.exports = {
  initialize: data => {
    selectors = data.selectors;
    formatters = data.formatters;
  },
  getSentencesFromHtml: html => {
    const { document } = new JSDOM(html).window;
    const sentences = document.querySelectorAll(selectors.mainSentence);

    return Array.prototype.slice.call(sentences).map(sentence => {
      let japaneseSentence = sentence.querySelector(selectors.japaneseSentence)
        .textContent;
      let englishSentence = sentence.querySelector(selectors.englishSentence)
        .textContent;

      if (formatters) {
        if (
          formatters.japaneseSentence &&
          isFunction(formatters.japaneseSentence)
        ) {
          japaneseSentence = formatters.englishSentence(japaneseSentence);
        }

        if (
          formatters.englishSentence &&
          isFunction(formatters.englishSentence)
        ) {
          englishSentence = formatters.englishSentence(englishSentence);
        }
      }

      return {
        japanese: japaneseSentence,
        english: englishSentence
      };
    });
  }
};
