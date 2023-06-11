/**
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
 * or -1 if needle is not part of haystack.
 * 
 * Key to this problem is two pointers to keep track of the chars in haystack and needle.
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { 
    let j = 0;
    let k = 0;
    for (let i = 0; i < haystack.length; i++) { // loop through haystack
        while (needle[j] === haystack[k]) { // as long as the letters match, keep looping
            // step your pointers forward
            k++;
            j++;
            if (j === needle.length) { // if you make it to end of needle, then you found match
                console.log(i);
                return i;
            }
            if (k === haystack.length) { // if you make it to end of haystack, then you didn't find match
                console.log(-1);
                return -1;
            }
        }
        if (needle[j] !== haystack[k]) { // if letters don't match, step your pointers forward
            k = i+1;
            j = 0;
        }
    }
    console.log(-1);
    return -1;
};
strStr("rodeoride","ride");
strStr("butttruckduck","truck");
strStr("sadbutsad","sad");
strStr("leetcode","leeto");