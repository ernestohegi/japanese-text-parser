import { expect } from '@jest/globals'

import * as helper from './tangorin'

describe.skip('Tangorin Api Helper', () => {
  it('should retrieve sentences for the given item', async () => {
    const ITEM = '輝き'
    const sentences = await helper.getSentencesForItem(ITEM)

    for (const sentence of sentences) {
      expect(sentence.japanese).toBeDefined()
      expect(sentence.english).toBeDefined()
    }
  })

  it('should retrieve an empty object for an unknown item', async () => {
    const ITEM = '輝きiiii'
    const sentences = await helper.getSentencesForItem(ITEM)

    for (const sentence of sentences) {
      expect(sentence[0].japanese).toEqual({})
      expect(sentence[0].english).toEqual({})
    }
  })
})
