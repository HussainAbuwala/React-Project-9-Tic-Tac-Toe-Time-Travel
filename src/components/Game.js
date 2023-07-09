import React, { useState } from 'react';
import Board from './Board';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button className='time-travel' onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
    console.log("bye");
    console.log(currentSquares);
    return (
    <div className='container'>
      <h1>Tic Tac Toe (Time Travel Edition)</h1>
      <p>Tic Tac Toe is a classic two-player game played on a 3x3 grid. The objective is to be the first player to form a horizontal, vertical, or diagonal line of three of their own symbols. In this time travel edition, user can go back to previous moves.</p>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
    );
}