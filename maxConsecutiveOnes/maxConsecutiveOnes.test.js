const maxConsecutiveOnes = require('./maxConsecutiveOnes');

describe('maxConsecutiveOnes', () => {
  it('finds longest streak when in the middle of array', () => {
    const arrayToTest = [0, 1, 0, 0, 1, 1, 0, 1];

    const result = maxConsecutiveOnes(arrayToTest);

    expect(result).toEqual(2);
  });

  it('finds longest streak when at the start of array', () => {
    const arrayToTest = [1, 1, 1, 0, 1, 1, 0, 1]

    const result = maxConsecutiveOnes(arrayToTest);

    expect(result).toEqual(3);
  });

  it('finds longest streak when at the end of array', () => {
    const arrayToTest = [1, 1, 1, 0, 1, 1, 1, 1];

    const result = maxConsecutiveOnes(arrayToTest);

    expect(result).toEqual(4);
  });
});
