/*
This project programs a Minesweeper game
created by Steve Hanlon Sept 21, 2017
*/

// Rows of the game board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Print array and join them with a pipe to complete an empty board
const printBoard = (board) => {
  console.log('Current Board:');
  console.log(board[0].join('|'));
  console.log(board[1].join('|'));
  console.log(board[2].join('|'));
}

// View sample empty board
printBoard(board);

// Hard code a sample guess and bomb for comparison
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
