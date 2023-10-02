
type HangmanWordProps = {
    wordToGuess : string
    guessedLetters: string[]
    isLoser:boolean
    isWinner:boolean
  }
  
  export default function HangmanWord({wordToGuess,guessedLetters,isLoser,isWinner}: HangmanWordProps){

    return (
  <>
  {isLoser &&
  <h1 className="uppercase text-center md:text-2xl text-slate-800 mt-11 md:mt-3 mb-11 ml-4 min-[400px]:ml-0">nice try, <a href="#" onClick={()=>window.location.reload()} className="text-blue-700 font-semibold">Click here</a> to try agian! 😵</h1>
}
{isWinner &&
  <h1 className="uppercase text-center md:text-2xl text-slate-800 mt-11 md:mt-3 mb-11 ml-4 min-[400px]:ml-0">Winner!!, <a onClick={()=>window.location.reload()} className="text-blue-700 font-semibold" href="#">Click here</a> to try agian! 🎉</h1>
}
{!isLoser && !isWinner && <h1 className="uppercase text-center md:text-2xl text-slate-800 mt-11 md:mt-3 mb-11 ml-4 min-[400px]:ml-0">hey, wish u good luck! 👾</h1>}
  
      <div className="mx-auto mt-16">
  
        {wordToGuess.split("").map((w, index) => (
         <span key={index}  className="border-b-2 border-slate-600 mx-3 px-1">

           <span className={`uppercase text-2xl sm:text-3xl font-black 
           ${isLoser && !guessedLetters.includes(w) && 'text-red-500'}
           ${guessedLetters.includes(w) || isLoser ? "visible" : "invisible"
          }`} >
            {w}
          </span>
         </span>
  
        ))}
      </div>
  </>
    );
    
  }