import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <div style={{height: '50px', width: '350px'}}>
      <Carousel>
        <div>
          <img src='../src/assets/pic1.jpg' alt='Slide 1' />
          <p className='legend'>Slide 1</p>
        </div>
        <div>
          <img src='../src/assets/pic2.jpg' alt='Slide 2' />
          <p className='legend'>Slide 2</p>
        </div>
        <div>
          <img src='../src/assets/pic3.jpg' alt='Slide 3' />
          <p className='legend'>Slide 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
