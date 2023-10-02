  const HEAD = (
    <div className="absolute border-t-8 border-red-900 p-1 px-2 flex items-center flex-col bg-yellow-500 w-11 h-11 top-[2.6rem] rounded-full md:left-[calc(100%_+_1.8rem)]">
      <div className="w-full justify-between flex items-center">
        <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
      </div>
      <div className="rotate-90 text-red-600">
        (
      </div>
    </div>
  )
  const BODY = (
    <div className="absolute bg-yellow-500 w-2 h-20 top-20 md:left-[calc(100%_+_3rem)]"></div>
  )
  const RIGHT_HAND = (
    <div className=" absolute bg-yellow-500 w-2 rotate-[60deg] origin-bottom-left h-16 top-16 md:left-[calc(100%_+_3rem)]"></div>
  )
  const LEFT_HAND = (
    <div className=" absolute bg-yellow-500 w-2 -rotate-[60deg] origin-bottom-right h-16 top-16 md:left-[calc(100%_+_3rem)]"></div>
  )
  const LEFT_FOOT = (
    <div className=" absolute bg-yellow-500 w-2 -rotate-[134deg] origin-bottom-right h-16 top-[91px] md:left-[calc(100%_+_2.7rem)]"></div>
  )
  const RIGHT_FOOT = (
    <div className=" absolute bg-yellow-500 w-2 rotate-[134deg] origin-bottom-left h-16 top-[91px] md:left-[calc(100%_+_3.4rem)]"></div>
  )

  const HUMAN_PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, LEFT_FOOT, RIGHT_FOOT]

  type HangmanDrawingProps = {
    numOFIncorrectLetters: number
  }
export default function HangmanDrawing({numOFIncorrectLetters}:HangmanDrawingProps) {

    return <section className="mt-9">
      <div className="relative w-[280px] mx-auto h-52 md:h-96 flex justify-center items-center">
        
        {HUMAN_PARTS.slice(0, numOFIncorrectLetters)}
      
        <div className="absolute bg-yellow-900 h-11 w-2 top-0 left-[94%] md:left-[calc(100%_+_3rem)]"></div>
        <div className="absolute h-2 w-32 md:w-48 left-[140px] bg-yellow-900 top-0"></div>
        <div className="h-full md:h-full bg-yellow-900 w-2 absolute bottom-0 left-[140px]"></div>
        <div className="w-4/5 md:w-full h-2 bg-yellow-900 absolute bottom-0"></div>
      </div>
    </section>
  }