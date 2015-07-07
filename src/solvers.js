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
  var solution;
  //set up a blank board with nxn dimensions
  var board = new Board({n:n});
  //set up a counter 
  var counter = 1;
  //set up last piece position
  var pos = [0,0];
  //set a piece at 0,0 on the board
  board.togglePiece(pos[0],pos[1]);
  //set up a recursive function that takes in a board
  var checkBoard = function(board) {
    //check if the matrix has any conflicts
    //if there are conflicts
    if(board.hasAnyRooksConflicts()) {
      board.togglePiece(pos[0],pos[1]);
      //move the bottom-right most piece, one space ahead
      pos = moveForward(pos, n);
      board.togglePiece(pos[0], pos[1]);
      //call the function again
      return checkBoard(board);
    } else {
      //if there are not conflicts, checks the amount of pieces on board = n
      if(counter === n) {
        solution = board.rows();
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
        return solution;
      } else {
        counter++;
        pos = moveForward(pos, n);
        board.togglePiece(pos[0], pos[1]);
        return checkBoard(board);
      }
    }
      //if true, solution = board.rows()
  }
  return checkBoard(board);
};

window.moveForward = function(pos, n) {
  if(pos[1] === n-1) {
    if(pos[0] < n-1) {
      pos[0]++;
      pos[1] = 0;
    } else {
      return false;
    }
  } else {
    pos[1]++;
  }
  return pos;
}



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
