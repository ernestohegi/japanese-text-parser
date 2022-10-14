const kuromoji = require("kuromoji");

const ALLOWED_IDENTIFIERS = [
  "名詞", // Substantive
  "形容詞", // Adjective
  "動詞" // Verb
];

const getWordFromToken = token => token.surface_form;
const getTokenType = token => token.pos;

module.exports = {
  init(dictionaryPath, callback) {
    kuromoji
      .builder({ dicPath: dictionaryPath })
      .build((error, tokenizer) => callback(error, tokenizer));
  },
  getAllowedTokens(tokens) {
    return tokens.filter(token =>
      ALLOWED_IDENTIFIERS.includes(getTokenType(token))
    );
  },
  getWordFromToken
};
