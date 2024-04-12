import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Maincarouseldata } from './Maincarouseldata';
import 'react-alice-carousel/lib/alice-carousel.css'; 

const Maincarousel = () => {

    const items = Maincarouseldata.map((item)=> <img className='cursor-pointer object-cover h-96 w-full'
    role='presentation' src={item.image} alt=""/>)


return (
    <div className='carousel-container'>
      <AliceCarousel items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1500}
      infinite



      />
    </div>
  );
};

export default Maincarousel;
