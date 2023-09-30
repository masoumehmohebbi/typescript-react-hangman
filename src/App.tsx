import { useEffect, useState } from "react"
import Keyboard from "./componenets/Keyboard"
import word from "../data/wordList.json"


function App() {
  // Choose a random word of wordList.json
  const [wordToGuess, setWordToGeuss] = useState(word[Math.floor(Math.random()* word.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
 
  useEffect(()=>{
    // guessedLetters.map((k)=> console.log(k.key))
 
    
  },[guessedLetters])
  

  return (
    <section className="grid grid-cols-12 gap-5 font-Gloria">
    <div className="col-span-5 bg-yellow-600">
    <HangmanDrawing/>
    </div>
    <div className="flex flex-col col-span-7 bg-blue-200">
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters}/>
      <Keyboard setGuessedLetters={setGuessedLetters}/>
    </div>
  </section>
  )
}

export default App

function HangmanDrawing() {
  return <div>HangmanDrawing</div>
}
type HangmanWordProps = {
  wordToGuss : string,
  guessedLetters: string[]
}


function HangmanWord({wordToGuess,guessedLetters}: HangmanWordProps){
  console.log(guessedLetters);
  console.log(wordToGuess);
  
  
  return (
    <div className="mx-auto my-8">
      {wordToGuess.split("").map((w, index) => (
        <span
          key={index}
          className="border-b-2 border-slate-800 mx-2 font-bold text-4xl"
        >
          {guessedLetters.map((letter) => letter === w && w) }
        </span>
      ))}
    </div>
  );
  
}