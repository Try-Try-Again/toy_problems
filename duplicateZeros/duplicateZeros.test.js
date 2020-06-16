const duplicateZeros = require('./duplicateZeros');

describe('duplicateZeros', () => {
  it('should return undefined', () => {
    const input = [1,0,2,3,0,4,5,0];

    const result = duplicateZeros(input);

    expect(result).toEqual(undefined);
  });

  it('input with no 0s to remain unchanged', () => {
    const input = [1,2,3];

    duplicateZeros(input);

    expect(JSON.stringify(input)).toEqual(JSON.stringify([1,2,3]));
  });

  it('transforms array to contain duplicate zeros retaining og length', () => {
    const input = [1,0,2,3,0,4,5,0];

    duplicateZeros(input);

    expect(JSON.stringify(input)).toEqual(JSON.stringify([1,0,0,2,3,0,0,4]));
  });
});
