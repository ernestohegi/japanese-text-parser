import React, { useEffect } from "react";
import ReactGA from "react-ga";
import CookieConsent, { Cookies } from "react-cookie-consent";
import listHelper from "../helpers/list-helper";
import Layout from "../components/sections/Layout";
import { Analytics } from "@vercel/analytics/react"

const SENTENCES_LIST_KEY = "sentence";

const handleAcceptCookie = () => {
  ReactGA.initialize("UA-126811205-1");
};

const handleDeclineCookie = () => {
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");
};

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    listHelper.createUserList(SENTENCES_LIST_KEY);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />

      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Analytics />
    </Layout>
  );
};

export default MyApp;
