const cheerio = require("cheerio");
const api = require("../api");

const API_URL = "https://ejje.weblio.jp/sentence/content/";

const SELECTOR = {
  sentencesWrapper: ".kiji",
  mainSentence: ".qotC",
  japaneseSentence: ".qotCJJ",
  englishSentence: ".qotCJE"
};

/**
 * @param {string} html
 * @return Array
 */
const getSentencesFromHtml = html => {
  const $ = cheerio.load(html);
  const $sentences = $(SELECTOR.sentencesWrapper).find(SELECTOR.mainSentence);
  const sentences = [];

  $sentences.map((index, sentence) => {
    const $sentence = $(sentence);

    sentences.push({
      japanese: $sentence.find(SELECTOR.japaneseSentence).text(),
      english: $sentence.find(SELECTOR.englishSentence).text()
    });
  });

  return sentences;
};

module.exports = {
  /**
   * Retrieves sentences from Weblio.
   * Returns a promise object with an array of sentences.
   *
   * @param {string} url
   * @return Promise<Array>
   */
  getSentencesForItem(item) {
    return api.callUrl(`${API_URL}${item}`).then(getSentencesFromHtml);
  }
};
