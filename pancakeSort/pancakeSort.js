
const flip = (arr, count) => {
  arr
    .slice(0, count)
    .reverse()
    .forEach((element, index) => {
      arr[index] = element;
    });
}

const pancakeSort = (nums) => {
  let notInOrder = true;
  while (notInOrder) {
    let flipWasNotCalled = true;
    for (let i = 1; i < nums.length; i += 1) {
      if (nums[i] < nums[i - 1]) {
        if (i === 1) {
          flip(nums, 2);
        } else {
          flip(nums, i + 1);
          flip(nums, 2);
          flip(nums, i + 1);
        }
        flipWasNotCalled = false;
      }
    }
    if (flipWasNotCalled) {
      notInOrder = false;
    }
  }
  return nums;
}

module.exports = { pancakeSort, flip };
