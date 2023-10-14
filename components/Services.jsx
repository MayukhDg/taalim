"use client";

import React from 'react'
import ServiceCard from './ServiceCard';
import { vocalTraining } from '@/constants';
import { instrumentClasses } from '@/constants';
import { BsFillFileMusicFill } from "react-icons/bs";
import { FaGuitar } from "react-icons/fa"


const Services = () => {
  return (
    <section id="services" className='flex flex-col bg-lime-800 p-4 gap-3.5 mx-auto' > 
    <ServiceCard title={"Vocal Training"} icon={<BsFillFileMusicFill style={{fontSize:"3rem"}}/>} services={vocalTraining}/>
    <ServiceCard title={"Instrument Classes"} icon={<FaGuitar style={{fontSize:"3rem"}}/>} services={instrumentClasses}/>
    </section>
  )
}

export default Services