import React from 'react'

export default function Row({ guess, currentGuess }) {
    if (guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => (
                    <div className={l.color} key={i}>{l.key}</div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')
        console.log(letters);
        return (
            <div className="row current">
                {letters.map((l, i) => (
                    <div className="filled" key={i}>{l}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
