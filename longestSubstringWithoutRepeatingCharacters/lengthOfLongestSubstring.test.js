const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
  it('returns 3 when the longest substring is 3', () => {
    const string = "abcabcbb";

    const result =lengthOfLongestSubstring(string);

    expect(result).toEqual(3);
  });

  it('returns 1 when every character is the same', () => {
    const string = "bbbbb";

    const result =lengthOfLongestSubstring(string);

    expect(result).toEqual(1);
  });

  it('finds the longest substring whe its the first 3 characters', () => {
    const string = "abcabcbb"

    const result =lengthOfLongestSubstring(string);

    expect(result).toEqual(3);
  });
});
