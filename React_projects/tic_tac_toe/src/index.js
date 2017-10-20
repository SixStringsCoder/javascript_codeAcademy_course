import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// The Square component renders a single <button>
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

// the Board component renders 9 squares with state,
class Board extends React.Component {
  // method for filling square
  renderSquare(i) {
    return (
      <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// the Game component renders a board with some placeholders that we’ll fill in later.
class Game extends React.Component {
  constructor(props) {
    super(props);
    // create 9 square empty board
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      // indicate which step we’re currently viewing
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    // update stepNumber when a new move is made
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // return early and ignore the click if someone has already won the game or if a square is already filled:
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? '✗' : 'Ο';
    // push a new entry onto the stack by concatenating the new history entry to make a new history array
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      /* update handleClick to be aware of stepNumber when reading the current board state
      so you can go back in time then click in the board to create a new entry */
      stepNumber: history.length,
      // update Board’s to flip the value of xIsNext
      xIsNext: !this.state.xIsNext,
    });
  }

  // update that state
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      // xIsNext to true if an even number
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    // Read from the step in the history
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      // multi-line description
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        // For each step in the history, we create a list item <li>
        // with a <button> inside it that uses click handler jumpTo
        <li key={move}>
          <button onClick={() => {this.jumpTo(move)}}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `GAME OVER! --->  ${winner} is the Winner!`;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// Show when a game is won.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
