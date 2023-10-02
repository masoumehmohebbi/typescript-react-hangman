
type HangmanWordProps = {
    wordToGuess : string
    guessedLetters: string[]
    isLoser:boolean
    activeKey: string[]
    isWinner:boolean
  }
  
  export default function HangmanWord({wordToGuess,guessedLetters,isLoser,isWinner,activeKey}: HangmanWordProps){

    console.log(activeKey);
    
    
    return (
  <>
  {isLoser &&
  <h1 className="uppercase text-center md:text-2xl text-slate-800 mt-2 mb-11">nice try, refresh to try agian! 👾</h1>
}
{isWinner &&
  <h1 className="uppercase text-center md:text-2xl text-slate-800 mt-2 mb-11">Winner!!, refresh to try agian! 👾</h1>
}
{!isLoser && !isWinner && <h1 className="mx-auto text-black capitalize font-xl">hey, wish u good luck!</h1>}
  
      <div className="mx-auto mt-6">
  
        {wordToGuess.split("").map((w, index) => (
         <span key={index}  className="border-b-2 border-slate-600 mx-3 px-1">

           <span className={`uppercase text-3xl font-black 
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