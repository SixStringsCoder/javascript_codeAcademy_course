'use strict';

/*
This project programs a Minesweeper game using ES6 and Babel transpiler
created by Steve Hanlon Sept 21, 2017
*/

// Generate empty game board
var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];

  for (var rows = 0; rows < numberOfRows; rows++) {
    // represents a single row to be added to the game board.
    var row = [];
    for (var cols = 0; cols < numberOfColumns; cols++) {
      // generates a space for a column
      row.push(' ');
    }
    // generates rows with the amount of columns parameter indicated above
    board.push(row);
  }
  return board;
};

// Generate Bomb board
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];

  for (var rows = 0; rows < numberOfRows; rows++) {
    // represents a single row to be added to the game board.
    var row = [];
    for (var cols = 0; cols < numberOfColumns; cols++) {
      // generates a space for a column
      row.push(' ');
    }
    // generates rows with the number of columns indicated above
    board.push(row);
  }
  // counter for bombs placed on board
  var numberOfBombsPlaced = 0;
  //add bombs to the board until our counter reaches the specified number of bombs
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // if space doesn't have a bomb
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      // place a bomb in that space
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced += 1;
    }
  }
  return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  // nested arrays to represent the 8 possible offset combintations of neighboring tiles to a bomb
  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var numberOfRows = bombBoard;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;

  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset;
    var neighborColumnIndex = columnIndex + offset;
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
      numberOfBombs += 1;
    }
  });
  return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
  // if player touches an active tile already
  if (playerBoard[rowIndex][columnIndex] !== " ") {
    alert("This tile has already been flipped!");
    return;
    // if player touches a tile with a bomb, add a 'B'
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard.push('B');
  } else {
    // if player touches an untouched tile with no bomb, set it equal to calling getNumberOfNeighborBombs to display the number of neighboring bombs on that same tile
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

// Print Game
var printBoard = function printBoard(board) {
  /* Adds a pipe joiner between spaces,
  joins all rows into a string and moves each successive row to a new line */
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

// sample bomb board
var playerBoard = generatePlayerBoard(3, 3);
var bombBoard = generateBombBoard(3, 3, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 2);
console.log('Updated Player Board:');
printBoard(playerBoard);