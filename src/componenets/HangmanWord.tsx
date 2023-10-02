
type HangmanWordProps = {
    wordToGuess : string
    guessedLetters: string[]
    isLoser:boolean
  }
  
  export default function HangmanWord({wordToGuess,guessedLetters,isLoser}: HangmanWordProps){
    console.log(guessedLetters);
    console.log(wordToGuess);
    
    
    return (
  <>
  {isLoser ?
  <h1 className="uppercase text-center md:text-2xl text-slate-800 mt-2 mb-11">nice try, refresh to try agian! 👾</h1>
   : <h1>good luck h,ey</h1>}
  
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