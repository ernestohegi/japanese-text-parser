const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const textParser = require('./server/modules/text-parser');
const tsvCreator = require('./server/helpers/tsv-creator');

const JSON_HEADER = ['Content-Type', 'application/json'];

const app = next({ dev: process.env.NODE_ENV !== false});
const handle = app.getRequestHandler();

const handleTranslationRoute = (req, res) => {
  const text = req.body && req.body.text;

  res.setHeader(...JSON_HEADER);

  textParser.parse(text, definitions => {
    res.send(JSON.stringify(definitions));
  });
};

const handlePostListRoute = (req, res) => {
  const list = req.body && req.body.list;
  res.setHeader(...JSON_HEADER);
  res.send(JSON.stringify(tsvCreator.convertArrayIntoTSV(list)));
};

app.prepare()
  .then(() => {
    const server = express();
    const port = process.env.PORT || 3000;

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.post('/translate', handleTranslationRoute);
    server.post('/list', handlePostListRoute);
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, error => {
      if (error) throw error;
      console.log(`> Ready on http://localhost:${port}`);
    })
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  })
;
