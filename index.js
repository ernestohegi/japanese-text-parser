const tokenizer = require('./helpers/tokenizer');
const jisho = require ('./helpers/jisho-api');

const TEXT = process.env.TEXT || '';

tokenizer.init((error, helper) => {
    if (error) throw error;

    const tokens = helper.tokenize(TEXT);
    const allowedTokens = tokenizer.getAllowedTokens(tokens);

    allowedTokens.map(token => {
        console.log(tokenizer.getTokenElement(token));

        console.log(
            JSON.stringify(
                jisho.getDefinition(tokenizer.getTokenElement(token))
            )
        );
    })
});