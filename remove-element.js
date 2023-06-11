/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0;
    let size = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[size] = nums[i];
            size++;
        }
    }
    console.log(size);
    return size;
};

removeElement([3,2,2,3], 3);