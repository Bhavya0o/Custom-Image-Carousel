




import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

 
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };


//   useEffect(() => {
//     if (!autoPlay) return;

//     const slideInterval = setInterval(nextSlide, interval);

//     // Cleanup interval on component unmount or when index changes to reset the timer
//     return () => clearInterval(slideInterval);
//   }, [currentIndex, autoPlay, interval]);

  return (
    <div className="carousel-container">


      {/* Left Navigation Arrow */}
      <button className="arrow-btn left-arrow" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>



      {/* Main Slide Track */}
      <div className="carousel-track-wrapper">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>



      {/* Right Navigation Arrow */}
      <button className="arrow-btn right-arrow" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>



      {/*  Dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
