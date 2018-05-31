import DefinitionsElement from './DefinitionsElement';
import SentencesElement from './SentencesElement';

const translationStyle = {
  display: 'block',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #DDD'
};

const TranslationElement = (props) => {
  const word = props.translation.word;

  return <div className="translation" style={ translationStyle }>
    <h2 key={`${word}`}>{ word }</h2>

    <div key="definitions" className="definitions">
      <h3> Definitions <a href="https://www.jisho.org" target="_blank"> Jisho </a></h3>
      <DefinitionsElement definitions={props.translation.definitions} />
    </div>

    <div key="sentences" className="sentences">
      <h3> Sentences <a href="https://ejje.weblio.jp" target="_blank"> Weblio </a></h3>
      <SentencesElement sentences={props.translation.sentences} word={word}/>
    </div>
  </div>
};

export default TranslationElement;
