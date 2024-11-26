const getJapanese = (element) =>
  Object.values(element.japanese).length > 0 ? element.japanese : ''

const getEnglish = (element) =>
  Array.isArray(element.english) ? element.english.join(', ') : element.english

const getCleanJapaneseSentence = (sentence) => {
  let japaneseSentence = getJapanese(sentence)

  if (typeof japaneseSentence === 'string') {
    japaneseSentence = japaneseSentence.replace('例文帳に追加', '')
  }

  return japaneseSentence
}

const getCleanEnglishSentence = (sentence) =>
  textHelper.getEnglish(sentence).split('-')[0]

const cleanSentences = (sentence) => {
  const newSentence = structuredClone(sentence);

  newSentence.japanese = getCleanJapaneseSentence(newSentence)
  newSentence.english = getCleanEnglishSentence(newSentence)

  return newSentence
}

const textHelper = {
  getJapanese,
  getEnglish,
  getCleanJapaneseSentence,
  getCleanEnglishSentence,
  cleanSentences,
}

export default textHelper
