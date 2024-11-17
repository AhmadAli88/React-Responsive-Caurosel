import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialCarousel = () => {
  const testimonials = [
    { name: 'Alice', text: 'This is the best service I have ever used.' },
    { name: 'Bob', text: 'Amazing experience, highly recommend it!' },
    { name: 'Charlie', text: 'Top-notch quality and support.' },
  ];

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {testimonials.map((testimonial, index) => (
        <div key={index} style={{ padding: '20px', background: '#f4f4f4' }}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;
