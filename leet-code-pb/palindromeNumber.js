let isPalindrome = (x) => {
  return x == x.toString().split("").reverse().join("");
};
console.log(isPalindrome("madam"));
//  Notice the == as opposed to === because we want to check if both sides are equal regardless of their type. In this case, X is a number while the computed value is a string.
