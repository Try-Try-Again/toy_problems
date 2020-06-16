const removeElement = require('./removeElement');

describe('removeElement', () => {
  it('returns 2 when array length is reduced to 2', () => {
    const nums = [3,2,2,3], val = 3;

    result = removeElement(nums, val);

    expect(result).toEqual(2);
  });

  it('strips second input from existing array', () => {
    const nums = [3,2,2,3], val = 3;

    removeElement(nums, val);

    expect(nums).toEqual([2, 2]);
  });

  it('works for different arrays and different target values', () => {
    const nums = [0,1,2,2,3,0,4,2], val = 2;

    removeElement(nums, val);

    expect(nums).toEqual([0,1,3,0,4]);
  });

  it('returns 5 when modified input is length of 5', () => {
    const nums = [0,1,2,2,3,0,4,2], val = 2;

    const result = removeElement(nums, val);

    expect(result).toEqual(5);

  });
});
