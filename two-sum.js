/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
    const numMap = new Map();
    const indicesThatSumToTarget = [];

    for (let i = 0; i < nums.length; ++i) {

        const complement = target - nums[i];

        if (!numMap.has(complement)) {
            numMap.set(nums[i], i);
            continue;
        }

        indicesThatSumToTarget.push(i, numMap.get(complement));
        break;
    }

    return indicesThatSumToTarget;
};