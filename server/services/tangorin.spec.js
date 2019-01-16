const expect = require("expect");

describe("Tangorin Api Helper", () => {
  const helper = require("./tangorin");

  it("should be initiated", () => expect(typeof helper).toBe("object"));

  it("should retrieve sentences for the given item", done => {
    const ITEM = "輝き";
    const sentences = helper.getSentencesForItem(ITEM);

    sentences.then(sentence => {
      expect(sentence).toBeDefined();
      expect(sentence.length).toBeGreaterThan(0);

      sentence.map(sentenceParts => {
        expect(sentenceParts.japanese).toBeDefined();
        expect(sentenceParts.english).toBeDefined();
      });

      done();
    });
  });

  it("should retrieve an empty object for an unknown item", done => {
    const ITEM = "輝きiiii";
    const sentences = helper.getSentencesForItem(ITEM);

    sentences.then(sentence => {
      expect(sentence[0].japanese).toEqual({});
      expect(sentence[0].english).toEqual({});
      done();
    });
  });
});
