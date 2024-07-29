import { useEffect, useState } from 'react'

//libraries
import { toast } from 'react-toastify';

// custom hooks
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution }) {
    const {
        currentGuess,
        handleKeyup,
        handleKeydown,
        turn, guesses,
        isCorrect,
        usedKeys,
        showSolution
    } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        if (!hasMounted) {
            toast('🚨 New game started. Good luck!')
            setHasMounted(true)
        }

        window.addEventListener('keyup', handleKeyup)
        window.addEventListener('keydown', handleKeydown)

        if (isCorrect || turn > 5) {
            setTimeout(() => setShowModal(true), 2000)

            window.removeEventListener('keyup', handleKeyup)
            window.removeEventListener('keydown', handleKeydown)
        }

        return () => {
            window.removeEventListener('keyup', handleKeyup)
            window.removeEventListener('keydown', handleKeydown)
        }
    }, [handleKeyup, handleKeydown, isCorrect, turn, hasMounted])

    return (
        <div>
            {!showSolution && <p className='hide-solution'>Hold the <i>Alt (Windows)</i> or <i>Option (Mac)</i> key to reveal solution</p>}
            {showSolution && <p className='show-solution'>👁👄👁 Solution - <i>{solution.toUpperCase()}</i></p>}
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}