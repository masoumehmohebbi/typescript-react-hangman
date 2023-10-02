import Keyboard from "./componenets/Keyboard"
import word from "../data/wordList.json"
import { useState } from "react";


function App() {
  // Choose a random word of wordList.json
  const [wordToGuess, setWordToGeuss] = useState(word[Math.floor(Math.random()* word.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
 
  return (
    <section className="grid grid-cols-12 gap-5 font-Gloria">
    <div className="col-span-12 md:col-span-5">
    <HangmanDrawing/>
    </div>
    <div className="flex flex-col col-span-12 md:col-span-7">
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters}/>
      <Keyboard
        activeKey ={guessedLetters.filter((key)=>wordToGuess.includes(key))}
        UnactiveKey ={guessedLetters.filter((key)=>!wordToGuess.includes(key))}
        setGuessedLetters={setGuessedLetters}/>
    </div>
  </section>
  )
}

export default App

function HangmanDrawing() {
  return <section className="mt-9">
    <div className="relative w-[280px] mx-auto h-52 md:h-96 flex justify-center items-center">
      <div className="absolute bg-yellow-900 h-11 w-2 top-0 left-[94%] md:left-[calc(100%_+_3rem)]"></div>
      <div className="absolute h-2 w-32 md:w-48 left-[140px] bg-yellow-900 top-0"></div>
      <div className="h-full md:h-full bg-yellow-900 w-2 absolute bottom-0 left-[140px]"></div>
      <div className="w-4/5 md:w-full h-2 bg-yellow-900 absolute bottom-0"></div>
    </div>
  </section>
}
type HangmanWordProps = {
  wordToGuess : string,
  guessedLetters: string[]
}


function HangmanWord({wordToGuess,guessedLetters}: HangmanWordProps){
  console.log(guessedLetters);
  console.log(wordToGuess);
  
  
  return (
<>
<h1 className="uppercase text-center md:text-2xl text-slate-800 mt-2 mb-11">nice try, refresh to try agian! 👾</h1>

    <div className="mx-auto mt-6">

      {wordToGuess.split("").map((w, index) => (
       <span key={index}  className="border-b-2 border-slate-600 mx-3 px-1">
         <span className={`uppercase text-3xl font-black ${guessedLetters.includes(w) ? "visible" : "invisible"
        }`} >
          {w}
        </span>
       </span>

      ))}
    </div>
</>
  );
  
}