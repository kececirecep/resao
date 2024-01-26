import React from 'react'
import { MdSubdirectoryArrowRight } from "react-icons/md";


const AboutSix = (props) => {
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div>
                        <img
                            className={`object-cover w-full h-56 rounded shadow-lg sm:h-96 ${props.animate ? 'wow animate__fadeInLeft' : ''}`}
                            data-wow-duration="1s"
                            src="/images/about/about-03.jpg"
                            alt=""
                        />
                    </div>
                    <div className={`flex flex-col justify-center  ${props.animate ? 'wow animate__fadeInRight' : ''}`} data-wow-duration="1s">
                        <div className="max-w-xl mb-6 pl-2">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                The quick, brown fox
                                <br className="hidden md:block" />
                                jumps over
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-deep-purple-accent-400">
                                        a lazy dog
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-600 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-bold tracking-widest uppercase pl-2">
                            Features
                        </p>
                        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 pl-2 text-gray-600">
                            <ul className="space-y-3">
                                <li className="flex"><MdSubdirectoryArrowRight /> A slice of heaven</li>
                                <li className="flex"><MdSubdirectoryArrowRight /> Disrupt inspire</li>
                                <li className="flex"><MdSubdirectoryArrowRight /> Preliminary thinking</li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex"><MdSubdirectoryArrowRight /> Flipboard curmudgeon</li>
                                <li className="flex"><MdSubdirectoryArrowRight /> Storage shed</li>
                                <li className="flex"><MdSubdirectoryArrowRight /> Satoshi Nakamoto</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSix