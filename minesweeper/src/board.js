export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  } // end constructor

  // getters for Board
  get playerBoard() {
    return this._playerBoard;
  }

  get bombBoard() {
    return this._bombBoard;
  }

  // methods
  flipTile(rowIndex, columnIndex) {
      // if player touches an active tile already
      if (this._playerBoard[rowIndex][columnIndex] !== " ") {
        console.log("This tile has already been flipped!");
        return;
        // if player touches a tile with a bomb, add a 'B'
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        // if player touches an untouched tile with no bomb, set it equal to calling getNumberOfNeighborBombs to display the number of neighboring bombs on that same tile
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
      } // end flipTile method
      this._numberOfTiles--;
  }
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    // nested arrays to represent the 8 possible offset combintations of neighboring tiles to a bomb
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighborRowIndex = [rowIndex + offset[0]];
      const neighborColumnIndex = [columnIndex + offset[1]];
      if (neighborRowIndex >= 0 &&
          neighborRowIndex < numberOfRows &&
          neighborColumnIndex >= 0 &&
          neighborColumnIndex < numberOfColumns) {
      if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          return numberOfBombs++;
        }
      }
    });
      return numberOfBombs;
  } // end getNumberOfNeighborBombs

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  } // end hasSafeTiles

  // Print Game
  print() {
    /* Adds a pipe joiner between spaces,
    joins all rows into a string and moves each successive row to a new line */
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  } // end print

  // Generate empty game board
  static generatePlayerBoard(numberOfRows, numberOfColumns){
      this._board = [];

      for (let rows = 0; rows < numberOfRows; rows++) {
        // represents a single row to be added to the game board.
        let row = [];
          for (let cols = 0; cols < numberOfColumns; cols++) {
            // generates a space for a column
            row.push(' ');
          }
        // generates rows with the amount of columns parameter indicated above
        this._board.push(row);
      }
        return this._board;
    } // end generatePlayerBoard

    // Generate Bomb board
    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      this._board = [];

      for (let rows = 0; rows < numberOfRows; rows++) {
        // represents a single row to be added to the game board.
        const row = [];
        for (let cols = 0; cols < numberOfColumns; cols++) {
          // generates a space for a column
            row.push(null);
        }
        // generates rows with the number of columns indicated above
        this._board.push(row);
      }
        // counter for bombs placed on board
        let numberOfBombsPlaced = 0;
        //add bombs to the board until our counter reaches the specified number of bombs
        while(numberOfBombsPlaced < numberOfBombs) {
          let randomRowIndex = Math.floor(Math.random() * numberOfRows);
          let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
          // if space doesn't have a bomb
          if (this._board[randomRowIndex][randomColumnIndex] !== 'B') {
            // place a bomb in that space
            this._board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced += 1;
          }
        }
        return this._board;
    } // end generateBombBoard
} // end Board class
