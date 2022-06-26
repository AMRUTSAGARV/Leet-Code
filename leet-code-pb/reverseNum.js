var reverse = function (x) {
  let reverseNum = 0,
    lastDigit = 0;
  while (x != 0) {
    lastDigit = x % 10;
    x = parseInt(x / 10);
    reverseNum = reverseNum * 10 + lastDigit;
    if (reverseNum < Math.pow(-2, 31) || reverseNum > Math.pow(2, 31) - 1)
      return 0;
  }
  return reverseNum;
};

console.log(reverse(123));
