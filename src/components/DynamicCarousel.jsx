import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DynamicCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchedImages = [
      '../src/assets/pic1.jpg',
      '../src/assets/pic2.jpg',
      '../src/assets/pic3.jpg',
    ];
    setImages(fetchedImages);
  }, []);

  return (
    <Carousel>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Dynamic ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default DynamicCarousel;
