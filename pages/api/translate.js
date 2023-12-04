import path from "path";

import * as textParser from "../../server/helpers/text-parser";

export default function handler(req, res) {
  const { text } = req.body;

  const DICTIONARY_PATH = path.join(process.cwd(), "assets/dict");

  const endCallback = (definitions) => {
    res.send(JSON.stringify(definitions));
  };

  textParser.parse(text, endCallback, DICTIONARY_PATH);
}
