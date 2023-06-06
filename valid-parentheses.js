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
var isValid = function(s) {
    
    let flag = false;

    for (let i = 0; i < s.length; i+=2) {

        if (s[i] === ")" || s[i] === "]" || s[i] === "}") flag = false;

        switch (s[i]) {
            case "(":
                if (s[i+1] === ")") flag = true;
                break;
            case "[":
                if (s[i+1] === "]") flag = true;
                break;
            case "{":
                if (s[i+1] === "}") flag = true;
                break;
            default:
                break; 
        }
    }
    console.log(flag);
    return flag;
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("(){}}{");