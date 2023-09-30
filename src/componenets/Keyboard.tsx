
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
 type KeyboardProps = {
  setGuessedLetters:string[]
  activeKey:string[]
  UnactiveKey:string[]
 }
function Keyboard({setGuessedLetters,activeKey,UnactiveKey}:KeyboardProps) {

  const handleClick=(key:string, e:React.MouseEvent<HTMLButtonElement>)=>{
    setGuessedLetters((prev)=>[...prev,key])
    e.currentTarget.disabled = true;
    // e.currentTarget.style.color="gray"

  }
  return (

<div className="grid grid-cols-9 w-[70%] mx-auto mt-11">
  {KEYS.map((key)=>{
      const isActive = activeKey.includes(key)
      const unActive = UnactiveKey.includes(key)
      

  return  <button 
    // disabled={isDisabled}
    onClick={(e)=>handleClick(key,e)}
    className={` ${isActive && "!text-green-500 opacity-60"}
    ${unActive && "!text-red-500 opacity-60"}
    col-span-1 rounded-md font-bold text-slate-800 aspect-square border m-1 border-yellow-600 text-lg capitalize`}
    key={key}>
      {key}
      </button>
})}
</div>

  )
}

export default Keyboard