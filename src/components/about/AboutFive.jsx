import React from 'react'
import { SiBuildkite } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';



const AboutFive = (props) => {
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start py-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className={`flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">
                        <span className="text-6xl text-gray-700 py-4"><SiBuildkite /></span>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Let us handle
                                <br className="hidden md:block" />
                                your next
                                destination
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div>
                            <Link to="/about" className="inline-flex items-center font-semibold text-deep-purple-accent-400">Learn more <IoIosArrowForward /></Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className={`object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 ${props.animate ? 'wow animate__fadeInDown' : ''}`} 
                                data-wow-duration="1s"
                                src="/images/about/about-04.jpg"
                                alt=""
                            />
                            <img
                                className={`object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 ${props.animate ? 'wow animate__fadeInUp' : ''}`}
                                data-wow-duration="1s"
                                src="/images/about/about-03.jpg"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className={`object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 ${props.animate ? 'wow animate__fadeInRight' : ''}`}
                                data-wow-duration="1s"
                                src="/images/about/about-05.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive