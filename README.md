# Yochimu 予知夢
## Japanese Text Parser
### Work In Progress

Yochimu means prophetic dream in Japanese. The purpose of this tool is to let you read comfortably any kind of text, by reviewing before it's vocabulary using SRS solutions like Anki.

What Yochimu does is, given a file with text in Japanese, it returns a list of words from that text along with their definitions, translations and example sentences, to let you create decks.

# Installation guide

Requirements are `Node.js` and `npm` installed. I'm using `yarn` for managing dependencies but you can use whatever system you want. Some technical knowledge is required as well.

1. Clone the repo.
2. Run `yarn install` or `npm install`.

# How to run

```TEXT="私はペンです。" node index.js```. Right now, the system expectes input to be provided through environment variables, but the plan is to also add a RESTful API layer.

# How to test

Tests can be executed using `npm test`.

# Technologies

This parsers is built using `Node.js` and tested with `Mocha`.

`cheerio` is used to scrape content from non-JSON sources.

# Hard Dependencies

This parser is using [Kuromoji](https://github.com/takuyaa/kuromoji.js) library to tokenise Japanese text.

Given this is a work in progress, as of version 0.1.0, I haven't decided yet which dictionary and translator to use.

頑張ってください！
