import React from 'react'
import { Link } from 'react-router-dom';

const PortfolioCard = (props) => {
    const DataPortfolio = [
        {
            img: "/images/portfolio/portfolio-1.jpg",
            text: "Dynamic marketing campaigns",
            url: '/portfolio-details'
        },
        {
            img: "/images/portfolio/portfolio-2.jpg",
            text: "Captivating visual storytelling",
            url: '/portfolio-details'
        }, {
            img: "/images/portfolio/portfolio-3.jpg",
            text: "Effective brand communication",
            url: '/portfolio-details'
        },
        {
            img: "/images/portfolio/portfolio-4.jpg",
            text: "Expressive and vibrant photography",
            url: '/portfolio-details'
        }, {
            img: "/images/portfolio/portfolio-5.jpg",
            text: "Expressive and vibrant photography",
            url: '/portfolio-details'
        },
        {
            img: "/images/portfolio/portfolio-6.jpg",
            text: "Impactful graphic design work",
            url: '/portfolio-details'
        },
    ];

    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-900 py-2 px-4 lg:px-12 xl:px-48 duration-500 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {DataPortfolio.map((item, index) => {
                    return (
                        <Link to={item.url}>
                            <div key={index} className='group p-2 py-8 h-96 relative'>
                                <img src={item.img} className='w-full h-80 object-cover object-center shadow-md' alt='Portfolio Images' />
                                <div className="absolute bottom-16 left-1 px-4 duration-500 group-hover:bottom-0">
                                    <div className="max-w-md bg-white text-gray-600 p-6 shadow-lg h-28 group-hover:bg-gray-200">
                                        <h4 className="mt-1 text-xl uppercase overflow-hidden line-clamp-2 font-medium text-center">{item.text}</h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
                }
            </div>
        </div>
    );
}

export default PortfolioCard