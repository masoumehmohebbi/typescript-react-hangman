
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
  isLoser:boolean
 }
function Keyboard({setGuessedLetters,activeKey,UnactiveKey,isLoser}:KeyboardProps) {

  const handleClick=(key:string, e:React.MouseEvent<HTMLButtonElement>)=>{
    setGuessedLetters((prev)=>[...prev,key])
    e.currentTarget.disabled = true;
    // e.currentTarget.style.color="gray"

    if (isLoser) {
      console.log(e);
      
    }

  }
  return (

<div className="grid grid-cols-9 w-11/12 md:w-[70%] mx-auto mt-11">
  {KEYS.map((key)=>{
      const isActive = activeKey.includes(key)
      const unActive = UnactiveKey.includes(key)
      

  return  <button 
    disabled={isLoser}
    // disabled={isDisabled}
    onClick={(e)=>handleClick(key,e)}
    className={` ${isActive && "!text-green-500 opacity-60"}
    ${unActive && "!text-red-500 opacity-60"}

    ${isLoser && "opacity-40"}

   
    col-span-1 bg-yellow-100 duration-500 hover:scale-105 transition-all ease-in-out rounded-md font-bold text-slate-800 aspect-square border m-1 border-yellow-600 text-lg capitalize`}
    key={key}>
      {key}
      </button>
})}
</div>

  )
}

export default Keyboard