import { callUrl } from "../helpers/api";

const API_URL = "http://beta.jisho.org/api/v1/search/words?keyword=";

const getDefinitions = (item) => callUrl(`${API_URL}${item}`);

const getCommonDefinitions = async (item) => {
  const definitions = await getDefinitions(item);

  let commonDefinitions = [];

  if (definitions.data?.length > 0) {
    commonDefinitions = definitions.data.filter(
      (definition) => definition.is_common,
    );

    if (commonDefinitions.length <= 0) {
      commonDefinitions = [definitions.data.shift()];
    }
  }

  return commonDefinitions;
};

const generateObject = (definition) => ({
  japanese: definition.japanese,
  english: definition.senses[0].english_definitions,
});

export { getCommonDefinitions, generateObject };
