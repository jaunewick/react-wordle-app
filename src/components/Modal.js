import React, { useEffect, useState } from 'react';
import { useWindowSize } from '@react-hook/window-size'
import Confetti from 'react-confetti'

export default function Modal({ isCorrect, turn, solution }) {
    const URL = 'http://localhost:3000';
    const [width, height] = useWindowSize()
    const [recycleConfetti, setRecycleConfetti] = useState(true)
    const CONFETTI_DURATION = 3000

    useEffect(() => {
        if (isCorrect) {
            const timer = setTimeout(() => {
                setRecycleConfetti(false)
            }, CONFETTI_DURATION)

            return () => clearTimeout(timer)
        }
    }, [isCorrect])

    const handleReplay = () => {
        window.location.href = URL;
    };

    return (
        <div className="modal">
            {isCorrect && (
                <div>
                    <Confetti width={width} height={height} recycle={recycleConfetti} />
                    <h1>You win!</h1>
                    <p className="solution">Solution: {solution}</p>
                    <p>You found the solution in {turn} {turn > 1 ? 'guesses' : 'guess'}</p>
                    <button className="replay" onClick={handleReplay}>Play Again</button>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>Game Over</h1>
                    <p className="solution">Solution: {solution}</p>
                    <p>Better luck next time!</p>
                    <button className="replay" onClick={handleReplay}>Play Again</button>
                </div>
            )}
        </div>
    );
}