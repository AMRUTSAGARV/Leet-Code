var climbStairs = function (n) {
  var final = [0, 1];
  for (var i = 0; i < n; i++) {
    final = [final[1], final[0] + final[1]];
  }
  return final[1];
};
console.log(climbStairs(4));
