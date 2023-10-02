import Keyboard from "./componenets/Keyboard"
import word from "../data/wordList.json"
import { useEffect, useState } from "react";
import HangmanDrawing from "./componenets/HangmanDrawing";
import HangmanWord from "./componenets/HangmanWord";


function App() {
  // Choose a random word of wordList.json
  const [wordToGuess] = useState(word[Math.floor(Math.random()* word.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter((letter)=> !wordToGuess.includes(letter))
  const isLoser = incorrectLetters.length > 5
  const isWinner = wordToGuess.split('').every((letter)=> guessedLetters.includes(letter))

  
  useEffect(()=>{
    const handleKeys = (e:KeyboardEvent) =>{
        if (!e.key.match(/^[a-z]$/)) return
        if (guessedLetters.includes(e.key) || isLoser || isWinner) return
        setGuessedLetters((prev)=>[...prev,e.key])    
    }

    document.addEventListener('keypress', handleKeys)

    return () => document.removeEventListener('keypress', handleKeys)
  },[guessedLetters,isLoser,isWinner])


  return (
    <section className="grid grid-cols-12 gap-5 font-Gloria">
    <div className="col-span-12 md:col-span-5">
      
    <HangmanDrawing 
    numOFIncorrectLetters = {incorrectLetters.length}/>
    </div>

    <div className="flex flex-col col-span-12 md:col-span-7">

      <HangmanWord
       isLoser={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters}
       isWinner = {isWinner}
       />
  
      <Keyboard
        isLoser = {isLoser}   
        isWinner = {isWinner}
        activeKey ={guessedLetters.filter((key)=>wordToGuess.includes(key))}
        UnactiveKey ={guessedLetters.filter((key)=>!wordToGuess.includes(key))}
        setGuessedLetters={setGuessedLetters}/>
    </div>
  </section>
  )
}

export default App

