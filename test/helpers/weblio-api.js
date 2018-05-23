const assert = require('assert');
const expect = require('expect');

describe('Weblio Api Helper', () => {
    const helper = require('../../helpers/weblio-api');

    it('should be initiated', () => expect(typeof helper).toBe('object'));

    it('should retrieve data from a given url', done => {
        const ITEM = '輝き';

        helper.getSentencesForItem(ITEM).then(data => {
          expect(data).toBeDefined();
          done();
        });
    });
});