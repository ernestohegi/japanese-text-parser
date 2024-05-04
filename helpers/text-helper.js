const textHelper = {
  getJapanese: (element) => element.japanese,
  getEnglish: (element) =>
    Array.isArray(element.english)
      ? element.english.join(', ')
      : element.english,
  getCleanJapaneseSentence: (sentence) => {
    let japaneseSentence = ''

    if (textHelper && typeof textHelper.getJapanese === 'function') {
      japaneseSentence = textHelper.getJapanese(sentence)

      if (typeof japaneseSentence === 'string') {
        japaneseSentence = japaneseSentence.replace('例文帳に追加', '')
      }
    }

    return japaneseSentence
  },
  getCleanEnglishSentence: (sentence) =>
    textHelper.getEnglish(sentence).split('-')[0],
  cleanSentences: (sentence) => {
    const newSentence = sentence
    newSentence.japanese = textHelper.getCleanJapaneseSentence(newSentence)
    newSentence.english = textHelper.getCleanEnglishSentence(newSentence)
    return newSentence
  },
  highlightWord: (word, sentence) => {
    let newSentence = sentence

    if (typeof newSentence === 'string') {
      newSentence = newSentence.replace(word, `<b>${word}</b>`)
    }

    return newSentence
  },
}

export default textHelper
