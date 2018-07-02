const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const textParser = require("./server/modules/text-parser");
const compression = require("compression");

const JSON_HEADER = ["Content-Type", "application/json"];
const DICTIONARY_PATH = "./node_modules/kuromoji/dict/";

const app = next({ dev: process.env.NODE_ENV !== false });
const handle = app.getRequestHandler();

const handleTranslationRoute = (req, res) => {
  const text = req.body && req.body.text;

  const endCallback = definitions => {
    res.send(JSON.stringify(definitions));
  };

  res.setHeader(...JSON_HEADER);

  textParser.parse(text, endCallback, DICTIONARY_PATH);
};

const handleAllRoutes = (req, res) => handle(req, res);

app
  .prepare()
  .then(() => {
    const server = express();
    const port = process.env.PORT || 3000;

    server.use(compression());

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.post("/translate", handleTranslationRoute);
    server.get("*", handleAllRoutes);

    server.listen(port, error => {
      if (error) throw error;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
