/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {
    
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; ++i) {
        if (!sMap.has(s[i])) sMap.set(s[i], 1);
        let value = sMap.get(s[i]);
        value++;
        sMap.set(s[i], value);
    }
    for (let i = 0; i < t.length; ++i) {
        if (!tMap.has(t[i])) tMap.set(t[i], 1);
        let value = tMap.get(t[i]);
        value++;
        tMap.set(t[i], value);
    }

    console.log("sMap: ", sMap);
    console.log("tMap: ", tMap);
};

isAnagram("anagram", "nagaram");