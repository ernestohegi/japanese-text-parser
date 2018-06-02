const assert = require('assert');
const expect = require('expect');

describe('Tokenizer Helper', () => {
    const tokenizer = require('./tokenizer');
    const SAMPLE_TEXT = "私はペンです。";

    it('should be initiated', done => {
        tokenizer.init((error, helper) => {
            expect(error).toBe(null);
            expect(typeof helper).toBe('object');
            done();
        });
    });

    it('should tokenize text', done => {
        tokenizer.init((error, helper) => {
            const tokens = helper.tokenize(SAMPLE_TEXT);

            expect(tokens.length).toEqual(5);
            done();
        });
    });

    it('should return only allowed items', done => {
        tokenizer.init((error, helper) => {
            const tokens = helper.tokenize(SAMPLE_TEXT);
            const allowedElements = tokenizer.getAllowedTokens(tokens);

            expect(allowedElements.length).toEqual(2);
            done();
        });
    });

    it('should return the right token element', done => {
        tokenizer.init((error, helper) => {
            const tokens = helper.tokenize(SAMPLE_TEXT);
            const allowedElements = tokenizer.getAllowedTokens(tokens);

            allowedElements.map(allowedElement => {
                expect(tokenizer.getWordFromToken(allowedElement)).toEqual(allowedElement.surface_form);
            });

            done();
        });
    });
});
