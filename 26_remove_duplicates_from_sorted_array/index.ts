function removeDuplicates(nums: (number | string)[]): number {
    let k = 0;
    let shift = 0;
    if (nums.length === 1) {
        return 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            shift++;
            nums[i] = '_';
        } else {
            if (shift) {
                nums[i - shift] = nums[i];
                nums[i] = '_';
            }
            k++;
        }
    }

    return k;
}
