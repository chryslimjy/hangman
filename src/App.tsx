import { useState, useEffect } from 'react'
import './App.css'
import words from './wordList.json'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

// Type assertion for the words array
//const typedWords = words as string[]

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  function addGuessedLetter(key: string) {
    setGuessedLetters(prev => [...prev, key])
  }

  useEffect(()=>{
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/[a-z]/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
  })

  return(
    <div style ={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}
    >
      
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard />
      </div>
    

    </div>
  )

  console.log(wordToGuess);
  return <h1>HIIII</h1>
}

export default App
