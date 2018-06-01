import SentenceElement from './SentenceElement';
import listHelper from '../helpers/list-helper';

const handleSentenceClick = (event, sentence) => {
  const userList = listHelper.getUserList();
  const updatedList = listHelper.addItemToList(sentence, userList);
  listHelper.saveList(updatedList);
};

const SentencesElement = props => {
  return props.sentences.map((sentence, index) => {
    return (
      <SentenceElement
        id={index}
        key={index}
        sentence={sentence}
        word={props.word}
        handleClick={event => handleSentenceClick(event, sentence)}
      />
    );
  });
};

export default SentencesElement;
