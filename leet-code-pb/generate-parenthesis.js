// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var generateParenthesis = function (n) {
  const sol = [];
  const genCombo = (leftPcount, rightPcount, partial) => {
    //exit conidtion
    if (leftPcount > rightPcount) return;

    if (!leftPcount && !rightPcount) sol.push(partial);

    if (leftPcount > 0) genCombo(leftPcount - 1, rightPcount, partial + "(");
    if (rightPcount > 0) genCombo(leftPcount, rightPcount - 1, partial + ")");
  };
  genCombo(n, n, "");
  return sol;
};
console.log(generateParenthesis(3));
