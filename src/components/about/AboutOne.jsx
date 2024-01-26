import React from 'react'
import ButtonOne from '../buttons/ButtonOne'

const AboutOne = (props) => {
    return (
        <section className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''} 
            <div className="flex items-center">
                <div className="justify-center flex-1 max-w-6xl mx-auto md:px-6">
                    <div className="flex flex-wrap">
                        <div className={`w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">
                            <div className="relative lg:max-w-md">
                                <img src="/images/about/about-01.jpg" alt="aboutimage"
                                    className="relative z-10 object-cover w-full h-96 rounded-xl" />
                            </div>
                        </div>
                        <div className={`w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">
                            <div className="pl-4 mb-6 border-l-4 border-red-500 ">
                                <span className="text-sm text-gray-600 uppercase  font-semibold">Who we are?</span>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                                amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                                amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
                                amet.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                Lorem ipsum dolor sit amet.
                            </p>
                            <ButtonOne url="/about" btnTitle="Learn More"  />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOne