const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const textParser = require('./server/modules/text-parser');
const DEFAULT_PORT = 3000;

const isProductionEnvironment = environment => environment === 'prod';
const getPort = port => port || DEFAULT_PORT;

const dev = isProductionEnvironment(process.env.NODE_ENV) === false;
const PORT = getPort(process.env.PORT);
const JSON_HEADER = ['Content-Type', 'application/json'];

const app = next({dev});
const handle = app.getRequestHandler();

const handleTranslationRoute = (req, res) => {
  const text = req.body && req.body.text;

  res.setHeader(...JSON_HEADER);

  textParser.parse(text, definitions => {
    res.send(JSON.stringify(definitions));
  });
};

app.prepare()
  .then(() => {
    const server = express();
    const port = getPort();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.post('/translate', handleTranslationRoute);

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
