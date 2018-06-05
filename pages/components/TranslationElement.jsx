import DefinitionsElement from './DefinitionsElement';
import SentencesElement from './SentencesElement';
import containerStyle from '../styles/container-style';

const TranslationElement = (props) => {
  const word = props.translation.word;

  return <div className="translation" style={containerStyle}>
    <h2 key={`${word}`}>{ word }</h2>

    <div key="definitions" className="definitions">
      <h3> Definitions <a href="https://www.jisho.org" target="_blank"> Jisho </a></h3>
      <DefinitionsElement definitions={props.translation.definitions} />
    </div>

    <div key="sentences" className="sentences">
      <h3> Sentences <a href="https://ejje.weblio.jp" target="_blank"> Weblio </a></h3>
      <SentencesElement sentences={props.translation.sentences} word={word} />
    </div>
  </div>
};

export default TranslationElement;
