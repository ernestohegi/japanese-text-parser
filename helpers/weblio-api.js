const api = require('./api');

const API_URL = 'https://ejje.weblio.jp/sentece/content/';

module.exports = {
  /**
   *
   * @param string url
   * @return Promise
   */
  getSentencesForItem(item) {
    return api.callUrl(`${API_URL}${item}`);
  }
}