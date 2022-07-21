var solveSudoku = function (board) {
  const isValid = (row, col, board, val) => {
    let rowDiff = Math.floor(row / 3) * 3;
    let colDiff = Math.floor(col / 3) * 3;

    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === val) return false;
      if (board[i][col] === val) return false;
      // trick to check subbox(row change every 3, col change every 3)
      // allowing us to check box without extra loop
      if (board[rowDiff + Math.floor(i / 3)][colDiff + (i % 3)] === val) {
        return false;
      }
    }

    // for(let r = 0 + rowDiff; r < 3 + rowDiff; r++) {
    //     for(let c = 0 + colDiff; c < 3 + colDiff; c++) {
    //         if(board[r][c] === val) {
    //             return false;
    //         }
    //     }
    // }

    return true;
  };

  const solve = (board) => {
    //	1. Go through each element
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        // 2a. If element is a valid choice, part 1,
        if (board[row][col] === ".") {
          for (let i = 1; i <= 9; i++) {
            // 2b. If element is a valid choice, we tempoarily set element as part of the solution
            if (isValid(row, col, board, String(i))) {
              board[row][col] = String(i);
              // 3. Recurse over the rest of the elements
              if (solve(board)) {
                // all elements are filled out, let's return this baby
                return true;
              }
              // 4. If answer isn't valid, or we need to add the rest of the combinations, we undo step 2
              board[row][col] = ".";
            }
          }
          // backtrack initiator, previous choice was bad, we didn't get a valid choice in the recursion
          return false;
        }
      }
    }
    // all elements are filled out, we solved it
    return true;
  };

  solve(board);
  return board;
};
