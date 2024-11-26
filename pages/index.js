import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import Translations from '../components/Translations'
import { postJsonData } from '../helpers/http-helper'
import parameters from '../config/parameters'
import fileHelper from '../helpers/file-helper'
import uniqid from 'uniqid'

const styles = {
  input: {
    width: '100%',
    fontSize: '3rem',
    padding: '1rem',
    backgroundColor: '#666',
    border: 'none',
  },
  button: {
    fontSize: '1.5rem',
    padding: '0.5rem',
    cursor: 'pointer',
    fontWeight: '700',
  },
  inputWrapper: {
    display: 'flex',
    gap: '1rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  buttonStyle: {
    fontSize: '1rem',
    padding: '0.5rem',
    marginTop: '0.5rem',
    marginRight: '0.5rem',
    cursor: 'pointer',
  },
}

const downloadList = (userList) => {
  let tsvContent = ''

  for (const { japanese, english } of userList) {
    tsvContent += `${japanese}\t${english}\n`
  }

  fileHelper.saveFile(
    `yochimu-${uniqid()}-deck.tsv`,
    tsvContent,
    'text/plain;charset=utf-8'
  )
}

const Index = ({ query }) => {
  ReactGA.pageview('/index')

  const { search = '' } = query || {}

  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState(search)
  const [translation, setTranslation] = useState([])
  const [userList, setUserList] = useState([])

  const handleSentenceClick = (sentence, isClicked) => {
    if (isClicked) {
      setUserList((userList) => [...userList, sentence])
    } else {
      setUserList((userList) =>
        userList.filter((userSentence) => userSentence !== sentence)
      )
    }
  }

  const translate = async (term = '') => {
    if (!term) return false

    setIsLoading(true)
    setTranslation([])

    const response = await postJsonData(parameters.TRANSLATE_URL, {
      text: term,
    })

    setTranslation(response)
    setIsLoading(false)
  }

  useEffect(() => {
    translate(search)
  }, [search])

  return (
    <section style={styles.container}>
      <article style={styles.container}>
        <h2> 予知夢について </h2>
        <p> 初めまして、よろしくお願いします。</p>
        <p>
          <b>Yochimu</b> means "prophetic dream" in Japanese. This tool is
          designed to help you read any type of text comfortably by learning and
          reviewing its vocabulary through an in-context approach, supported by
          an SRS (Spaced Repetition System) solution like Anki.
        </p>
        <p>
          With Yochimu, you can input Japanese text, and the tool will generate
          a list of words from the text, complete with their definitions,
          translations, and example sentences, making it easy to create
          customized study decks.
        </p>
        <a
          href="https://github.com/ernestohegi/japanese-text-parser"
          target="_blank"
        >
          GitHub Project
        </a>
      </article>
      <article style={styles.container}>
        <h3> Enter a word or phrase in Japanese to begin your search </h3>

        <div style={styles.inputWrapper}>
          <input
            type="text"
            onChange={(event) => setSearchText(event.target.value)}
            autoFocus
            style={styles.input}
            placeholder="予知夢"
          />

          <button
            onClick={() => {
              if (!searchText) return false
              translate(searchText)
            }}
            disabled={isLoading}
            style={styles.button}
          >
            Search
          </button>
        </div>
      </article>
      <article style={styles.container}>
        {isLoading && <p>少々お待ち下さい...</p>}

        {userList.length > 0 && (
          <article style={{ ...styles.container, flexDirection: 'row' }}>
            <button
              onClick={() => downloadList(userList)}
              style={styles.buttonStyle}
            >
              Export to tsv
            </button>
            <button
              onClick={() => {
                setUserList([])
                setTranslation([])
              }}
              style={styles.buttonStyle}
            >
              Restart
            </button>
          </article>
        )}

        {
          <Translations
            translations={translation}
            handleSentenceClick={handleSentenceClick}
          />
        }
      </article>
    </section>
  )
}

Index.getInitialProps = async ({ query }) => {
  return {
    query,
  }
}

export default Index
