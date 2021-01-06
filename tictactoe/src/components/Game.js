import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner} from '../helpers';

const style = {
    width: '200px',
    margin: '20px auto',
    fontSize: '1.5rem'
};

const Game = () => { 
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = (i) => {
       const boardCopy = [...board];
       // If user click an occupied square or if game is won, return
       if (winner || boardCopy[i]) return;
       // Put an X or an O in the clicked square
       boardCopy[i] = xIsNext ? 'X' : 'O';
       setBoard(boardCopy);
       setXisNext(!xIsNext);
       
    }

    const jumpTo = () => { 

    }

    const renderMoves = () => (
        <button style={style} onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
        <Board squares={board} onClick={handleClick}/>
        <div style={style}>
                <p>{winner ? 'The winner is : ' + winner : 'Next Player is : ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
        </div>
        </>
    )
}

export default Game;