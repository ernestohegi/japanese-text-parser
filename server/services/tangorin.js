const api = require("../helpers/api");
const htmlParser = require("../helpers/html-parser");

const API_URL = "http://tangorin.com/sentences?search=";

const formatEnglishSentence = englishSentence =>
  englishSentence.split(/(?:\?|\.|\!)/)[0];

const formatJapaneseSentence = japaneseSentence =>
  japaneseSentence.replace(/\(.*?\)/g, "");

module.exports = {
  /**
   * Retrieves sentences from Weblio.
   * Returns a promise object with an array of sentences.
   *
   * @param {string} url
   * @return Promise<Array>
   */
  getSentencesForItem(item) {
    htmlParser.initialize({
      selectors: {
        mainSentence: ".entry",
        japaneseSentence: ".s-jp",
        englishSentence: ".s-en"
      },
      formatters: {
        japaneseSentence: formatJapaneseSentence,
        englishSentence: formatEnglishSentence
      }
    });

    return api
      .callUrl(`${API_URL}${item}`)
      .then(htmlParser.getSentencesFromHtml);
  }
};
