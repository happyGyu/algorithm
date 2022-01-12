/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let answer;
    nums.forEach((n, i) => {
        const pair = nums.indexOf(target - n);
        if (pair !== -1 && pair !== i) {
            answer = [i, pair]
        }
    });
    return answer; 
};