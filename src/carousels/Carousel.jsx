// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Slider {...settings}>


        {images.map((image, index) => (
          <div key={index} className=' h-[30vh] w-full p-2 text-center'>
            <img className='w-full onject-fit h-[28vh]' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}


      </Slider>
    </div>
  );
};

export default Carousel;
