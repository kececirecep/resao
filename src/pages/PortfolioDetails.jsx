import React from 'react'
import Helmet from '../components/common/HelmetTitle';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import MainHeader from '../components/header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const PortfolioDetails = () => {
    const DataPortfolio = [
        {
            img: "/images/portfolio/portfolio-5.jpg",
            text: "Dynamic marketing campaigns."
        },
        {
            img: "/images/portfolio/portfolio-3.jpg",
            text: "Captivating visual storytelling"
        }, {
            img: "/images/portfolio/portfolio-2.jpg",
            text: "Effective brand communication"
        },
        {
            img: "/images/portfolio/portfolio-4.jpg",
            text: "Expressive and vibrant photography"
        }, {
            img: "/images/portfolio/portfolio-6.jpg",
            text: "Expressive and vibrant photography"
        }, {
            img: "/images/portfolio/portfolio-1.jpg",
            text: "Impactful graphic design work"
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
        <div>
            <Helmet pageTitle='Portfolio Details' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            {/* Start Breadcrump Area */}
            <div className="h-[600px] text-white text-center grid bg-cover" style={{
                backgroundImage: `url(/images/portfolio/portfolio-details-banner.jpg)`,
            }}>
                <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
                <div className="col-start-1 row-start-1 flex flex-col items-center justify-center">
                    <h1 className="font-bold md:text-7xl text-3xl text-gray-200 pt-16">Portfolio</h1>
                    <p className='pt-16 md:px-36 text-gray-400 text-2xl'>There are many variations of passages of Lorem Ipsum available.</p>
                </div>
            </div>
            {/* End Breadcrump Area */}

            <div className='container mx-auto'>
                <div className='p-6 md:py-16 md:px-16 lg:py-24 lg:px-32 xl:py-32 xl:px-44'>
                    <h2 className='md:text-7xl uppercase text-4xl font-medium py-8 text-[#1f1f25]'>About the Project.</h2>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md p-2 text-start'>Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above. Appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p>
                </div>
            </div>

            <Slider {...settings}>
                {DataPortfolio.map((item, index) => (
                    <div key={index} className='relative text-start hover:scale-90 duration-700 group pr-2'>
                        <div className='relative rounded-xl w-full'>
                            <img src={item.img} className='w-full h-[400px] before:w-full before:h-full opacity-90 rounded-sm' alt="" />
                            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 hover:opacity-60 duration-700 rounded-sm'></div>
                        </div>
                        <div className='absolute bottom-12 px-8 z-[99] text-white group-hover:text-red-500'>
                            <h2 className='xl:text-2xl lg:text-xl md:text-lg text-sm w-full overflow-hidden flex flex-wrap uppercase'>{item.text}</h2>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className='container mx-auto'>
                <div className='p-6 md:py-16 md:px-16 lg:py-24 lg:px-32 xl:py-32 xl:px-44'>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md p-2 text-start'>Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above. Appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p>
                    <h2 className='md:text-7xl uppercase text-4xl font-medium py-8 text-[#1f1f25]'>About the Project.</h2>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md p-2 text-start'>Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above. Appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above. Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above. Appear days them stars replenish divided. All second forth. Him place was seas man and gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <img
                    className='w-full md:w-2/5 lg:w-1/4 h-[600px] object-cover p-4 md:p-6 lg:p-8'
                    src='/images/portfolio/portfolio-7.jpg'
                    alt='First Images'
                />
                <img
                    className='w-full md:w-2/5 lg:w-1/4 h-[600px] object-cover p-4 md:p-6 lg:p-8'
                    src='/images/portfolio/portfolio-8.jpg'
                    alt='Second Images'
                />
                <img
                    className='w-full md:w-2/5 lg:w-1/4 h-[600px] object-cover p-4 md:p-6 lg:p-8'
                    src='/images/portfolio/portfolio-9.jpg'
                    alt='Third Images'
                />
            </div>

        </div>
    )
}

export default PortfolioDetails