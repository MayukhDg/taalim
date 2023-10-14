"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { carouselImages } from "@/constants";

const Slider = () => {
  return (
    <Carousel autoPlay showStatus={false}
    showThumbs={false}>
      { carouselImages.map((item, index)=>(
        <div className="h-full" key={index}>
         <img className="h-full" src={item} />  
        </div>
      )) }
    </Carousel>
  )
}

export default Slider