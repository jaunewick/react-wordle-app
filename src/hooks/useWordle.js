import { useState } from 'react'

const useWordle = (solution) => {
    const [currentGuess, setCurrentGuess] = useState('')

    const handleKeydown = ({ key }) => {
        if (key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(prev => prev.slice(0,-1))
            }
        }
    }

    const handleKeyup = ({ key }) => {
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key)
            }
        }
    }

    return {
        currentGuess,
        handleKeyup,
        handleKeydown
    }
}

export default useWordle
