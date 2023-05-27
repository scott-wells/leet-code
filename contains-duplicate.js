/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Given an integer array nums, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

var containsDuplicate = function(nums) {
    
    const duplicateNums = new Map();

    for (let i = 0; i < nums.length; ++i) {

        if (!duplicateNums.has(nums[i])) {
            duplicateNums.set(nums[i], i);
            continue;
        }

        if (duplicateNums.has(nums[i])) return true;
    }
    return false;
};