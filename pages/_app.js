import React from "react";
import ReactGA from "react-ga";
import App from "next/app";
import CookieConsent, { Cookies } from "react-cookie-consent";
import listHelper from "../helpers/list-helper";

const SENTENCES_LIST_KEY = "sentence";

const handleAcceptCookie = () => {
  ReactGA.initialize("UA-126811205-1");
};

const handleDeclineCookie = () => {
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");
};

export default class MyApp extends App {
  constructor(props) {
    super(props);

    listHelper.createUserList(SENTENCES_LIST_KEY);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />

        <CookieConsent
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </>
    );
  }
}
