import * as textParser from "./helpers/text-parser";

const TEXT = process.env.TEXT || "";
const DICTIONARY_PATH = "../node_modules/kuromoji/dict/";

const endCallback = (definitions) => {
  console.log(JSON.stringify([definitions]));
  console.log("Finished parsing provided text...");
};

textParser.parse(TEXT, endCallback, DICTIONARY_PATH);
