/*
This project programs a Minesweeper game using ES6 and Babel transpiler
created by Steve Hanlon Sept 21, 2017
*/

// Generate empty game board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
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
    return board;
}


// Generate Bomb board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for (let rows = 0; rows < numberOfRows; rows++) {
    // represents a single row to be added to the game board.
    const row = [];
    for (let cols = 0; cols < numberOfColumns; cols++) {
      // generates a space for a column
      row.push(null);
    }
    // generates rows with the number of columns indicated above
    board.push(row);
  }
    // counter
    let numberOfBombsPlaced = 0;
    //add bombs to the board until our counter reaches the specified number of bombs
    while(numberOfBombsPlaced !== numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      // ***has the potential to place bombs on top of already existing bombs.
      board[randomRowIndex][numberOfColumns] = 'B';
      numberOfBombsPlaced += 1;
    }
    return board;
}

// Print Game
const printBoard = (board) => {
  /* Adds a pipe joiner between spaces,
  joins all rows into a string and moves each successive row to a new line */
  console.log(board.map((row) => row.join(' | ')).join('\n'));
}

// sample bomb board
const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
