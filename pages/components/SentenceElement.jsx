import textHelper from '../helpers/text-helper';

const sentenceStyle = {
  marginBottom: '5px'
};

const SentenceElement = (props) => {
  const sentence = props.sentence;
  const index = props.id;

  const japaneseSentence = textHelper.getJapanese(sentence)
    .replace('例文帳に追加', '')
    .replace(props.word, `<span class="highlight">${props.word}</span>`)
  ;

  return (
    <div
      className="sentence"
      key={index}
      style={sentenceStyle}
      onClick={props.handleClick}
    >
      <span
        key={`${index}-japanese`}
        className="sentence__japanese"
        dangerouslySetInnerHTML={{__html: japaneseSentence}}
      ></span>

      <span key={`${index}-english`} className="sentence__english">
        「{ textHelper.getEnglish(sentence).split('-')[0] }」
      </span>
    </div>
  );
};

export default SentenceElement;
