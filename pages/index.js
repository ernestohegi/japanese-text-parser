import React from 'react';
import Layout from './components/Layout';
import Translations from './components/Translations';
import Loader from './components/Loader';
import { postJsonData } from './helpers/http-helper';

const TRANSLATE_URL = 'http://localhost:3000/translate';
const BUTTON_COPY = 'Translate';

const buttonStyle = {
  border: '0',
  background: '#FC6336',
  color: '#FFF'
};

class Index extends React.Component  {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTranslationButtonClick = this.handleTranslationButtonClick.bind(this)

    this.state = {
      translation: [],
      showLoader: false,
      form: {
        text: ''
      }
    };
  }

  async translateText(text) {
    const translation = await postJsonData(TRANSLATE_URL, { text });
    this.hideLoader();
    this.setState({ translation });
  }

  handleTranslationButtonClick() {
    this.showLoader();
    this.resetTranslations();
    this.translateText(this.state.form.text);
  }

  handleTextChange(event) {
    this.setState({
      form: {
        text: event.target.value
      }
    });
  }

  showLoader() {
    this.setState({
      showLoader: true
    });
  }

  hideLoader() {
    this.setState({
      showLoader: false
    });
  }

  resetTranslations() {
    this.setState({
      translation: []
    });
  }

  render() {
    return (
      <Layout>
        <input type="text" onChange={ this.handleTextChange }></input>
        <button onClick={ this.handleTranslationButtonClick } style={buttonStyle}>{BUTTON_COPY}</button>

        <h3>{ this.state.form.text }</h3>
        <Loader status={this.state.showLoader} />
        <Translations translations={ this.state.translation } />
      </Layout>
    );
  }
}

export default Index;
