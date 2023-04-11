function twoSum(nums: number[], target: number): number[] {
  const map = {};
  if (nums.length == 2) {
    return [0, 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (
      map[nums[i]]?.value != null &&
      map[nums[i]]?.value + nums[i] == target
    ) {
      console.log(i, map[nums[i]].i);
      return [i, map[nums[i]].i];
    }
    map[nums[i]] = { i, value: nums[i] };
    const search = target - nums[i];
    map[search] = map[nums[i]];
  }
}

twoSum([0, 4, 3, 0], 0);
