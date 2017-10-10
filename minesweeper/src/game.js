/*
This project programs a Minesweeper game using ES6 and Babel transpiler.
created by Steve Hanlon Sept 21, 2017
*/

/*
To play Minesweeper, we will create instances of MineSweeperGame in command line.
For example:
  In the command line, navigate to the lib directory and run `node`
  Run `.load game.js` to load the contents of this file.
  Then create a Game instance and run commands like so:

let game = new Game(3, 3, 3);
game.playMove(0, 1);
game.playMove(1, 2);

When done run `.exit`
*/

import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);

    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Holy Moly! You hit a BOMB! The game is oooooooooover!');
      this._board.print();
    } else if (this._board.hasSafeTiles() === false) {
      console.log('You won! Ce-le-brate good times! Come on!!');
    } else {
      console.log('Current Board: ');
      this._board.print();
    } // end else
  } // end playMove
} // end Game class
