let nums = [2, 7, 11, 15];
const target = 9;

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
