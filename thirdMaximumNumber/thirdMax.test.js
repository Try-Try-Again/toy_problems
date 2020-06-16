const thirdMax = require('./thirdMax');

describe('thirdMax', () => {
  it('returns 1 when 1 is the third greatest value in an input 3 elements long', () => {
    const nums = [3, 2, 1];

    const result = thirdMax(nums);

    expect(result).toEqual(1);
  });

  it('returns the max value if input length is less than 3', () => {
    const nums = [1, 2];

    const result = thirdMax(nums);

    expect(result).toEqual(2);
  });

  it('only counts each unique value once when scoring', () => {
    const nums = [2, 2, 3, 1];

    const result = thirdMax(nums);

    expect(result).toEqual(1);
  });

  it('returns the greatest value of an input 3 elements long', () => {
    const nums = [1,1,2];

    const result = thirdMax(nums);

    expect(result).toEqual(2);
  });

  it('handles an input longer that 3 with duplicate values', () => {
    const nums = [1,2,2,5,3,5];

    const result = thirdMax(nums);

    expect(result).toEqual(2);
  });
});
