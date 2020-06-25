const shiftedArrSearch = require('./shiftedArrSearch');

describe('shiftedArrSearch', () => {
  it('finds target first half of array', () => {
    const nums = [54, 55, 73, 78, 90, 91, 1, 3];

    const target = 73;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(2);
  });

  it('finds target in second half of array', () => {
    const nums = [54, 55, 73, 78, 90, 91, 1, 3];

    const target = 91;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(5);
  });

  it('finds target at the first element', () => {
    const nums = [54, 55, 73, 78, 90, 91, 1];

    const target = 54;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(0);
  });

  it('finds target at last element', () => {
    const nums = [54, 55, 73, 78, 90, 91, 1];

    const target = 1;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(6);
  });

  it('finds target in center of array', () => {
    const nums = [54, 55, 73, 78, 90, 91, 1];

    const target = 78;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(3);
  });

  it('finds element in array with length of 1', () => {
    const nums = [2];

    const target = 2;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(0);
  });

  it('retuns -1 when the value is not in an array', () => {
    const nums = [4,5,6,7,0,1,2];

    const target = 3;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(-1);
  });

  it('finds zero in the midst of an array', () => {
    const nums = [4,5,6,7,0,1,2]

    const target = 0;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(4);
  });

  it('finds value at second to last place in array', () => {
    const nums = [4,5,6,7,0,1,2]

    const target = 1;

    const result = shiftedArrSearch(nums, target);

    expect(result).toEqual(5);
  });


});
