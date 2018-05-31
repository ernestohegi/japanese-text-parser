import DefinitionsElement from './DefinitionsElement';
import SentencesElement from './SentencesElement';

const TranslationElement = (props) => {
  return <div className="translation">
    <h2 key={`${props.translation.word}`}>{ props.translation.word }</h2>

    <div key="definitions" className="definitions">
      <h3> Definitions </h3>
      <DefinitionsElement definitions={props.translation.definitions} />
    </div>

    <div key="sentences" className="sentences">
      <h3> Sentences</h3>
      <SentencesElement sentences={props.translation.sentences} />
    </div>
  </div>
};

export default TranslationElement;
