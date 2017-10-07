/*
This project programs a Minesweeper game using ES6 and Babel transpiler
created by Steve Hanlon Sept 21, 2017
*/

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);

    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('The Game is Over!');
      this._board.print()
    } else if (this._board.hasSafeTiles()) {
      console.log('You won!');
    } else {
      console.log('Current Board:');
      this._board.print()
    } // end else
  } // end playMove
} // end Game class


class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  } // end constructor

  // getters for Board
  get playerBoard() {
    return this._playerBoard;
  }

  // methods
  flipTile(rowIndex, columnIndex) {
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
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    // nested arrays to represent the 8 possible offset combintations of neighboring tiles to a bomb
    const neighborOffsets = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    const numberOfRows = this._bombBoard;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset;
      const neighborColumnIndex = columnIndex + offset;
      if (neighborRowIndex >= 0 &&
          neighborRowIndex < numberOfRows &&
          neighborColumnIndex >= 0 &&
          neighborColumnIndex < numberOfColumns)
      if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
      }
    });
      return numberOfBombs;
  } // end getNumberOfNeighborBombs

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  } // end hasSafeTiles

  // Print Game
  print (board) {
    /* Adds a pipe joiner between spaces,
    joins all rows into a string and moves each successive row to a new line */
    console.log(board.map(row => row.join(' | ').join('\n')));
  } // end print

  // Generate empty game board
  static generatePlayerBoard(numberOfRows, numberOfColumns){
      let board = [];

      for (let rows = 0; rows < numberOfRows; rows++) {
        // represents a single row to be added to the game board.
        const row = [];
        for (let cols = 0; cols < numberOfColumns; cols++) {
          // generates a space for a column
          row.push(' ');
        }
        // generates rows with the amount of columns parameter indicated above
        board.push(row);
      }
        return board;
    } // end generatePlayerBoard

    // Generate Bomb board
    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      let board = [];

      for (let rows = 0; rows < numberOfRows; rows++) {
        // represents a single row to be added to the game board.
        const row = [];
        for (let cols = 0; cols < numberOfColumns; cols++) {
          // generates a space for a column
          row.push(' ');
        }
        // generates rows with the number of columns indicated above
        board.push(row);
      }
        // counter for bombs placed on board
        let numberOfBombsPlaced = 0;
        //add bombs to the board until our counter reaches the specified number of bombs
        while(numberOfBombsPlaced < numberOfBombs) {
          let randomRowIndex = Math.floor(Math.random() * numberOfRows);
          let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
          // if space doesn't have a bomb
          if (board[randomRowIndex][randomColumnIndex] !== 'B') {
            // place a bomb in that space
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced += 1;
          }
        }
        return board;
    } // end generateBombBoard
} // end Board class

// instatiate a Game and hard code a test move
const g = new Game(3, 3, 3);
g.playMove(0,0);
