/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false;

    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; ++i) {
        if (!sMap.has(s[i])) {
            sMap.set(s[i], 1);
            continue;
        }
        let value = sMap.get(s[i]);
        value++;
        sMap.set(s[i], value);
    }

    for (let i = 0; i < t.length; ++i) {
        if (!tMap.has(t[i])) {
            tMap.set(t[i], 1);
            continue;
        }
        let value = tMap.get(t[i]);
        value++;
        tMap.set(t[i], value);
    }

    for (const c of sMap.keys()) {
        if (sMap.get(c) !== tMap.get(c)) return false;
    }
    return true;
};

isAnagram("anagram", "nagara");