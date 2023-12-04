import * as tokenizer from "./tokenizer";
import * as timeTracker from "./time-tracker";
import { getCommonDefinitions, generateObject } from "../services/jisho";
import { getSentencesForItem as tangorinGetSentencesForItem } from "../services/tangorin";

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
      tangorin: tangorinSentences,
      // weblio: weblioSentences
    },
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

const getSentencesForWordFromTangorin = async (word) => {
  const sentences = await tangorinGetSentencesForItem(word);
  return sentences;
};

const getCommonDefinitionsForWord = async (word) => {
  const commonDefinitions = await getCommonDefinitions(word);
  return commonDefinitions.map(generateObject);
};

const parse = (text, endCallback, dictionaryPath) => {
  tokenizer.init(dictionaryPath, (error, helper) => {
    if (error) {
      return endCallback({ error: "500 - Server issue", message: error });
    }

    console.log(`Parsing provided ${text}...`);

    definitions = [];

    getDefinitions(getAllowedTokens(text, helper), definitions, endCallback);
  });
};

export { parse };
