const api = require("../helpers/api");

const API_URL = "https://jisho.org/api/v1/search/words?keyword=";

const getDefinitions = item => api.callUrl(`${API_URL}${item}`);

module.exports = {
  async getCommonDefinitions(item) {
    const definitions = await getDefinitions(item);
    let commonDefinitions = [];

    if (definitions.data.length > 0) {
      commonDefinitions = definitions.data.filter(
        definition => definition.is_common
      );

      if (commonDefinitions.length <= 0) {
        commonDefinitions = [definitions.data.shift()];
      }
    }

    return commonDefinitions;
  },
  generateObject(definition) {
    return {
      japanese: definition.japanese,
      english: definition.senses[0].english_definitions
    };
  }
};
