import textParser from "../../server/helpers/text-parser";

const JSON_HEADER = ["Content-Type", "application/json"];
const DICTIONARY_PATH = "./config/dictionary/";

export default (req, res) => {
  const text = req.body && req.body.text;

  const endCallback = definitions => {
    res.send(JSON.stringify(definitions));
  };

  res.setHeader(...JSON_HEADER);

  textParser.parse(text, endCallback, DICTIONARY_PATH);
};
