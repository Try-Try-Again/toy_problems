const merge = require('./merge');

describe('merge', () => {
  it('returns undefined', () => {
    const  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

    const result = merge(nums1, m, nums2, n);

    expect(result).toEqual(undefined);
  });
  it('modifies nums1 to be sorted array of the first 3 elements of two different arrays', () => {
    const  nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1,2,2,3,5,6]);
  });

  it('behaves differently based on specified slice lengths for first and second arrays', () => {
    const nums1 = [1,2,3,0,0,0], m = 1, nums2 = [2,7,9], n = 2;

    merge(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 7]);
  });
});
