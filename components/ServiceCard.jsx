import React from 'react'

const ServiceCard = ({title, icon, services}) => {
  return (
    <div className='w-full flex flex-col items-center rounded-3xl bg-gray-900 p-3 opacity-[0.8] saturate-100' >
     <div className='flex items-center gap-3' >
      <h3 className='text-3xl font-extrabold text-cyan-950 uppercase text-center' >{title}</h3>
      {icon}
     </div>
     <ul className='text-center pt-3' >
       { services.map((item, index)=>(
        <li className='font-extrabold text-2xl text-teal-500' key={index} >
        { item }
        </li>
       )) } 
     </ul>
    </div>
  )
}

export default ServiceCard