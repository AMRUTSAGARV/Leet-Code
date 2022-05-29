let nums = [4, 1, 2, 1, 2];
// let n = nums.length;
// function nonEmpty(nums, numsSize) {
//   let temp = nums[0];
//   for (let i = 1; i < numsSize; i++) temp = temp ^ nums[i];

//   return temp;
// }

// console.log(nonEmpty(nums, n));
function nonEmpty() {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (num[i] !== num[j]) {
        return num;
      }
    }
  }
}
console.log(nonEmpty(nums));
