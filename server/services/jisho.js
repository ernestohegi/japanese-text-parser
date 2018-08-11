const api = require("../helpers/api");

const API_URL = "https://jisho.org/api/v1/search/words?keyword=";

const getDefinitions = item => api.callUrl(`${API_URL}${item}`);

module.exports = {
  getDefinitions,
  getCommonDefinitions(item) {
    return getDefinitions(item).then(definitions => {
      return definitions.data.filter(definition => definition.is_common);
    });
  },
  generateObject(definition) {
    return {
      japanese: definition.japanese,
      english: definition.senses[0].english_definitions
    };
  }
};
