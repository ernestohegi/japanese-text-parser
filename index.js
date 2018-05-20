const tokenizer = require('./helpers/tokenizer');

const TEXT = process.env.TEXT || '';

tokenizer.init((error, helper) => {
    if (error) throw error;

    const tokens = helper.tokenize(TEXT);
    const allowedTokens = tokenizer.getAllowedTokens(tokens);

    allowedTokens.map(token => {
        console.log(tokenizer.getTokenElement(token))
    })
});