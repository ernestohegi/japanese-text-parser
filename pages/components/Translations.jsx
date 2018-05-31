import React from 'react';
import TranslationElement from './TranslationElement';

class Translations extends React.Component {
  render() {
    return (
      <div className="translations">
        {
          this.props.translations.map(translation => (
            <TranslationElement translation={translation} />
          ))
        }
      </div>
    )
  }
}

export default Translations;
