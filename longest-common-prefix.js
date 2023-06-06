/**
 * @param {string[]} strs
 * @return {string}
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */
var longestCommonPrefix = function(strs) {

    if (strs.length === 0) return "";

    let longestPrefix = strs[0];

    for (let i = 1; i < strs.length; ++i) {

        while (strs[i].indexOf(longestPrefix) !== 0) {

            longestPrefix = longestPrefix.substring(0, longestPrefix.length - 1);
        }
    }

    return longestPrefix;
};

// longestCommonPrefix(["flower","flow","flight"]);
// longestCommonPrefix(["dog","racecar","car"]);
longestCommonPrefix(["cat"]);