import React from 'react'
import ButtonOne from '../buttons/ButtonOne'

const ContactFormThree = (props) => {
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`${props.bgColor} wow animate__fadeIn`} data-wow-duration="3.5s">
                <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-10 shadow-[0_2px_10px_-3px_rgba(237, 6, 37, 0.3)] rounded-3xl max-w-6xl mx-auto bg-white text-[#333] my-6 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-red-500 before:h-full max-md:before:hidden">
                    <div>
                        <h2 className="text-3xl font-extrabold">Get In Touch</h2>
                        <p className="text-sm text-gray-400 mt-3 py-8">Have a specific inquiry or looking to explore new opportunities? Our
                            experienced team is ready to engage with you.</p>
                        <form className="ml-auo space-y-4 ">
                            <input type='text' placeholder='Name'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-red-700" />
                            <input type='email' placeholder='Email'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-red-700" />
                            <input type='text' placeholder='Subject'
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-red-700" />
                            <textarea placeholder='Message' rows="6"
                                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-red-700"></textarea>
                            <ButtonOne btnTitle="Send" />
                        </form>
                        <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
                            <li className="flex items-center hover:text-blue-500">

                            </li>
                            <li className="flex items-center text-current hover:text-blue-500">

                            </li>
                        </ul>
                    </div>
                    <div className="w-full z-20 px-2 py-12">
                        <img src="images/contact/contact-1.jpg" className='w-full rounded-lg sm:rounded-none md:rounded-tr-3xl md:rounded-br-3xl ' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactFormThree