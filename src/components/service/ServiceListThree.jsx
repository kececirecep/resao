import React from 'react'
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import { Link } from 'react-router-dom';


const serviceList = [
    {
        icon: <FiCast />,
        title: 'Business Stratagy',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/service-details'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/service-details'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/service-details'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/service-details'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/service-details'
    },
    {
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        url: '/service-details'
    }
]


const ServiceListThree = (props) => {
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium text-center py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {serviceList.map((item, index) => {
                    return (
                        <Link to={item.url}>
                            <div key={index} className='bg-[#F5F6F9] relative'>
                                <div className='before:block before:content-[""] before:absolute before:bottom-0 before:w-0 before:h-1   before:bg-red-500 before:transition-opacity before:opacity-0 group'>
                                    <div className='p-4'>
                                        <span className='text-4xl'>{item.icon}</span>
                                        <h2 className='text-2xl py-4'>{item.title}</h2>
                                        <p className='text-[#1d1d24bf]'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ServiceListThree