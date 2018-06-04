import React from 'react';
import FileSaver from 'file-saver';
import uniqid from 'uniqid';
import SentenceElement from './SentenceElement';
import containerStyle from '../styles/container-style';
import { postJsonData } from '../helpers/http-helper';
import textHelper from '../helpers/text-helper';

const SAVE_LIST_URL = 'http://localhost:3000/list';

const renderListElements = listElements => {
  return listElements.map((listElement, index) => {
    return <SentenceElement id={index} key={index} sentence={listElement} />;
  });
};

class ListElement extends React.Component {
  async handleSaveListButtonClick() {
    const list = this.props.list.map(item => textHelper.getCleanJapaneseSentence(item));
    const tsvContent = await postJsonData(SAVE_LIST_URL, { list });
    const blob = new Blob([tsvContent], {type: "text/plain;charset=utf-8"});

    FileSaver.saveAs(blob, `yochimu-${uniqid()}-deck.tsv`);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleSaveListButtonClick.bind(this)}> Save list </button>
        <ul className="my-list" style={containerStyle}>
          { renderListElements(this.props.list) }
        </ul>
      </React.Fragment>
    );
  }
}

export default ListElement;
