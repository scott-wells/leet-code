/**
 * @param {string} s
 * @return {boolean}
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 */
var isValid = function (s) {
    
    if (s.length % 2 !== 0) return false;
    
    let stack = [];
    let closeOpen = { ")": "(", "]": "[", "}": "{" };
    
    for (let c of s) {

        if (c in closeOpen) {
            
            if (stack.length && stack[stack.length - 1] === closeOpen[c]) {
                stack.pop();
                continue;
            }
            console.log(false);
            return false;
        }

        stack.push(c);
    }
    console.log(!stack.length ? true : false);
    return !stack.length ? true : false;
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("(){}}{");
isValid("{()}");
isValid("({{{{}}}))");
isValid("([)]");
isValid("([}}])");