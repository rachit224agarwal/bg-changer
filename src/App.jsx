import React, { useState } from 'react'

const App = () => {
  const [color,setColor] = useState("gray")
  return (
    <div className='w-full h-screen '
    style={{backgroundColor: color }}  >
      <div className='flex flex-wrap justify-center '>
        <div className='flex flex-wrap gap-3 mt-8 rounded-xl px-4 py-3 outline-none shadow-2xl inset-x-0' style={{backgroundColor: "gray"}}>
          {/* bg-grey in tailwind CSS */}
          <button onClick={()=> setColor("red")} className='px-2 py-3 rounded-full text-black ' style={{backgroundColor: "red"}}>RED</button>
          <button onClick={()=> setColor("#fc9403")} className='px-2 py-3 rounded-full text-black ' style={{backgroundColor: "#fc9403"}}>Orange</button>
          <button onClick={()=> setColor("green")} className='px-2 py-3 rounded-full text-black text-xs' style={{backgroundColor: "green"}}>GREEN</button>
          <button onClick={()=> setColor("lightgreen")} className='px-2 py-3 rounded-full text-black text-xs' style={{backgroundColor: "lightgreen"}}>L-GREEN</button>
          <button onClick={()=> setColor("pink")} className='px-2 py-3 rounded-full text-black text-xs' style={{backgroundColor: "pink"}}>PINK</button>
          <button onClick={()=> setColor("black")} className='px-2 py-3 rounded-full text-white text-xs' style={{backgroundColor: "black"}}>BLACK</button>
          <button onClick={()=> setColor("white")} className='px-2 py-3 rounded-full text-black text-xs' style={{backgroundColor: "white"}}>WHITE</button>
          <button onClick={()=> setColor("yellow")} className='px-2 py-3 rounded-full text-black text-xs' style={{backgroundColor: "yellow"}}>YELLOW</button>
          <button onClick={()=> setColor("lightyellow")} className='px-2 py-3 rounded-full text-black text-xs' style={{backgroundColor: "lightyellow"}}>L-YELLOW</button>
        </div>
      </div>
    </div>
  )
}

export default App
