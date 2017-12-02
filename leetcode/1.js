/*
    https://leetcode.com/problems/two-sum/
*/
var twoSum = function(nums, target) {
    var startIndex, endIndex;
    for (var i=0;i<nums.length;i++) {
        for (var j=0;j<nums.length;j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                startIndex = i;
                endIndex = j;
                return [startIndex, endIndex];
            }
        }
    }
};


console.log(twoSum(arr, target));