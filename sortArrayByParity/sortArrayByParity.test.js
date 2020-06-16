const sortArrayByParity = require('./sortArrayByParity');

describe('sortArrayByParity', () => {
  it('returns an array with even numbers ahead of odd numbers', () => {
    const nums = [3,1,2,4];

    const result = sortArrayByParity(nums);

    expect(result).toEqual([2,4,3,1]);
  });

  it('handles at least two different arrays', () => {
    const nums = [3,2,6,1,2,4];

    const result = sortArrayByParity(nums);

    expect(result).toEqual([2,6,2,4,3,1]);

  });
});
