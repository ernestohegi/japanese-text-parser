const api = require("../helpers/api");
const htmlParser = require("../helpers/html-parser");

const API_URL = "https://ejje.weblio.jp/sentence/content/";

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
        mainSentence: ".qotC",
        japaneseSentence: ".qotCJJ",
        englishSentence: ".qotCJE"
      }
    });

    return api
      .callUrl(`${API_URL}${item}`)
      .then(htmlParser.getSentencesFromHtml);
  }
};
