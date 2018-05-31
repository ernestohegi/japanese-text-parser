import React from 'react';
import Layout from './components/Layout';
import Translations from './components/Translations';
import { postJsonData } from './helpers/http-helper';

const TRANSLATE_URL = 'http://localhost:3000/translate';

class Index extends React.Component  {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTranslationButtonClick = this.handleTranslationButtonClick.bind(this)

    this.state = {
      translation: [],
      form: {
        text: ''
      }
    };
  }

  async translateText(text) {
    const translation = await postJsonData(TRANSLATE_URL, { text });

    this.setState({ translation });
  }

  handleTranslationButtonClick() {
    this.translateText(this.state.form.text);
  }

  handleTextChange(event) {
    this.setState({
      form: {
        text: event.target.value
      }
    });
  }

  render() {
    return (
      <Layout>
        <input type="text" onChange={ this.handleTextChange }></input>
        <button onClick={ this.handleTranslationButtonClick }>Translate</button>

        <Translations translations={ this.state.translation } />
      </Layout>
    );
  }
}

export default Index;
