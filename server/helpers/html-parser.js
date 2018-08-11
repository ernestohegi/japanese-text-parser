const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let formatters = {};

let selectors = {
  mainSentence: "",
  japaneseSentence: "",
  englishSentence: ""
};

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
        if (formatters.japaneseSentence) {
          japaneseSentence = formatters.japaneseSentence(japaneseSentence);
        }

        if (formatters.englishSentence) {
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
