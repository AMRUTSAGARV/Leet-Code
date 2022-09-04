if (nums.length === 1) return 0;
let largestNumber = Math.max(...nums);
let shouldBeSmallerThanOrEqual = largestNumber / 2;
let findIndex = {};
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > shouldBeSmallerThanOrEqual && nums[i] !== largestNumber) {
    return -1;
  }
  findIndex[nums[i]] = i;
}
return findIndex[largestNumber];
