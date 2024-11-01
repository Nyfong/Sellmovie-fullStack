import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SlideBanner = () => {
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

  return (
    <div className="w-full max-w-screen-xl mx-auto relative overflow-hidden rounded-lg">
      <Slider {...settings}>
        <div className="relative">
          <Link to="">
            <img
              src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQbaNCfa0JMphZE_AxbUer3uvM6ficl337o3Rn7glz6j5BFiYQKMWaR3QVEio8siRp1j3GfFG1mZGB21nzzLbuImeYf0hfgay_N4h0tSS2LEjtwjKJjTrUnJfWPYeToXiwoG3XGmwx6M2hdjhSQ0FAAd1.jpg?r=1a9"
              alt="Banner 1"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg md:text-2xl px-4 py-2 rounded">
              Explore Our Features
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to="">
            <img
              src="https://content-management-files.canva.com/1c13d213-d8c5-4e8f-aaf7-e565216bd6d7/og_image_free.png"
              alt="Banner 1"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg md:text-2xl px-4 py-2 rounded">
              Explore Our Features
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to="">
            <img
              src="https://static.standard.co.uk/2023/08/10/09/disneyp.jpg?width=1200&height=900&fit=crop"
              alt="Banner 2"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg md:text-2xl px-4 py-2 rounded">
              Discover New Services
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to="">
            <img
              src="https://assets.aboutamazon.com/dims4/default/dc6e6ef/2147483647/strip/false/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Ff8%2F2a%2Fe21459814491b9aac0134bfffaf8%2Fcr-1920x1080.jpg"
              alt="Banner 3"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-lg md:text-2xl px-4 py-2 rounded">
              Join Our Community
            </div>
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default SlideBanner;
