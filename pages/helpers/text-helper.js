const textHelper = {
  getJapanese: element => element.japanese,
  getEnglish: element => (
    Array.isArray(element.english) ?
      element.english.join(', ') :
      element.english
  ),
  getCleanJapaneseSentence: sentence => (
    textHelper.getJapanese(sentence).replace('例文帳に追加', '')
  ),
  getCleanEnglishSentence: sentence => (
    textHelper.getEnglish(sentence).split('-')[0]
  ),
  cleanSentences: sentence => {
    const newSentence = sentence;
    newSentence.japanese = textHelper.getCleanJapaneseSentence(newSentence);
    newSentence.english = textHelper.getCleanEnglishSentence(newSentence);
    return newSentence;
  }
};

export default textHelper;
