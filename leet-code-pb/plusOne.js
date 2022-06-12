//123 -> 124
//4321 -> 4322
//48999 -> 49000

const digits = [4, 8, 9, 9, 9];

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  //   the unshift handles edge cases where the array is [9,9] and
  //   we need to return it as [1,0,0]. if we don't unshift, we'l get [0,0]
  digits.unshift(1);
  return digits;
};
console.log(plusOne(digits));
