const tokenizer = require("./tokenizer");
const dictionaryService = require("../services/jisho");
const tangorinService = require("../services/tangorin");
const weblioService = require("../services/weblio");
const moment = require("moment");

/**
 * @type {array}
 */
let definitions;

/**
 *
 * @param {array} allowedTokens List of words.
 * @param {array} definitions Place to store the retrieved definitions and sentences.
 * @param {function} endCallback Function to be excecuted when no more tokens available.
 */
const getDefinitions = async (allowedTokens, definitions, endCallback) => {
  if (allowedTokens.length === 0) {
    return endCallback(definitions);
  }

  const token = allowedTokens.shift();
  let START_DATE = moment();
  const word = tokenizer.getWordFromToken(token);
  console.log("Speed test");
  console.log("Token for word", moment().diff(START_DATE, "miliseconds"));
  START_DATE = moment();
  const tangorinSentences = await getSentencesForWordFromTangorin(word);
  const weblioSentences = await getSentencesForWordFromWeblio(word);
  console.log(
    "Sentences in miliseconds",
    moment().diff(START_DATE, "miliseconds")
  );
  START_DATE = moment();
  const commonDefinitions = await getCommonDefinitionsForWord(word);
  console.log(
    "Definitions in miliseconds",
    moment().diff(START_DATE, "miliseconds")
  );

  definitions.push({
    word,
    definitions: commonDefinitions,
    sentences: {
      tangorin: tangorinSentences,
      weblio: weblioSentences
    }
  });

  getDefinitions(allowedTokens, definitions, endCallback);
};

/**
 * Converts text into tokens and retrieves only allowed values.
 * @param {string} text
 * @param {function} helper
 * @return array
 */
const getAllowedTokens = (text, helper) =>
  tokenizer.getAllowedTokens(helper.tokenize(text));

const getSentencesForWordFromTangorin = word =>
  tangorinService.getSentencesForItem(word).then(sentences => sentences);

const getSentencesForWordFromWeblio = word =>
  weblioService.getSentencesForItem(word).then(sentences => sentences);

const getCommonDefinitionsForWord = word =>
  dictionaryService
    .getCommonDefinitions(word)
    .then(commonDefinitions =>
      commonDefinitions.map(dictionaryService.generateObject)
    );

module.exports = {
  /**
   * Receives the text to be translated and returns a set of definitions
   * and sentences.
   *
   * @param {string} text
   * @param {function} endCallback
   * @return array
   */
  parse(text, endCallback, dictionaryPath) {
    tokenizer.init(dictionaryPath, (error, helper) => {
      if (error) {
        return endCallback({ error: "500 - Server issue", message: error });
      }

      console.log(`Parsing provided ${text}...`);

      definitions = [];

      getDefinitions(getAllowedTokens(text, helper), definitions, endCallback);
    });
  }
};
