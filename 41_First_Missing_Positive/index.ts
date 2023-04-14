function firstMissingPositive(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i] - 1;
    if (value === i || nums[value] === nums[i]) continue;
    if (value >= 0 && value <= nums.length - 1) {
      [nums[value], nums[i]] = [nums[i], nums[value]];
      i--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == i + 1) continue;
    else return i + 1;
  }

  return nums.length + 1;
}

const numbers = [3, 4, -1, 1];

console.log(firstMissingPositive(numbers));
