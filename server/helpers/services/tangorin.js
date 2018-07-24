const cheerio = require("cheerio");
const api = require("../api");

const API_URL = "http://tangorin.com/examples/";

const SELECTOR = {
  sentencesWrapper: "#dictEntries",
  mainSentence: ".entry",
  japaneseSentence: ".ex-dt",
  englishSentence: ".ex-dd"
};

const formatEnglishSentence = englishSentence => {
  let formattedEnglishSentence = englishSentence.split(/(?:\?|\.|\!)/)[0];

  return formattedEnglishSentence;
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
      // Gets just english translations.
      japanese: $sentence.find(SELECTOR.japaneseSentence).text(),
      english: formatEnglishSentence(
        $sentence.find(SELECTOR.englishSentence).text()
      )
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