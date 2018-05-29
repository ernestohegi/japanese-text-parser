import React from 'react';
import Layout from './components/Layout';
import Translations from './components/Translations';
import { postJsonData } from './helpers/http';

const TRANSLATE_URL = 'http://localhost:3000/translate';

class Index extends React.Component  {
  constructor(props) {
    super(props);

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
    const text = this.state.form.text;

    this.translateText(text);
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
        <h1> よちむ </h1>

        <input type="text" onChange={this.handleTextChange.bind(this)}></input>
        <button onClick={this.handleTranslationButtonClick.bind(this)}>Translate</button>

        {<Translations translations={this.state.translation} />}
      </Layout>
    );
  }
}

export default Index;
