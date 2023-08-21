import React, { useState, useEffect, useCallback, useRef } from 'react'
import './Wordle.scss'
import { words } from './words'

const Wordle = () => {
    const [word, setWord] = useState('')
    const [currentLevel, setCurrentLevel] = useState(0)
    const [submittedWords, setSubmittedWords] = useState([])

    const wordleRef = useRef(null)
    const cluesRef = useRef(null)
    const resetGame = () => {
        wordleRef.current.childNodes.forEach(row => {
            row.childNodes.forEach(letter => {
                letter.innerHTML = ''
                letter.classList.remove('exact')
                letter.classList.remove('match')
                letter.classList.remove('wrong')
            })
        })
        setCurrentLevel(0)
        setWord('')
        resetClues()
        setSubmittedWords([])
        getRandomWord()
    }

    const resetClues = () => {
        cluesRef.current.childNodes.forEach(row => {
            row.childNodes.forEach(letter => {
                letter.classList.remove('exact')
                letter.classList.remove('match')
                letter.classList.remove('wrong')
            })
        })
    }

    const addClassToClue = (letter, className) => {
        cluesRef.current?.querySelector('[data-letter="' + letter.toUpperCase() + '"]')?.classList.add(className)

    }

    const getRandomWord = useCallback(() => {
        // random word from words local file
        const randomWord = words[Math.floor(Math.random() * words.length)]
        setWord(randomWord)
        return randomWord
    }, [])

    const doesWordExist = (word) => {
        // Does word exist in local file
        return words.includes(word)
    }

    const showError = (element) => {
        element.classList.add('error')
        setTimeout(() => {
            element.classList.remove('error')
        }, 500)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let inputValue = e.target[0].value

        // Prevent invalid input: not 5 letters or already submitted
        if (inputValue.length !== 5 || submittedWords.includes(inputValue.toLowerCase())) {
            showError(e.target[0])
            inputValue = ''
            return
        }

        if (await doesWordExist(inputValue.toLowerCase())) {
            wordleRef.current.childNodes[currentLevel].childNodes.forEach((letter, index) => {
                const currentLetter = inputValue.toLowerCase()[index].toLowerCase()
                letter.innerHTML = currentLetter
                if (currentLetter === word[index]) {
                    letter.classList.add('exact')
                    addClassToClue(currentLetter, 'exact')
                } else if (word.includes(currentLetter)) {
                    letter?.classList.add('match')
                    addClassToClue(currentLetter, 'match')
                } else {
                    addClassToClue(currentLetter, 'wrong')
                }
            })

            if (inputValue.toLowerCase() === word.toLowerCase()) {
                setTimeout(() => {
                    alert('You won! The word was ' + word)
                }, 300)
                setTimeout(() => {
                    getRandomWord()
                    resetGame()
                }, 2000)
            } else if (currentLevel === 4 && inputValue.toLowerCase() !== word.toLowerCase()) {
                setTimeout(() => {

                    alert('You lost! The word was ' + word)
                    resetGame()
                }, 300)
            } else {
                setCurrentLevel(currentLevel + 1)
                e.target[0].value = ''
            }

            setSubmittedWords([...submittedWords, inputValue.toLowerCase()])
        } else {
            showError(e.target[0])
            e.target[0].value = ''
        }

        e.target[0].value = ''

    }

    useEffect(() => {
        getRandomWord()
    }, [getRandomWord])

    return (
        <div className='wordle' >
            <h1>Wordle</h1>
            <div ref={wordleRef}>
                <div className='row'>
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                </div>
                <div className='row'>
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                </div>
                <div className='row'>
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                </div>
                <div className='row'>
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                </div>
                <div className='row'>
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                    <div className="letter" />
                </div>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" maxLength={5} />
            </form>

            <div className='clues' ref={cluesRef}>
                <div className='top'>
                    <div className='clue' data-letter="Q">Q</div>
                    <div className='clue' data-letter="W">W</div>
                    <div className='clue' data-letter="E">E</div>
                    <div className='clue' data-letter="R">R</div>
                    <div className='clue' data-letter="T">T</div>
                    <div className='clue' data-letter="Y">Y</div>
                    <div className='clue' data-letter="U">U</div>
                    <div className='clue' data-letter="I">I</div>
                    <div className='clue' data-letter="O">O</div>
                    <div className='clue' data-letter="P">P</div>
                </div>
                <div className='middle'>
                    <div className='clue' data-letter="A">A</div>
                    <div className='clue' data-letter="S">S</div>
                    <div className='clue' data-letter="D">D</div>
                    <div className='clue' data-letter="F">F</div>
                    <div className='clue' data-letter="G">G</div>
                    <div className='clue' data-letter="H">H</div>
                    <div className='clue' data-letter="J">J</div>
                    <div className='clue' data-letter="K">K</div>
                    <div className='clue' data-letter="L">L</div>
                </div>
                <div className='bottom'>
                    <div className='clue' data-letter="Z">Z</div>
                    <div className='clue' data-letter="X">X</div>
                    <div className='clue' data-letter="C">C</div>
                    <div className='clue' data-letter="V">V</div>
                    <div className='clue' data-letter="B">B</div>
                    <div className='clue' data-letter="N">N</div>
                    <div className='clue' data-letter="M">M</div>
                </div>
            </div>
            <button onClick={() => resetGame()}>RESET GAME</button>
        </div>
    )
}

export default Wordle