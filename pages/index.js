import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import Loader from "../components/sections/Loader";
import Translations from "../components/Translations";
import { postJsonData } from "../helpers/http-helper";
import parameters from "../config/parameters";

const styles = {
  input: {
    width: "100%",
    fontSize: "4rem"
  },
  button: {
    fontSize: "1rem",
    padding: "0.5rem",
    marginTop: "0.5rem",
    cursor: "pointer"
  }
};

const Index = props => {
  ReactGA.pageview("/index");

  const { search = "" } = props.query || {};

  let text = search;

  const [state, setState] = useState({
    isLoading: false,
    isTranslating: false,
    translation: []
  });

  const translate = async (term = "") => {
    if (!term) return false;

    setState({
      isLoading: true,
      isTranslating: true,
      translation: []
    });

    const translation = await postJsonData(parameters.TRANSLATE_URL, {
      text: term
    });

    setState({
      isLoading: false,
      isTranslating: false,
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
    <>
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
        disabled={state.isTranslating}
        style={styles.button}
      >
        Translate
      </button>

      <Loader status={state.isLoading} />

      <Translations translations={state.translation} />
    </>
  );
};

Index.getInitialProps = async ({ query }) => {
  return {
    query
  };
};

export default Index;
