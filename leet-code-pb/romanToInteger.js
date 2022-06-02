//converting roman number to integer

var romanToInteger = function (s) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (i = 0; i < s.length; i++) {
    const cur = romanObj[s[i]];
    const next = romanObj[s[i + 1]];

    if (cur < next) {
      result += next - cur; // IV -> 5 - 1 = 4
      i++;
    } else {
      result += cur;
    }
  }

  return result;
};

console.log(romanToInteger("XIV"));
// If the numerals are descending from left to right, largest to smallest, then they are added together. But if the numerals begin to ascend in order, then the larger number is subtracted by the preceding smaller number. For instance, in XVIV, X and V are added together to make 15. Because the I is followed by a larger number, V, it is subtracted from that number to make 4 and then added to the preceding XV to make 19.

// Based on this rule, I will iterate from left to right. If the current symbol (cur) is less than the symbol to its right (next), then I will subtract the cur from the next and move 2 characters to the right. Otherwise, I will simply add them.
