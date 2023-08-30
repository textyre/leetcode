function removeElement(nums: number[], val: number): number {
    // let k = 0;
    // let index = 0;
    // let lastPos = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (!Number.isNaN(nums[i])) {
    //         if (nums[i] === val) {
    //             if (i === nums.length - 1) {
    //                 nums[i] = NaN;
    //                 continue;
    //             }
    //
    //             index = i + 1;
    //             while (nums[index] === val || isNaN(nums[index])) {
    //                 index++;
    //             }
    //             nums[i] = nums[index];
    //             nums[index] = NaN;
    //             lastPos = i + 1;
    //         } else {
    //             if (lastPos) {
    //                 nums[lastPos] = nums[i];
    //                 nums[i] = NaN;
    //                 lastPos++;
    //             }
    //             k++;
    //         }
    //     }
    // }
    //
    // return k;
    let j = 0;
    for (let n of nums) {
        if (n !== val) {
            nums[j++] = n;
        }
    }
    console.log([...nums], j);
    return j;
}

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let arr1 = [3, 2, 2, 3];
removeElement(arr, 2);
