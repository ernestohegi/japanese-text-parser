import React, { useState, useEffect } from "react";
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

const Index = props => {
  ReactGA.pageview("/index");

  const { search } = props.query || "";

  let text = search;

  const [state, setState] = useState({
    showLoader: false,
    showTranslating: false,
    translation: []
  });

  const translate = async text => {
    if (!text) return false;

    setState({
      showLoader: true,
      showTranslating: true,
      translation: []
    });

    const translation = await postJsonData(parameters.TRANSLATE_URL, { text });

    setState({
      showLoader: false,
      showTranslating: false,
      translation
    });
  };

  const handleTranslationButtonClick = () => {
    if (!text) return false;
    translate(text);
  };

  useEffect(() => {
    translate(search);
  }, []);

  return (
    <Layout>
      <p> Enter a word or phrase in Japanese to begin your search </p>

      <input
        type="text"
        onChange={event => (text = event.target.value)}
        defaultValue={text}
        autoFocus
        style={styles.input}
      />

      <button
        onClick={handleTranslationButtonClick}
        disabled={state.translating}
        style={styles.button}
      >
        {copy.BUTTON_COPY}
      </button>

      <SmallTitle copy={text} />
      <Loader status={state.showLoader} />
      <Translations translations={state.translation} />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  return {
    query
  };
};

export default Index;
