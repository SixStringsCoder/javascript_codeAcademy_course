'use strict';

/*
This project programs a Minesweeper game
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
    // generates rows with the number of columns indicated above
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
      row.push(null);
    }
    // generates rows with the number of columns indicated above
    board.push(row);
  }
  var numberOfBombsPlaced = 0;
  //add bombs to the board until our counter reaches the specified number of bombs
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    // ***has the potential to place bombs on top of already existing bombs.
    board[randomRowIndex][numberOfColumns] = 'B';
    numberOfBombsPlaced += 1;
  }

  return board;
};

// Print Game
var printBoard = function printBoard(board) {
  // Adds a pipe joiner between spaces
  // Joins all rows into a string and moves each successive row to a new line
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);