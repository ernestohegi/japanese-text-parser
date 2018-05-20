const tokenizer = require('./helpers/tokenizer');

const JAPANESE_TEXT = '有名な観光スポットのほか、活気あふれる街や商店街を散策したり、名物のお好み焼きや牡蠣を食べたりすることで、日常的な場面でも広島ならではの文化を五感で味わってみるのも楽しいです。';

tokenizer.init((error, helper) => {
    if (error) throw error;

    const allowedTokens = tokenizer.getAllowedTokens(helper.tokenize(JAPANESE_TEXT));

    allowedTokens.map(token => {
        console.log(tokenizer.getTokenElement(token))
    })
});