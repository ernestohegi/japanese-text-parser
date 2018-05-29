const textParser = require('./modules/text-parser');

const TEXT = process.env.TEXT || '';

const endCallback = definitions => {
    console.log(
        JSON.stringify(
            [definitions]
        )
    );

    console.log('Finished parsing provided text...');
};

textParser.parse(TEXT, endCallback);