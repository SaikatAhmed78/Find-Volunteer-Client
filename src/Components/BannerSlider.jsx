import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../src/assets/banner/ocg-saving-the-ocean-_1j7_atc0z8-unsplash.jpg';
import banner2 from '../../src/assets/banner/pexels-rdne-6646917.jpg';
import banner3 from '../../src/assets/banner/pexels-rdne-6647026.jpg';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };

  const banners = [
    {
      image: banner1,
      title: 'Protect the Ocean, Save the Future',
      subtitle: 'Every action counts. Join us in our mission.',
    },
    {
      image: banner2,
      title: 'Empower Communities Through Action',
      subtitle: 'Your support can change lives forever.',
    },
    {
      image: banner3,
      title: 'Shape the Future Together',
      subtitle: 'Be the change you want to see in the world.',
    },
  ];

  return (
    <div className="banner-slider h-[600px] mb-10 mt-20 relative overflow-hidden rounded-lg">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="h-[600px] relative">
            <img
              src={banner.image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 drop-shadow-2xl">
                {banner.title}
              </h2>
              <p className="text-lg md:text-2xl text-gray-300 max-w-2xl px-6 leading-relaxed">
                {banner.subtitle}
              </p>

              <Link to="/aboutUs">
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
