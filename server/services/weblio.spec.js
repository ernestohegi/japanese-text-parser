import expect from 'expect'
import * as helper from './weblio'

describe('Weblio Api Helper', () => {
  it('should be initiated', () => expect(typeof helper).toBe('object'))

  it.only('should retrieve sentences for the given item', async () => {
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
      expect(sentence.length).toBe(0)
    }
  })
})
