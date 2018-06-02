const assert = require('assert');
const expect = require('expect');

describe('Api Helper', () => {
    const helper = require('./api');

    const EXAMPLE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

    it('should be initiated', () => expect(typeof helper).toBe('object'));

    it('should retrieve data from a given url', done => {
        helper.callUrl(EXAMPLE_URL).then(data => {
          expect(data).toBeDefined();
          done();
        });
    });
});
