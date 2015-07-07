/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  //set up a blank board
  var board = new Board({n:n});
  var row = 0, col = 0; 
  //place a piece at (0,0);
  board.togglePiece(row, col);
  var pieces = 1;

  //recursive function
  var verifyBoard = function(board) {
    var anyConflicts = board.hasAnyRooksConflicts();
    if (!anyConflicts && pieces === n) {
      //board is a solution
      return board.rows();
    } else if (!anyConflicts) {
      //board has no conflicts, but needs more pieces, add a piece on the next row
      row++;
      col = 0;
      board.togglePiece(row, col);
      pieces++;
      return verifyBoard(board);
    } else {
      //board has conflicts, move the piece on the bottom most row over one space
      board.togglePiece(row, col++);
      board.togglePiece(row, col);
      return verifyBoard(board);
    }
  }
  return verifyBoard(board);
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];

  var findNRooksSolutionAt = function(matrix, row, n) {
    //create a new board
    var board = new Board(matrix);
    if(row === n && !board.hasAnyRooksConflicts()) {
      //if the board is full and has no conflicts
      var matrixArray = [];
      matrixArray[0] = matrix.toString(); 
      solutions.push(matrixArray);
      debugger;
      return;
    }
    for(var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if(!board.hasAnyRooksConflicts()) {
        findNRooksSolutionAt(board.rows(), row + 1, n);
      }
      board.togglePiece(row, i);
    }
  };
  findNRooksSolutionAt({n:n}, 0, n);
  return solutions.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};