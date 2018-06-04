const textHelper = {
  getJapanese: element => element.japanese,
  getEnglish: element => (
    Array.isArray(element.english) ?
      element.english.join(', ') :
      element.english
  ),
  getCleanJapaneseSentence: sentence => (
    textHelper.getJapanese(sentence).replace('例文帳に追加', '')
  )
};

export default textHelper;
