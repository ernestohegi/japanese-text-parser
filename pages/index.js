import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import Head from 'next/head'
import Translations from '../components/Translations'
import { postJsonData } from '../helpers/http-helper'
import parameters from '../config/parameters'
import fileHelper from '../helpers/file-helper'
import uniqid from 'uniqid'

const styles = {
  input: {
    width: '100%',
    minWidth: 0,
    fontSize: '2rem',
    padding: '1rem',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.05)',
    flexGrow: 1,
  },
  button: {
    fontSize: '1.25rem',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    fontWeight: '500',
    backgroundColor: '#d64545',
    color: 'white',
    border: 'none',
    borderRadius: '2px',
    transition: 'background-color 0.3s ease',
    whiteSpace: 'nowrap',
  },
  inputWrapper: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    position: 'relative', // Added for floating buttons positioning
  },
  buttonStyle: {
    fontSize: '1rem',
    padding: '0.75rem 1.25rem',
    margin: '0.25rem',
    cursor: 'pointer',
    backgroundColor: '#d64545',
    color: 'white',
    border: 'none',
    borderRadius: '2px',
    transition: 'background-color 0.3s ease',
    flexGrow: 0,
    whiteSpace: 'nowrap',
  },
  articleContainer: {
    backgroundColor: 'white',
    borderRadius: '2px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  japaneseHeading: {
    fontFamily: "'Zen Maru Gothic', sans-serif",
    fontWeight: '500',
    borderBottom: '3px solid #d64545',
    display: 'inline-block',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  floatingContainer: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    zIndex: 100,
    '@media (maxWidth: 768px)': {
      bottom: '1.5rem',
      right: '1.5rem',
    },
  },
  floatingButton: {
    width: '68px',
    height: '68px',
    borderRadius: '50%',
    backgroundColor: '#d64545',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    border: 'none',
    transition:
      'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'visible',
    '@media (maxWidth: 768px)': {
      width: '60px',
      height: '60px',
    },
  },
  floatingButtonLabel: {
    position: 'absolute',
    right: '60px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    opacity: 0,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    pointerEvents: 'none',
    transform: 'translateX(10px)',
    fontFamily: "'Noto Sans JP', sans-serif",
    fontWeight: '500',
    '@media (maxWidth: 768px)': {
      fontSize: '0.8rem',
      padding: '0.4rem 0.8rem',
    },
  },
  selectionCount: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    border: '2px solid white',
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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>
      <article style={styles.articleContainer}>
        <h1 style={styles.japaneseHeading}>Japanese Text Parser</h1>
        <p className="japanese-text">
          日本語の語彙を効率的かつコンテキストで学ぶためのツールです。
        </p>
        <p>
          Enter a Japanese word or phrase below to get definitions and example
          sentences. Click on sentences to save them, then export to create Anki
          flashcards.
        </p>
      </article>
      <article style={styles.articleContainer}>
        <h3 style={{ ...styles.japaneseHeading, fontSize: '1.5rem' }}>
          Enter a word or phrase in Japanese to begin your search
        </h3>

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
      <article style={styles.articleContainer}>
        <h3 style={styles.japaneseHeading}>Search Results</h3>

        {isLoading && <p className="japanese-text">少々お待ち下さい...</p>}

        {translation.length > 0 && (
          <Translations
            translations={translation}
            handleSentenceClick={handleSentenceClick}
          />
        )}

        {/* Hide this article if there's no content */}
        {translation.length === 0 && !isLoading && userList.length === 0 && (
          <article style={styles.articleContainer}>
            <p className="japanese-text">検索結果がここに表示されます。</p>
            <p>Your search results will appear here.</p>
          </article>
        )}
      </article>

      {/* Floating Action Buttons */}
      {userList.length > 0 && (
        <div
          style={styles.floatingContainer}
          className="floating-buttons-container"
        >
          <button
            onClick={() => downloadList(userList)}
            style={styles.floatingButton}
            className="floating-button export-button"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('div').style.opacity = '1'
              e.currentTarget.querySelector('div').style.transform =
                'translateX(0)'
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.backgroundColor = '#c13535'
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('div').style.opacity = '0'
              e.currentTarget.querySelector('div').style.transform =
                'translateX(10px)'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.backgroundColor = '#d64545'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
            title="Export selected sentences to TSV for Anki"
          >
            <div
              style={styles.floatingButtonLabel}
              className="floating-button-label"
            >
              Export to TSV
            </div>
            <div style={styles.selectionCount}>{userList.length}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
          <button
            onClick={() => {
              setUserList([])
              setTranslation([])
            }}
            style={styles.floatingButton}
            className="floating-button restart-button"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('div').style.opacity = '1'
              e.currentTarget.querySelector('div').style.transform =
                'translateX(0)'
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.backgroundColor = '#c13535'
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('div').style.opacity = '0'
              e.currentTarget.querySelector('div').style.transform =
                'translateX(10px)'
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.backgroundColor = '#d64545'
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
            title="Clear all selections and start over"
          >
            <div
              style={styles.floatingButtonLabel}
              className="floating-button-label"
            >
              Restart
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v6h6"></path>
              <path d="M3 13a9 9 0 1 0 3-7.7L3 8"></path>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

Index.getInitialProps = async ({ query }) => {
  return {
    query,
  }
}

export default Index
