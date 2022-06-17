// var intToRoman = function (num) {
//   var str = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
//   var res = "";
//   var i = 0;
//   var temp = 0;
//   while (num > 0) {
//     temp = num % 10;
//     if (temp === 9) {
//       res = str[i][0] + str[i + 1][0] + res;
//     } else if (temp >= 5) {
//       res = str[i][1] + str[i][0].repeat(temp - 5) + res;
//     } else if (temp === 4) {
//       res = str[i][0] + str[i][1] + res;
//     } else {
//       res = str[i][0].repeat(temp) + res;
//     }
//     num = Math.floor(num / 10);
//     i++;
//   }
//   return res;
// };
// console.log(intToRoman(59));

let integerToRoman = (num) => {
  var str = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];

  var res = "";
  var i = 0;
  var temp = 0;
  while (num > 0) {
    temp = num % 10;
    if (temp === 9) {
      res = str[i][0] + str[i + 1][0] + res;
    } else if (temp >= 5) {
      res = str[i][1] + str[i][0].repeat(temp - 5) + res;
    } else if (temp === 4) {
      res = str[i][0] + str[i][1] + res;
    } else {
      res = str[i][0].repeat(temp) + res;
    }
    num = Math.floor(num / 10);
    i++;
  }
  return res;
};

console.log(integerToRoman(62));
