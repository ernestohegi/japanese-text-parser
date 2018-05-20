const tokenizer = require('./helpers/tokenizer');

const TEXT = process.env.TEXT || '';

tokenizer.init((error, helper) => {
    if (error) throw error;

    const allowedTokens = tokenizer.getAllowedTokens(helper.tokenize(TEXT));

    allowedTokens.map(token => {
        console.log(tokenizer.getTokenElement(token))
    })
});