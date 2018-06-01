import React from 'react';
import SentenceElement from './SentenceElement';
import containerStyle from '../styles/container-style';

const renderListElements = listElements => {
  return listElements.map((listElement, index) => {
    return <SentenceElement id={index} key={index} sentence={listElement} />;
  });
};

class ListElement extends React.Component {
  render() {
    return (
      <ul className="my-list" style={containerStyle}>
        { renderListElements(this.props.list) }
      </ul>
    );
  }
}

export default ListElement;