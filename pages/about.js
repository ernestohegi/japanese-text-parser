import React from "react";
import ReactGA from "react-ga";
import Layout from "../components/sections/Layout";

class About extends React.Component {
  componentDidMount() {
    ReactGA.pageview("/about");
  }

  render() {
    return (
      <Layout>
        <h2> 予知夢について </h2>

        <p> 初めまして、よろしくお願いします。</p>

        <p>
          Yochimu means prophetic dream in Japanese. The purpose of this tool is
          to let you read comfortably any kind of text by learning and reviewing
          its vocabulary using sentences in an in-context approach with an SRS
          solution like Anki.
        </p>

        <p>
          {" "}
          What Yochimu does is, given an input in Japanese, it returns a list of
          words from that text along with their definitions, translations and
          example sentences, to let you create decks.
        </p>

        <p>
          <a
            href="https://github.com/ernestohegi/japanese-text-parser"
            target="_blank"
          >
            GitHub Project
          </a>
        </p>
      </Layout>
    );
  }
}

export default About;
