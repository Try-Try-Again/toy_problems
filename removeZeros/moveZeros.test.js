const moveZeros = require('./moveZeros');

describe('moveZeros', () => {
  it('does nothing to an input that has no 0s', () => {
    const nums = [1,3,12];

    const result = moveZeros(nums);

    expect(result).toEqual([1,3,12]);
  });

  it ('moves a single zero to end of nums', () => {
    const nums = [1,0,3,12];

    const result = moveZeros(nums);

    expect(result).toEqual([1,3,12,0]);
  });

  it('returns modified array' , () => {
    const nums = [0,1,0,3,12];

    const result = moveZeros(nums);

    expect(result).toEqual([1,3,12,0,0]);
  });

  it('modifies input array', () => {
    const nums = [0,1,0,3,12];

    moveZeros(nums);

    expect(nums).toEqual([1,3,12,0,0]);
  });

  it('works with an 3 lenth array with 2 zeros in first 2 elements', () => {
    const nums = [0,0,1];

    moveZeros(nums);

    expect(nums).toEqual([1,0,0]);

  });
});
