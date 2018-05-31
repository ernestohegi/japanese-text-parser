import React from 'react';
import TranslationElement from './TranslationElement';

class Translations extends React.Component {
  render() {
    return (
      <div className="translations">{
        this.props.translations.map((translation, index) => (
          <TranslationElement translation={translation} key={index}/>
        ))
      }</div>
    )
  }
}

export default Translations;
