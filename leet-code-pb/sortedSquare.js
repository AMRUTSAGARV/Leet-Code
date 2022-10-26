var sortedSquares = function (nums) {
  let temp = nums
    .map(function (a) {
      return a * a;
    })
    .sort(function (a, b) {
      return a - b;
    });

  return temp;
};
