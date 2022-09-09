const tokenizer = require("./tokenizer");
const timeTracker = require("./time-tracker");
const dictionaryService = require("../services/jisho");
const tangorinService = require("../services/tangorin");
const weblioService = require("../services/weblio");

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

  timeTracker.init();

  const token = allowedTokens.shift();
  const word = tokenizer.getWordFromToken(token);

  timeTracker.track("Time to retreive token for word");

  const tangorinSentences = await getSentencesForWordFromTangorin(word);
  // const weblioSentences = await getSentencesForWordFromWeblio(word);

  timeTracker.track("Time to retreive sentences in miliseconds");

  const commonDefinitions = await getCommonDefinitionsForWord(word);

  timeTracker.track("Time to retreive definitions in miliseconds");

  definitions.push({
    word,
    definitions: commonDefinitions,
    sentences: {
      tangorin: tangorinSentences
      // weblio: weblioSentences
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

const getSentencesForWordFromTangorin = async word => {
  const sentences = await tangorinService.getSentencesForItem(word);
  return sentences;
};

const getSentencesForWordFromWeblio = async word => {
  const sentences = await weblioService.getSentencesForItem(word);
  return sentences;
};

const getCommonDefinitionsForWord = async word => {
  const commonDefinitions = await dictionaryService.getCommonDefinitions(word);
  return commonDefinitions.map(dictionaryService.generateObject);
};

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
