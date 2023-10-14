import React from 'react';

const TestimonialCard = ({name, content, image}) => {
  return (
    <div className='flex flex-col items-center justify-start w-[30rem] bg-teal-950  p-5 rounded-xl' >
    <h4 className='md:text-xl text-lg font-extrabold text-white ' >{name}</h4>
    <img src={image} className="w-[10rem] rounded-full shadow-lg dark:shadow-black/20 h-32 mt-2" />
    <p className='md:text-xl text-lg font-extrabold text-white pt-4 ' >{content}</p>
    </div>
  )
}

export default TestimonialCard