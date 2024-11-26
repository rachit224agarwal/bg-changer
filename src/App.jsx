import React, { useState } from 'react'

const App = () => {
  const [color,setColor] = useState("gray")
  return (
    <div className='w-full h-screen '
    style={{backgroundColor: color }}  >
      <div className='flex flex-wrap justify-center '>
        <div className='flex flex-wrap gap-3 mt-8 rounded-xl px-4 py-3 outline-none shadow-2xl inset-x-0' style={{backgroundColor: "gray"}}>
          {/* bg-grey in tailwind CSS  than button bar will also change its color */}
          <button onClick={()=> setColor("red")} className='px-2 py-3 rounded-full text-black bg-red-700' >RED</button>
          <button onClick={()=> setColor("#fc9403")} className='px-2 py-3 rounded-full text-black bg-orange-500'>Orange</button>
          <button onClick={()=> setColor("green")} className='px-2 py-3 rounded-full text-black text-xs bg-green-600' >GREEN</button>
          <button onClick={()=> setColor("lightgreen")} className='px-2 py-3 rounded-full text-black text-xs bg-green-300' >L-GREEN</button>
          <button onClick={()=> setColor("pink")} className='px-2 py-3 rounded-full text-black text-xs bg-pink-500' >PINK</button>
          <button onClick={()=> setColor("black")} className='px-2 py-3 rounded-full text-white text-xs bg-black'>BLACK</button>
          <button onClick={()=> setColor("white")} className='px-2 py-3 rounded-full text-black text-xs bg-white'>WHITE</button>
          <button onClick={()=> setColor("yellow")} className='px-2 py-3 rounded-full text-black text-xs bg-yellow-300'>YELLOW</button>
          <button onClick={()=> setColor("lightyellow")} className='px-2 py-3 rounded-full text-black text-xs bg-yellow-200'>L-YELLOW</button>
        </div>
      </div>
    </div>
  )
}

export default App
