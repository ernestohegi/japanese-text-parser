import React from 'react';
import TranslationElement from './TranslationElement';

let translationsCounter = 0;

class Translations extends React.Component {
  render() {
    return (
      <div className="translations">{
        this.props.translations.map((translation, index) => {
          ++translationsCounter;
          return (
            <TranslationElement
              translation={translation}
              id={translationsCounter}
              key={index}
            />
          )
        })
      }</div>
    )
  }
}

export default Translations;
