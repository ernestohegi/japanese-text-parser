import React from "react";
import ReactGA from "react-ga";
import App from "next/app";
import listHelper from "../helpers/list-helper";

const SENTENCES_LIST_KEY = "sentence";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-126811205-1");
    listHelper.createUserList(SENTENCES_LIST_KEY);
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
