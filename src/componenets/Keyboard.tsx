import { useState } from "react";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

function Keyboard({setGuessedLetters}) {
 const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleClick=(key,e)=>{
    setGuessedLetters((prev)=>[...prev,key])
    e.currentTarget.disabled = true;
    setIsDisabled((is)=>!is)
  }
  return (
    <div className="grid grid-cols-9 w-[70%] mx-auto">
      {KEYS.map((key)=>(
        <button 
        // disabled={isDisabled}
        onClick={(e)=>handleClick(key,e)}
        className={`
        ${isDisabled && "text-gray-400"}
        col-span-1 rounded-md font-bold teact-slate-800 aspect-square border m-1 border-yellow-600 text-lg capitalize`}
        key={key}>
          {key}
          </button>
      ))}
    </div>
  )
}

export default Keyboard