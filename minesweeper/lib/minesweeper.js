'use strict';

/*
This project programs a Minesweeper game
created by Steve Hanlon Sept 21, 2017
*/

// hard code a sample row of squares
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

var printBoard = function printBoard(board) {
  console.log('Current Board:');
  console.log(board[0].join('|'));
  console.log(board[1].join('|'));
  console.log(board[2].join('|'));
};

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);