const textHelper = {
  getJapanese: element => element.japanese,
  getEnglish: element => (
    Array.isArray(element.english) ?
      element.english.join(', ') :
      element.english
  )
};

export default textHelper;
