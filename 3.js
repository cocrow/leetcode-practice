// Longest Substring Without Repeating Characters
/*
Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    var substr = '';
    for (var i = 0;i < s.length; i++ ) {
        var tempStr = ''
        for (var j = i;j< s.length; j++) {
            if (tempStr.indexOf(s.charAt(j)) === -1) {
                tempStr = tempStr + s.charAt(j);
            } else {
                break;
            }
        }
        if (tempStr.length > substr.length) {
            substr = tempStr;
        }
    }
    return substr.length;
};

console.log(lengthOfLongestSubstring('abcabcbb'));