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
    autoplaySpeed: 2500,
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
    <div className="w-full max-w-6xl mx-auto mt-6 px-4 md:px-0">
      <div className="rounded-2xl overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carusel;
