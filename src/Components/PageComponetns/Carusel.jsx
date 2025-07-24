import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F92e57e86-6353-40f3-af75-a191d3779bf1_uz.jpg&w=1920&q=75",
    "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F01c0e754-cb9b-49d5-ad11-ccc05ad69238_uz.jpg&w=1920&q=75",
    "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa95649d2-ee7e-4606-a65e-262015e5b1c6_uz.jpg&w=1920&q=75",
    "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F9d9bc54e-009d-498f-abfe-1c0d0af77b7c_uz.jpg&w=1920&q=75",
    "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F303af063-dd09-41ad-a0fd-e7beeb22f4e0_uz.jpg&w=1920&q=75"
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto px-2 mt-6">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-1">
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;
