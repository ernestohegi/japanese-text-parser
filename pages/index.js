import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga'
import Translations from '../components/Translations'
import { postJsonData } from '../helpers/http-helper'
import parameters from '../config/parameters'

const styles = {
  input: {
    width: '100%',
    fontSize: '4rem',
  },
  button: {
    fontSize: '1rem',
    padding: '0.5rem',
    marginTop: '0.5rem',
    cursor: 'pointer',
  },
}

let translation = []
let searchInput = ''

const Index = (props) => {
  ReactGA.pageview('/index')

  const { search = '' } = props.query || {}

  const [isLoading, setIsLoading] = useState(false)

  let text = search

  const translate = async (term = '') => {
    if (!term) return false

    setIsLoading(true)

    translation = await postJsonData(parameters.TRANSLATE_URL, {
      text: term,
    })

    searchInput = term

    setIsLoading(false)
  }

  const handleTranslationButtonClick = () => {
    if (!text) return false

    translate(text)
  }

  useEffect(() => {
    translate(search)
  }, [])

  return (
    <>
      <p> Enter a word or phrase in Japanese to begin your search </p>

      <input
        type="text"
        onChange={(event) => (text = event.target.value)}
        defaultValue={searchInput}
        autoFocus
        style={styles.input}
      />

      <button
        onClick={handleTranslationButtonClick}
        disabled={isLoading}
        style={styles.button}
      >
        Translate
      </button>

      {isLoading && <p className="loader">少々お待ち下さい...</p>}

      <Translations translations={translation} />
    </>
  )
}

Index.getInitialProps = async ({ query }) => {
  return {
    query,
  }
}

export default Index
