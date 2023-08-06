/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
    
    const origNum = x;
    let reverseNum = 0;

    while (x > 0) {
        const digit = x % 10;
        reverseNum = reverseNum * 10 + digit;
        x = Math.floor(x / 10);
    }

    if (origNum !== reverseNum) return false;

    return true;
};

console.log(isPalindrome(1001));
console.log(isPalindrome(123321));
console.log(isPalindrome(12332));
