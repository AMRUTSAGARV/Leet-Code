var findDiagonalOrder = function (mat) {
  const rows = mat.length;

  if (rows === 0) return [];
  const cols = mat[0].length;

  const diagonals = new Array(rows + cols - 1).fill(0).map((_) => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const key = i + j;
      const num = mat[i][j];
      if (key % 2 === 0) {
        diagonals[key].unshift(num);
      } else {
        diagonals[key].push(num);
      }
    }
  }
  return diagonals.reduce((result, arr) => {
    result.push(...arr);
    return result;
  }, []);
};
