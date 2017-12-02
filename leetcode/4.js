/**
 * @param {string} s
 * @return {string}
 */

function helper(s, start, end) {
    while(start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
        start --;
        end ++;
    }
    return s.substring(start + 1, end);
}

var longestPalindrome = function(s) {
    if (s === '') {
        return '';
    }
    if (s.length === 1) {
        return s;
    }
    var longest = '';
    for (var i = 0;i < s.length;i++) {
        //center of i
        var temp = helper(s, i, i);
        if (temp.length > longest.length) {
            longest = temp;
        }
        //center of i+1
        temp = helper(s, i, i+1);
        if (temp.length > longest.length) {
            longest = temp;
        }
    }
    return longest;
}

console.log(longestPalindrome('babad'))