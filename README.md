# Yochimu 予知夢

## Japanese Text Parser

https://yochimu.now.sh

[Yochimu](https://yochimu.now.sh) means prophetic dream in Japanese. The purpose of this tool is to let you read comfortably any kind of text, by reviewing and learning its vocabulary using an in-context approach with sentences using an SRS solutions like Anki.

What Yochimu does is, given a file with text in Japanese, it returns a list of words from that text along with their definitions, translations and example sentences, to let you create decks.

The plan would be to build our own SRS in the near future.

# Installation guide

Requirements are `Node.js` and `npm` installed. I'm using `yarn` for managing dependencies but you can use whatever system you want. Some technical knowledge is required as well.

1. `pnpm i`.
2. `pnpm dev`.
3. http://localhost:3000

# How to manually get text parsed

`TEXT="私はペンです。" node index.js` from the server folder. Right now, the system expectes input to be provided through environment variables, but the plan is to also add a RESTful API layer.

# How to test

You can run tests with `npm test`.

# Instant translations

By appending a `search` query string param, it's possible to trigger instant translations. E.g.: `https://yochimu.now.sh/?search=神様が大好き`.

# Technologies

This parser is built using `Node.js` with `Express` for the backend, and the frontend with `Next.js` and `React`. Everything is tested using with `Jest`.

`cheerio` is used to scrape content from non-JSON sources inside the parser.

# Hard Dependencies

This parser is using [Kuromoji](https://github.com/takuyaa/kuromoji.js) library to tokenise Japanese text.

# Notes

Given this is a work in progress, as of version 0.1.0, we haven't decided yet which dictionary and translator to use.

頑張ってください！
