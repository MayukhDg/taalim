"use client"

import { menuLinks } from '@/constants';
import React, { useState } from 'react';
import { AiFillPhone, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [open, setIsOpen] = useState(false);
  
  return (
    <nav className='w-full items-center justify-between flex bg-lime-950 p-3' > 
    <div className='flex items-center relative' >
    { !open? <AiOutlineMenu onClick={()=>setIsOpen(true)} style={{fontSize:"1.5rem", marginRight:"10px"}}/>:
    <AiOutlineClose onClick={()=>setIsOpen(false)} style={{fontSize:"1.5rem", marginRight:"10px"}}/>
    }
    <h3 className='md:text-xl text-lg font-extrabold text-white ' >Taalim School of Music</h3>
    </div>
     <div className='flex flex-1 items-center justify-end pr-5'>
      <AiFillPhone style={{fontSize:"1.5rem"}}  />
      <h3 className='md:text-xl text-lg font-semibold text-white ml-2 ' >+919830995366</h3>
     </div>
     { open && <div className='absolute top-11 left-1 bg-cyan-950 rounded-2xl' >
      <ul className='p-3 flex flex-col gap-3' >
       { menuLinks.map((item, index)=>(
          <li className='text-white' key={index}>
           {item}
          </li>
       )) } 
      </ul>
     </div> }
    </nav>
  )
}

export default Navbar