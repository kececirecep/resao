import React from 'react'
import { PiBriefcaseThin, PiOfficeChairThin, PiHeadsetThin } from "react-icons/pi";


const ContactBoxes = (props) => {
    return (
        <div className={`container mx-auto pt-12 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
            <div className='flex flex-wrap justify-center'>
                <div className='text-gray-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-col items-center px-4 mb-8'>
                    <span className='text-6xl'><PiOfficeChairThin /></span>
                    <h2 className='py-2'>Production Office</h2>
                    <p className='py-2'>hello@youriste.com</p>
                </div>
                <div className='text-gray-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-col items-center px-4 mb-8'>
                    <span className='text-6xl'><PiHeadsetThin /></span>
                    <h2 className='py-2'>Production Office</h2>
                    <p className='py-2'>hello@youriste.com</p>
                </div>
                <div className='text-gray-400 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-col items-center px-4 mb-8'>
                    <span className='text-6xl'><PiBriefcaseThin /></span>
                    <h2 className='py-2'>Production Office</h2>
                    <p className='py-2'>hello@youriste.com</p>
                </div>
            </div>
        </div>

    )
}

export default ContactBoxes