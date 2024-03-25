import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    speed: 2000, // Slide transition duration in milliseconds
    autoplaySpeed: 1000, // Time between each autoplay slide transition in milliseconds
    cssEase: "linear"
  };

  return (
    <div className="slider-container pt-20">
      <Slider {...settings} className="mx-auto w-3/4">
        <div className="bg-gray-200 h-64 flex justify-center items-center">
          <h3 className="text-3xl font-bold">slide 1</h3>
        </div>
        <div className="bg-gray-300 h-64 flex justify-center items-center">
          <h3 className="text-3xl font-bold"> slide 2</h3>
        </div>
        <div className="bg-gray-400 h-64 flex justify-center items-center">
          <h3 className="text-3xl font-bold"> slide 3</h3>
        </div>
        <div className="bg-gray-500 h-64 flex justify-center items-center">
          <h3 className="text-3xl font-bold">slide 4</h3>
        </div>
        <div className="bg-gray-600 h-64 flex justify-center items-center">
          <h3 className="text-3xl font-bold">slide 5</h3>
        </div>
        <div className="bg-gray-700 h-64 flex justify-center items-center">
          <h3 className="text-3xl font-bold">slide 6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleCarousel;
