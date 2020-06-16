const removeDuplicates = require('./removeDuplicates');

describe('removeDuplicates', () => {
  it('returns 2 when modified nums length is 2', () => {
    const nums = [1,1,2];

    result = removeDuplicates(nums);

    expect(result).toEqual(2);
  });

  it('strips out a single value when its a duplicate', () => {
    const nums = [1,1,2];

    removeDuplicates(nums);

    expect(nums).toEqual([1,2]);
  });

  it('strips out multiple values when there are duplicates', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]

    removeDuplicates(nums);

    expect(nums).toEqual([0,1,2,3,4]);
  });

  it('returns 5 when modified nums length is 5', () => {
    const nums = [0,0,1,1,1,2,2,3,3,4]

    const result = removeDuplicates(nums);

    expect(result).toEqual(5);
  });

});
