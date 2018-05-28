const textParser = require('./modules/text-parser');

const TEXT = process.env.TEXT || '';

textParser.parse(TEXT);