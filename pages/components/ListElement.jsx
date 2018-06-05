import React from 'react';
import FileSaver from 'file-saver';
import uniqid from 'uniqid';
import SentenceElement from './SentenceElement';
import containerStyle from '../styles/container-style';
import textHelper from '../helpers/text-helper';
import tsvCreatorHelper from '../helpers/tsv-creator-helper';

const restListButtonStyle = {
  marginLeft: '10px'
};

const renderListElements = listElements => {
return listElements.map((listElement, index) => {
    return <SentenceElement id={index} key={index} sentence={listElement} />;
  });
};

class ListElement extends React.Component {
  async handleSaveListButtonClick() {
    const list = this.props.list.map(item => textHelper.cleanSentences(item));
    const tsvContent = tsvCreatorHelper.convertArrayIntoTSV(list);
    const blob = new Blob([tsvContent], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, `yochimu-${uniqid()}-deck.tsv`);
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleSaveListButtonClick.bind(this)}> Save list </button>
        <button onClick={this.props.resetList} style={restListButtonStyle}> Reset list </button>
        <ul className="my-list" style={containerStyle}>
          { renderListElements(this.props.list) }
        </ul>
      </React.Fragment>
    );
  }
}

export default ListElement;
