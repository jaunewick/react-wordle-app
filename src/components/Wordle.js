import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Cursor from './Cursor'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup, handleKeydown } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        window.addEventListener('keydown', handleKeydown)

        return () => {
            window.removeEventListener('keyup', handleKeyup)
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [handleKeyup, handleKeydown])

    return (
        <div>
            <div>Current Guess - {currentGuess }<Cursor/></div>
        </div>
    )
}