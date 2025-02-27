import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import { getRandomInt } from '../utils/helpers';

const GameBoard = () => {
    const [moles, setMoles] = useState(Array(9).fill(false));
    const [score, setScore] = useState(0);
    const [gameActive, setGameActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        let moleInterval;
        if (gameActive) {
            moleInterval = setInterval(() => {
                const newMoles = [...moles];
                const randomIndex = getRandomInt(0, 9);
                newMoles[randomIndex] = true;
                setMoles(newMoles);
                setTimeout(() => {
                    newMoles[randomIndex] = false;
                    setMoles(newMoles);
                }, 1000);
            }, 1500);

            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setGameActive(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(moleInterval);
        };
    }, [gameActive, moles]);

    const handleMoleHit = (index) => {
        if (moles[index]) {
            setScore(score + 1);
            const newMoles = [...moles];
            newMoles[index] = false;
            setMoles(newMoles);
        }
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setGameActive(true);
    };

    return (
        <div className="game-board">
            <h1>Whack-a-Mole</h1>
            <button onClick={startGame} disabled={gameActive}>
                {gameActive ? 'Game in Progress' : 'Start Game'}
            </button>
            <div className="score">Score: {score}</div>
            <div className="timer">Time Left: {timeLeft}s</div>
            <div className="mole-container">
                {moles.map((isVisible, index) => (
                    <Mole key={index} index={index} isVisible={isVisible} onHit={handleMoleHit} />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;