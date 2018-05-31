import TextHelper from '../helpers/text-helper';

const SentencesElement = props => (
  props.sentences.map((sentence, index) => (
    <div className="sentence" key={index}>
      <span key={`${index}-japanese`} className="sentence__japanese">
        { TextHelper.getJapanese(sentence).replace('例文帳に追加', '') }
      </span>

      <span key={`${index}-english`} className="sentence__english">
        「{ TextHelper.getEnglish(sentence).split('-')[0] }」
      </span>
    </div>
  ))
);

export default SentencesElement;
