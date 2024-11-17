import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      interval={3000}
      stopOnHover
    >
      <div>
        <img src="https://via.placeholder.com/600x400?text=Slide+1" alt="Slide 1" />
        <p className="legend">First Slide</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400?text=Slide+2" alt="Slide 2" />
        <p className="legend">Second Slide</p>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
