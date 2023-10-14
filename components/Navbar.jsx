"use client"

import React from 'react';
import { AiFillPhone, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
  return (
    <nav className='w-full items-center justify-between flex bg-lime-950 p-3' > 
    <div className='flex items-center' >
    <AiOutlineMenu onClick={()=>console.log("clicked")} style={{fontSize:"1.5rem", marginRight:"10px"}}/>
    <h3 className='md:text-xl text-lg font-extrabold text-white ' >Taalim School of Music</h3>
    </div>
     <div className='flex flex-1 items-center justify-end pr-5'>
      <AiFillPhone style={{fontSize:"1.5rem"}}  />
      <h3 className='md:text-xl text-lg font-semibold text-white ml-2 ' >+919830995366</h3>
     </div>
    </nav>
  )
}

export default Navbar