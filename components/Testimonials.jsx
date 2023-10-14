import React from 'react';
import { testimonials } from '@/constants';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section className='flex flex-col px-3 py-5 w-full items-center gap-3 bg-emerald-900' id="testimonials" >
      <h3 className='uppercase md:text-3xl text-lg font-extrabold text-teal-500' >What Our Students say</h3>
    <div className='flex flex-wrap gap-3 justify-center' >
      { testimonials.map((item, idx)=>(
      <TestimonialCard 
       key={idx}
       name={item.name}
       content={item.content}
       image={item.image}
      />
      )) }
      </div>  
    </section>
  )
}

export default Testimonials