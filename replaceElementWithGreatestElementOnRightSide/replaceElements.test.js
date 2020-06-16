const replaceElements = require('./replaceElements');

describe('replaceElements', () => {
  it ('replaces elements with greatest element on right side and replaces last element with -1', () => {
    const nums = [17,18,5,4,6,1];

    const result = replaceElements(nums);

    expect(result).toEqual([18,6,6,6,1,-1]);
  });
});
