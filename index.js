const tokenizer = require('./helpers/tokenizer');
const dictionary = require ('./helpers/jisho');

const TEXT = process.env.TEXT || '';

const definitions = [];

const getAllowedTokens = (text, helper) => {
    const tokens = helper.tokenize(text);
    const allowedTokens = tokenizer.getAllowedTokens(tokens);
    return allowedTokens;
};

const printDefinitions = definitions => console.log(JSON.stringify(definitions));

const getDefinitions = (allowedTokens, definitions, endCallback) => {
    if (allowedTokens.length === 0) {
        return endCallback(definitions);
    };

    const token = allowedTokens.shift();
    const wordFromToken = tokenizer.getWordFromToken(token);

    dictionary.getCommonDefinitions(wordFromToken).then(commonDefinitions => {
        definitions.push(
            commonDefinitions.map(dictionary.generateObject)
        );

        getDefinitions(allowedTokens, definitions, endCallback);
    });
}

tokenizer.init((error, helper) => {
    if (error) throw error;

    getDefinitions(
        getAllowedTokens(TEXT, helper),
        definitions,
        printDefinitions
    );
});