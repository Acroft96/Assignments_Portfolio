import React, { useState } from 'react';
import './styles.css';
const ROWS = 6;
const COLS = 7;

const Game = () => {
  const [board, setBoard] = useState(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('Red');
  const [winner, setWinner] = useState(null);

  const handleClick = (col) => {
    if (winner) return;

    const newBoard = board.map(row => row.slice());
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        if (checkWinner(newBoard, row, col, currentPlayer)) {
          setWinner(currentPlayer);
        } else if (newBoard.every(row => row.every(cell => cell))) {
          setWinner('Tie');
        }
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        return;
      }
    }
  };

  const checkWinner = (board, row, col, player) => {
    return checkDirection(board, row, col, player, 1, 0) ||
           checkDirection(board, row, col, player, 0, 1) ||
           checkDirection(board, row, col, player, 1, 1) ||
           checkDirection(board, row, col, player, 1, -1);
  };

  const checkDirection = (board, row, col, player, deltaRow, deltaCol) => {
    let count = 1;
    for (let i = 1; i < 4; i++) {
      const newRow = row + deltaRow * i;
      const newCol = col + deltaCol * i;
      if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS || board[newRow][newCol] !== player) {
        break;
      }
      count++;
    }
    for (let i = 1; i < 4; i++) {
      const newRow = row - deltaRow * i;
      const newCol = col - deltaCol * i;
      if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS || board[newRow][newCol] !== player) {
        break;
      }
      count++;
    }
    return count >= 4;
  };

  return (
    <div>
      <h1>Connect Four</h1>
      {winner && <h2>{winner === 'Tie' ? "It's a Tie!" : `${winner} Wins!`}</h2>}
      <div className="board">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell}`}
              onClick={() => handleClick(colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Game;