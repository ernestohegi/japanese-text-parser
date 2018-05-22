const api = require('./api');

const API_URL = 'https://jisho.org/api/v1/search/words?keyword=';

module.exports = {
  getDefinition(item) {
    return api.callUrl(`${API_URL}${item}`)
      .then(data => console.log(data.data))
    ;
  }
};