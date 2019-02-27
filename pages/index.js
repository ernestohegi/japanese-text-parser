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

  let initialDataFetched = false;

  const { search } = props.query || {};

  const [translating, setTranslating] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [translation, setTranslation] = useState([]);
  const [form, setFormText] = useState({ text: search });

  const stopTranslationProcess = () => {
    setState({
      translating: false
    });
  };

  const changeText = text => {
    setState({
      form: {
        text
      }
    });
  };

  const translateText = async text => {
    const translation = await postJsonData(parameters.TRANSLATE_URL, { text });
    setShowLoader(false);
    setTranslating(false);
    setTranslation(translation);
  };

  const translate = text => {
    setShowLoader(true);
    setTranslation([]);
    setTranslating(true);
    translateText(text);
  };

  const handleTranslationButtonClick = () => translate(form.text);

  const handleTextChange = event =>
    setFormText({ form: { text: event.target.value } });

  return (
    <Layout>
      <p> Enter a word or phrase in Japanese to begin your search </p>

      <input
        type="text"
        onChange={handleTextChange}
        defaultValue={form.text}
        autoFocus
        style={styles.input}
      />

      <button
        onClick={handleTranslationButtonClick}
        disabled={translating}
        style={styles.button}
      >
        {copy.BUTTON_COPY}
      </button>

      <SmallTitle copy={form.text} />
      <Loader status={showLoader} />
      <Translations translations={translation} />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  return {
    query
  };
};

export default Index;
