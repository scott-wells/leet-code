/**
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let space = " ";
    let wordIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === space) {
            wordIndex = i;
        }
    }
};

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
