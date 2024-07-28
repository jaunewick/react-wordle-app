import { useState } from 'react'

const useWordle = (solution) => {
    const [currentGuess, setCurrentGuess] = useState('')
    const [turn, setTurn] = useState(0)
    const [history, setHistory] = useState([])
    const [guesses, setGuesses] = useState([...Array(6)])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map(l => { return { key: l, color: 'grey' } })

        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                // Prevent double matching
                solutionArray[i] = null
            }
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                // Prevent double matching
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }

        setGuesses(prevGuesses => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory(prevHist => [...prevHist, currentGuess])

        setTurn(prevTurn => prevTurn + 1)

        setCurrentGuess('')

    }

    const handleKeydown = ({ key }) => {
        if (key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(prev => prev.slice(0, -1))
            }
        }
    }

    const handleKeyup = ({ key }) => {
        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key.toLowerCase())
            }
        }

        if (key === 'Enter') {
            if (turn > 5) {
                console.log('0 guess left');
                return
            }

            if (history.includes(currentGuess)) {
                console.log('Guess already tried');
                return
            }

            if (currentGuess.length !== 5) {
                console.log('5 char long words only');
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
            console.log(formatted);
        }
    }


    return {
        currentGuess,
        handleKeyup,
        handleKeydown,
        turn,
        history,
        guesses,
        isCorrect
    }
}

export default useWordle
