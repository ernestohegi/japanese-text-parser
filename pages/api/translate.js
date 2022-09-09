const textParser = require("../../server/helpers/text-parser");

const DICTIONARY_PATH = "./assets/dict/";

export default function handler(req, res) {
  const { text } = req.body;

  const endCallback = definitions => {
    res.send(JSON.stringify(definitions));
  };

  textParser.parse(text, endCallback, DICTIONARY_PATH);
}
