const tokenizer = require('./helpers/tokenizer');
const dictionaryService = require ('./helpers/services/jisho');
const sentencesService = require ('./helpers/services/weblio');

const TEXT = process.env.TEXT || '';

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

tokenizer.init((error, helper) => {
    if (error) throw error;

    console.log('Parsing provided text...');

    getDefinitions(
        getAllowedTokens(TEXT, helper),
        definitions,
        printDefinitions
    );
});