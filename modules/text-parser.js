const ROOT = '..';

const tokenizer = require(ROOT + '/helpers/tokenizer');
const dictionaryService = require (ROOT + '/helpers/services/jisho');
const sentencesService = require (ROOT + '/helpers/services/weblio');

const definitions = {};

const getDefinitions = async (allowedTokens, definitions, endCallback) => {
    if (allowedTokens.length === 0) {
        return endCallback(definitions);
    };

    const token = allowedTokens.shift();
    const word = tokenizer.getWordFromToken(token);
    const sentences = await getSentencesForWord(word);
    const commonDefinitions = await getCommonDefinitionsForWord(word);

    definitions[word] = {
        definitions: commonDefinitions,
        sentences
    };

    getDefinitions(
        allowedTokens,
        definitions,
        endCallback
    );
};

/**
 * Converts text into tokens and retrieves only allowed values.
 * @param {string} text
 * @param {function} helper
 * @return array
 */
const getAllowedTokens = (text, helper) => {
    return tokenizer.getAllowedTokens(
        helper.tokenize(text)
    );
};

const getSentencesForWord = word => {
    return sentencesService.getSentencesForItem(word).then(sentences => sentences);
};

const getCommonDefinitionsForWord = word => {
    return dictionaryService.getCommonDefinitions(word).then(commonDefinitions => {
        return {
            definitions: commonDefinitions.map(dictionaryService.generateObject)
        }
    });
};

module.exports = {
    parse(text, endCallback) {
        tokenizer.init((error, helper) => {
            if (error) throw error;

            console.log('Parsing provided text...');

            getDefinitions(
                getAllowedTokens(text, helper),
                definitions,
                endCallback
            );
        });
    }
};