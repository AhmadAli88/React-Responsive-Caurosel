import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomArrowsCarousel = () => {
  const customArrow = (onClickHandler, hasPrevOrNext, label) => (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={!hasPrevOrNext}
      aria-label={label}
      style={{ backgroundColor: 'black', color: 'white', padding: '10px', margin: '10px' }}
    >
      {label}
    </button>
  );

  return (
    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev) =>
        customArrow(onClickHandler, hasPrev, 'Previous')
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        customArrow(onClickHandler, hasNext, 'Next')
      }
    >
      <div>
        <img src="https://via.placeholder.com/600x400?text=Custom+1" alt="Custom Slide 1" />
        <p className="legend">Custom Slide 1</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400?text=Custom+2" alt="Custom Slide 2" />
        <p className="legend">Custom Slide 2</p>
      </div>
    </Carousel>
  );
};

export default CustomArrowsCarousel;