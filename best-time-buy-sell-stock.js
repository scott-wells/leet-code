/**
 * @param {number[]} prices
 * @return {number}
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */
var maxProfit = function (prices) {
    
    let maxProfit = 0;
    let lPointer = 0;
    let rPointer = 1;
    
    while (rPointer < prices.length) {
        
        if (prices[lPointer] < prices[rPointer]) {
            let profit = prices[rPointer] - prices[lPointer];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            lPointer = rPointer;
        }
        rPointer += 1;
    }

    console.log(maxProfit);
    return maxProfit;
};

maxProfit([7, 4, 5, 6, 7, 4, 3]); // 3
maxProfit([7,1,5,3,6,4]); // 5
maxProfit([7,6,4,3,1]); // 0
maxProfit([1,2,3,4,5,6]); // 5