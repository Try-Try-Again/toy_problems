const decodeVariations = require('./decodeVariations');

describe('decodeVariations', () => {
  it('finds 3 unique combos in a given number-string', () => {
    const numStr = '1262';

    const result = decodeVariations(numStr);

    expect(result).toEqual(3);
  });

  it('finds 6 unique combos in a given number-string', () => {
    const numStr = '12625';

    const result = decodeVariations(numStr);

    expect(result).toEqual(6);
  });

  it('finds 0 when number-string is invalid', () => {
    const numStr = '1270';

    const result = decodeVariations(numStr);

    expect(result).toEqual(0);
  });


});
