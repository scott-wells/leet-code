/**
 * @param {string} s
 * @return {boolean}
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
var isPalindrome = function(s) {
    
    s = s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");
    
    let stack = [];
    let reverse = [];
    let flag = false;
    
    if (s === "") flag = true;
    
    for (let i = 0; i < Math.floor(s.length / 2); i++) stack.push(s[i]);
    console.log(stack);

    for (let i = s.length - 1; i >= s.length / 2; i--) reverse.push(s[i]);
    console.log(reverse);

    if (JSON.stringify(stack) === JSON.stringify(reverse)) flag = true;

    console.log(flag);
    return flag;
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");
isPalindrome(" catac ");
isPalindrome(" cattac ");
isPalindrome(" catc ");
