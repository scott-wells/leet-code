/**
 * @param {number[]} nums
 * @return {number}
 * 
 * There is a function signFunc(x) that returns:
 * 1 if x is positive.
 * -1 if x is negative.
 * 0 if x is equal to 0.
 * 
 * You are given an integer array nums. Let product be the product of all values in the array nums.
 * 
 * Return signFunc(product).
 */
var arraySign = function(nums) {
    
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            console.log(0);
            return 0;
            
        } 
        if (nums[i] < 0) {
            count += 1;
        }
    }

    if (count % 2 === 1) {
        console.log(-1);
        return -1;
    } else {
        console.log(1);
        return 1;
    }
};

arraySign([-1,-2,-3,-4,3,2,1]);
arraySign([1,5,0,2,-3]);
arraySign([-1,1,-1,1,-1]);