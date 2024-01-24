import './App.css';
// import "./styles.css";
import Squares from "./Squares";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquareChange(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext);
    // nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Squares onClick={() => handleSquareChange(0)} value={squares[0]} />
        <Squares onClick={() => handleSquareChange(1)} value={squares[1]} />
        <Squares onClick={() => handleSquareChange(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Squares onClick={() => handleSquareChange(3)} value={squares[3]} />
        <Squares onClick={() => handleSquareChange(4)} value={squares[4]} />
        <Squares onClick={() => handleSquareChange(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Squares onClick={() => handleSquareChange(6)} value={squares[6]} />
        <Squares onClick={() => handleSquareChange(7)} value={squares[7]} />
        <Squares onClick={() => handleSquareChange(8)} value={squares[8]} />
      </div>
    </>
  );
}



// function App() {
//   return (
//     <div>
//       <h1>Movie list</h1>
//       <Header/>
//     </div>
//   );
// }

export default App;
