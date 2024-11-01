import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardBox from "../Card/cardBox";
// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
      onClick={onClick}
    >
      ➜
    </button>
  );
};

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
      onClick={onClick}
    >
      ←
    </button>
  );
};

const RecomendSlideBanner = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not available
  }

  console.log("Product:", product);
  return (
    <div className="w-full max-w-screen-xl mx-auto relative overflow-hidden rounded-lg">
      <Slider {...settings}>
        <div className="relative">
          <CardBox product={product} />
        </div>
        <div className="relative">
          <CardBox product={product} />
        </div>
        <div className="relative">
          <CardBox product={product} />
        </div>
      </Slider>
    </div>
  );
};

export default RecomendSlideBanner;
