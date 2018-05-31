import TextHelper from '../helpers/text-helper';

const sentenceStyle = {
  marginBottom: '5px'
};

const SentencesElement = props => {
  return props.sentences.map((sentence, index) => {
    const japaneseSentence = TextHelper.getJapanese(sentence)
      .replace('例文帳に追加', '')
      .replace(props.word, `<span class="highlight">${props.word}</span>`)
    ;

    return (
      <div className="sentence" key={index} style={sentenceStyle}>
        <span
          key={`${index}-japanese`}
          className="sentence__japanese"
          dangerouslySetInnerHTML={{__html: japaneseSentence}}
        ></span>

        <span key={`${index}-english`} className="sentence__english">
          「{ TextHelper.getEnglish(sentence).split('-')[0] }」
        </span>
      </div>
    );
  });
};

export default SentencesElement;
