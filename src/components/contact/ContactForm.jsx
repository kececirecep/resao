import React from 'react'
import ButtonOne from '../buttons/ButtonOne'

const ContactForm = (props) => {
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className="container mx-auto px-4 lg:px-20 lg:flex lg:justify-center lg:items-center">
                <div className={`w-full lg:w-2/3 p-8 my-4 md:px-12 lg:pl-20 lg:pr-5 mr-auto ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-3xl text-red-600 py-2 rounded-lg">Contact Us!</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="First Name*" />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Last Name*" />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email*" />
                        <input
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" placeholder="Phone*" />
                    </div>
                    <div className="my-4">
                        <textarea
                            placeholder="Message*"
                            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="my-2 w-full lg:w-1/2">
                        <ButtonOne btnTitle="Message" />
                    </div>
                </div>

                <div className={`w-full lg:w-1/3 px-8 py-12 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                    <img src="images/contact/contact-1.jpg" className='rounded-xl' alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactForm