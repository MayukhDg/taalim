import React from 'react';

const Home = () => {
  return (
    <section className='relative w-screen flex flex-col items-center py-5 px-3' >  
      <div className='bg-bg-image-1 bg-repeat-x absolute inset-0 w-screen -z-30 ' />
      <h1 className='text-3xl font-extrabold text-teal-900  '  >Taalim School of Music
by Srabani Chakraborty
</h1>
<video src='/Video.mp4' className='mt-3' controls autoPlay />
<div className='flex flex-col flex-1 justify-start items-center pt-5' >
<h4 className='text-3xl font-extrabold text-teal-900'>We specialize in voice training for Eastern Classical Genres.</h4>
<button className='font-2xl p-4 font-semibold text-neutral-400 cursor-pointer bg-lime-900 mt-3 rounded-3xl ' >Sign Up for a free Voice Training workshop</button>
</div>
    </section>
  )
}

export default Home