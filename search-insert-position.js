/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    while (i < nums.length) {
        if (target === nums[i] || nums[i] > target) {
            console.log(i);
            return i;
        }
        i++;
    }
    console.log(i);
    return i;
};
searchInsert([1], 1);
searchInsert([1,3,5,6],5);
searchInsert([1,3,5,6],2);
searchInsert([1,3,5,6],7);