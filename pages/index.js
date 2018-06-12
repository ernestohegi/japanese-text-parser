import React from "react";
import Layout from "./components/sections/Layout";
import Loader from "./components/sections/Loader";
import SmallTitle from "./components/sections/SmallTitle";
import TranslationsElement from "./components/TranslationsElement";
import { postJsonData } from "./helpers/http-helper";

const TRANSLATE_URL = "http://localhost:3000/translate";
const BUTTON_COPY = "Translate";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTranslationButtonClick = this.handleTranslationButtonClick.bind(
      this
    );

    this.state = {
      translating: false,
      showLoader: false,
      translation: [],
      form: {
        text: ""
      }
    };
  }

  /**
   * Method rendered only server-side.
   * @param {object}
   */
  static async getInitialProps({ pathname, req }) {
    console.log("We are on the server");

    return {
      pathname
    };
  }

  async translateText(text) {
    const translation = await postJsonData(TRANSLATE_URL, { text });
    this.hideLoader();
    this.stopTranslationProcess();
    this.setState({ translation });
  }

  handleTranslationButtonClick() {
    if (this.state.form.text === "") return false;

    this.showLoader();
    this.resetTranslations();
    this.startTranslationsProcess();
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

  startTranslationsProcess() {
    this.setState({
      translating: true
    });
  }

  stopTranslationProcess() {
    this.setState({
      translating: false
    });
  }

  render() {
    return (
      <Layout>
        <input
          type="text"
          onChange={this.handleTextChange}
          defaultValue={this.state.form.text}
        />

        <button
          onClick={this.handleTranslationButtonClick}
          disabled={this.state.translating}
        >
          {BUTTON_COPY}
        </button>

        <SmallTitle copy={this.state.form.text} />
        <Loader status={this.state.showLoader} />
        <TranslationsElement translations={this.state.translation} />
      </Layout>
    );
  }
}

export default Index;
