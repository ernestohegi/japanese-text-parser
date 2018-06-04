module.exports = {
  /**
   * Given an objects array containing "japanese" and "english" keys
   * it returns a TSV formatted string.
   *
   * @param Array<object> list
   * @return string
   */
  convertArrayIntoTSV(list) {
    return list.map(item => `${item.japanese}\t${item.english}`).join('\n');
  }
}
