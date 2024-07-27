import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Cursor from './Cursor'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, handleKeydown, turn, guesses, isCorrect } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener('keyup', handleKeyup)
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [handleKeyup, handleKeydown])

    useEffect(() => {
        console.log(guesses, turn, isCorrect);
    }, [guesses, turn, isCorrect])

    return (
        <div>
            <div>Solution - {solution}</div>
            <div>Current Guess - {currentGuess}<Cursor /></div>
        </div>
    )
}