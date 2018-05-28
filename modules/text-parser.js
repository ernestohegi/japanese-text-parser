const ROOT = '..';

const tokenizer = require(ROOT + '/helpers/tokenizer');
const dictionaryService = require (ROOT + '/helpers/services/jisho');
const sentencesService = require (ROOT + '/helpers/services/weblio');

const definitions = {};

const getDefinitions = (allowedTokens, definitions, endCallback) => {
    if (allowedTokens.length === 0) {
        return endCallback(definitions);
    };

    const token = allowedTokens.shift();
    const word = tokenizer.getWordFromToken(token);

    definitions[word] = {
        definitions: [],
        sentences: []
    };

    sentencesService.getSentencesForItem(word)
        .then(sentences => {
            definitions[word].sentences.push(sentences);

            return new Promise(resolve => resolve());
        })
        .then(() => {
            dictionaryService.getCommonDefinitions(word)
                .then(commonDefinitions => {
                    definitions[word].definitions.push(
                        {
                            definitions: commonDefinitions.map(
                                dictionaryService.generateObject
                            )
                        }
                    );

                    getDefinitions(
                        allowedTokens,
                        definitions,
                        endCallback
                    );
                })
        });
}

const getAllowedTokens = (text, helper) => {
    return tokenizer.getAllowedTokens(
        helper.tokenize(text)
    );
};

const printDefinitions = definitions => {
    console.log(
        JSON.stringify(
            [definitions]
        )
    );

    console.log('Finished parsing provided text...');
};

module.exports = {
    parse(text) {
        tokenizer.init((error, helper) => {
            if (error) throw error;

            console.log('Parsing provided text...');

            getDefinitions(
                getAllowedTokens(text, helper),
                definitions,
                printDefinitions
            );
        });
    }
};