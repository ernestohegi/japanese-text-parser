describe('TSV Creator Helper', () => {
    const helper = require('./tsv-creator-helper');

    it('should be initiated', () => expect(typeof helper).toBe('object'));

    it('should convert an array into tsv', () => {
      const list = [
        {
          japanese: 'japanese',
          english: 'english'
        },
        {
          japanese: 'japanese2',
          english: 'english2'
        }
      ];

      const tsv = helper.convertArrayIntoTSV(list);

      expect(tsv).toBeDefined();
      expect(tsv.indexOf('\t')).toBeGreaterThan(0);
      expect(tsv.indexOf('\n')).toBeGreaterThan(0);
      expect(tsv.indexOf(list[0].japanese)).toBeGreaterThan(-1);
      expect(tsv.indexOf(list[0].english)).toBeGreaterThan(-1);
      expect(tsv.indexOf(list[1].japanese)).toBeGreaterThan(-1);
      expect(tsv.indexOf(list[1].english)).toBeGreaterThan(-1);
    });
});
