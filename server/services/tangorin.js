const api = require("../helpers/api");
const htmlParser = require("../helpers/html-parser");

const API_URL = "http://tangorin.com/examples/";

const formatEnglishSentence = englishSentence =>
  englishSentence.split(/(?:\?|\.|\!)/)[0];

const formatJapaneseSentence = japaneseSentence =>
  japanese.replace(/\(.*\)/, "");

htmlParser.initialize({
  selectors: {
    sentencesWrapper: "#dictEntries",
    mainSentence: ".entry",
    japaneseSentence: ".ex-dt",
    englishSentence: ".ex-dd"
  },
  formatters: {
    japaneseSentence: formatJapaneseSentence,
    englishSentence: formatEnglishSentence
  }
});

module.exports = {
  /**
   * Retrieves sentences from Weblio.
   * Returns a promise object with an array of sentences.
   *
   * @param {string} url
   * @return Promise<Array>
   */
  getSentencesForItem(item) {
    return api
      .callUrl(`${API_URL}${item}`)
      .then(htmlParser.getSentencesFromHtml);
  }
};
