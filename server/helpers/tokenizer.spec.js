import expect from 'expect'
import * as tokenizer from './tokenizer'

const DICTIONARY_PATH = './node_modules/kuromoji/dict/'

describe('Tokenizer Helper', () => {
  const SAMPLE_TEXT = '私はペンです。'

  it('should be initiated', (done) => {
    tokenizer.init(DICTIONARY_PATH, (error, helper) => {
      expect(error).toBe(null)
      expect(typeof helper).toBe('object')
      done()
    })
  })

  it('should tokenize text', (done) => {
    tokenizer.init(DICTIONARY_PATH, (error, helper) => {
      const tokens = helper.tokenize(SAMPLE_TEXT)

      expect(tokens.length).toEqual(5)
      done()
    })
  })

  it('should return only allowed items', (done) => {
    tokenizer.init(DICTIONARY_PATH, (error, helper) => {
      const tokens = helper.tokenize(SAMPLE_TEXT)
      const allowedElements = tokenizer.getAllowedTokens(tokens)

      expect(allowedElements.length).toEqual(2)
      done()
    })
  })

  it('should return the right token element', (done) => {
    tokenizer.init(DICTIONARY_PATH, (error, helper) => {
      const tokens = helper.tokenize(SAMPLE_TEXT)
      const allowedElements = tokenizer.getAllowedTokens(tokens)

      allowedElements.map((allowedElement) => {
        expect(tokenizer.getWordFromToken(allowedElement)).toEqual(
          allowedElement.surface_form
        )
      })

      done()
    })
  })
})
