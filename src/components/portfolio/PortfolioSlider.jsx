import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const PortfolioSlider = (props) => {
  const DataPortfolio = [
    {
      img: "/images/portfolio/portfolio-1.jpg",
      text: "Dynamic marketing campaigns.",
      url: '/portfolio-details'
    },
    {
      img: "/images/portfolio/portfolio-3.jpg",
      text: "Captivating visual storytelling",
      url: '/portfolio-details'
    }, {
      img: "/images/portfolio/portfolio-2.jpg",
      text: "Effective brand communication",
      url: '/portfolio-details'
    },
    {
      img: "/images/portfolio/portfolio-5.jpg",
      text: "Expressive and vibrant photography",
      url: '/portfolio-details'
    }, {
      img: "/images/portfolio/portfolio-6.jpg",
      text: "Expressive and vibrant photography",
      url: '/portfolio-details'
    }, {
      img: "/images/portfolio/portfolio-4.jpg",
      text: "Impactful graphic design work",
      url: '/portfolio-details'
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
      {props.title ? (
        <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
          <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
          <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
        </div>
      ) : ''}
      <div className='px-2'>
        <Slider {...settings}>
          {DataPortfolio.map((item, index) => (
            <div key={index} className={`relative text-start hover:scale-90 duration-700 group p-2 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
              <div className='relative rounded-xl w-full'>
                <img src={item.img} className='w-full before:w-full before:h-full opacity-90 rounded-xl' alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-60 duration-700 rounded-xl'></div>
              </div>
              <div className='absolute bottom-12 px-8 z-[99] text-white group-hover:text-red-500'>
                <Link to={item.url}> <h2 className='xl:text-2xl lg:text-xl sm:text-lg text-xl w-full overflow-hidden flex flex-wrap uppercase'>{item.text}</h2></Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioSlider;
