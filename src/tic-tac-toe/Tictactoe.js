import React, { useState } from "react";
import "./main.css";
import useTicTacToe from "./useTicTacToe";

const Tictactoe = () => {
  const { board, calculateWinner, handleClick, getStatusMessage, resetGame } =
    useTicTacToe();

  return (
    <div className="game w-[300px] mx-auto mt-20">
      <div className="flex justify-between">
        <div>Player x turn</div>
        <button onClick={resetGame}>Reset</button>
      </div>
      <div className="board">
        {board.map((b, i) => (
          <button
            className="cell p-4 border-2 hover:bg-slate-100"
            key={i}
            onClick={() => handleClick(i)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tictactoe;
