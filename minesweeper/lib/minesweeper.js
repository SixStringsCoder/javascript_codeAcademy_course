'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
This project programs a Minesweeper game using ES6 and Babel transpiler
created by Steve Hanlon Sept 21, 2017
*/

var Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);

      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('The Game is Over!');
        this._board.print();
      } else if (this._board.hasSafeTiles()) {
        console.log('You won!');
      } else {
        console.log('Current Board:');
        this._board.print();
      } // end else
    } // end playMove

  }]);

  return Game;
}(); // end Game class


var Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  } // end constructor

  // getters for Board


  _createClass(Board, [{
    key: 'flipTile',


    // methods
    value: function flipTile(rowIndex, columnIndex) {
      // if player touches an active tile already
      if (this._playerBoard[rowIndex][columnIndex] !== " ") {
        alert("This tile has already been flipped!");
        return;
        // if player touches a tile with a bomb, add a 'B'
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard.push('B');
      } else {
        // if player touches an untouched tile with no bomb, set it equal to calling getNumberOfNeighborBombs to display the number of neighboring bombs on that same tile
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        this._numberOfTiles--;
      } // end flipTile method
    }
  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      // nested arrays to represent the 8 possible offset combintations of neighboring tiles to a bomb
      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var numberOfRows = this._bombBoard;
      var numberOfColumns = this._bombBoard[0].length;
      var numberOfBombs = 0;

      neighborOffsets.forEach(function (offset) {
        var neighborRowIndex = rowIndex + offset;
        var neighborColumnIndex = columnIndex + offset;
        if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      });
      return numberOfBombs;
    } // end getNumberOfNeighborBombs

  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      return this._numberOfTiles !== this._numberOfBombs;
    } // end hasSafeTiles

    // Print Game

  }, {
    key: 'print',
    value: function print(board) {
      /* Adds a pipe joiner between spaces,
      joins all rows into a string and moves each successive row to a new line */
      console.log(board.map(function (row) {
        return row.join(' | ').join('\n');
      }));
    } // end print

    // Generate empty game board

  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
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
    } // end generatePlayerBoard

    // Generate Bomb board

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
    } // end generateBombBoard

  }]);

  return Board;
}(); // end Board class

// instatiate a Game and hard code a test move


var g = new Game(3, 3, 3);
g.playMove(0, 0);