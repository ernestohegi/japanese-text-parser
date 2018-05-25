const kuromoji = require('kuromoji');

const DICTIONARY_PATH = './node_modules/kuromoji/dict/'

const ALLOWED_IDENTIFIERS = [
    '名詞', // Substantive
    '形容詞', // Adjective
    '動詞' // Verb
];

const getWordFromToken = token => token.surface_form;
const getTokenType = token => token.pos;

module.exports = {
    init(callback) {
        kuromoji
            .builder({ dicPath: DICTIONARY_PATH })
            .build((error, tokenizer) => callback(error, tokenizer))
        ;
    },
    getAllowedTokens(tokens) {
        return tokens.filter(token => ALLOWED_IDENTIFIERS.includes(getTokenType(token)))
    },
    getWordFromToken
};