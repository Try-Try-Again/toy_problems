const findMedianSortedArrays = require('./findMedianSortedArrays');

describe('findMedianSortedArrays', () => {
  it('finds median of two arrays of differing length', () => {
    const nums1 = [1, 3];
    const nums2 = [2];

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(2.0);
  });

  it('finds median of two arrays of same length', () => {
    const nums1 = [1, 3];
    const nums2 = [2, 4];

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(2.5);
  });

  it('can handle if on array is empty', () => {
    const nums1 = [];
    const nums2 = [2, 4];

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(3.0);
  });

  it('can handle negative numbers', () => {
    const nums1 = [3];
    const nums2 = [-2, -1];

    const result = findMedianSortedArrays(nums1, nums2);

    expect(result).toEqual(-1.00000);
  });

});
