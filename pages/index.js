import React from "react";
import ReactGA from "react-ga";
import Layout from "../components/sections/Layout";
import Loader from "../components/sections/Loader";
import SmallTitle from "../components/sections/SmallTitle";
import Translations from "../components/Translations";
import { postJsonData } from "../helpers/http-helper";
import parameters from "../config/parameters";
import copy from "../config/copy";

const styles = {
  input: {
    width: "100%",
    fontSize: "4rem"
  },
  button: {
    fontSize: "2 rem"
  }
};

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
  static async getInitialProps({ query }) {
    return {
      query
    };
  }

  componentDidMount() {
    ReactGA.pageview("/index");

    this.translateInstantly(this.props);
  }

  translateInstantly(props) {
    const { search } = props.query;

    if (search) {
      this.changeText(search);
      this.translate(search);
    }
  }

  async translateText(text) {
    const translation = await postJsonData(parameters.TRANSLATE_URL, { text });
    this.hideLoader();
    this.stopTranslationProcess();
    this.setState({ translation });
  }

  translate(text) {
    this.showLoader();
    this.resetTranslations();
    this.startTranslationsProcess();
    this.translateText(text);
  }

  changeText(text) {
    this.setState({
      form: {
        text
      }
    });
  }

  handleTranslationButtonClick() {
    if (this.state.form.text === "") return false;

    this.translate(this.state.form.text);
  }

  handleTextChange(event) {
    this.changeText(event.target.value);
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
        <p> Enter a word or phrase in Japanese to begin your search </p>

        <input
          type="text"
          onChange={this.handleTextChange}
          defaultValue={this.state.form.text}
          autoFocus
          style={styles.input}
        />

        <button
          onClick={this.handleTranslationButtonClick}
          disabled={this.state.translating}
          style={styles.button}
        >
          {copy.BUTTON_COPY}
        </button>

        <SmallTitle copy={this.state.form.text} />
        <Loader status={this.state.showLoader} />
        <Translations translations={this.state.translation} />
      </Layout>
    );
  }
}

export default Index;
