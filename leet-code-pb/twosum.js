let nums = [2, 11, 7, 15];
const target = 9;
//we have to return indices of two numbers in the array which add up to the target value.

var twoSum = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      return [arr.indexOf(nums[i]), i];
    } else {
      arr.push(target - nums[i]);
    }
  }
};

console.log(twoSum(nums, target));
