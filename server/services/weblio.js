import { callUrl } from '../helpers/api'
import * as htmlParser from '../helpers/html-parser'

const API_URL = 'https://ejje.weblio.jp/sentence/content/'

/**
 * Retrieves sentences from Weblio.
 * Returns a promise object with an array of sentences.
 *
 * @param {string} url
 * @return Promise<Array>
 */
const getSentencesForItem = (item) => {
  htmlParser.initialize({
    selectors: {
      mainSentence: '.qotC',
      japaneseSentence: '.qotCJJ',
      englishSentence: '.qotCJE',
    },
  })

  return callUrl(`${API_URL}${item}`).then(htmlParser.getSentencesFromHtml)
}

export { getSentencesForItem }
