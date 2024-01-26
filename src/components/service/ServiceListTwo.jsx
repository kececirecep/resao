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


const ServiceListTwo = (props) => {
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
                            <div key={index} className='relative group rounded-sm text-center shadow-xl bg-gradient-to-r from-[#DC2828] via-[#EC0D4D] to-[#DC2828] text-white overflow-hidden'>
                                <div className='p-4 relative z-10'>
                                    <span className='text-5xl relative inline-block'>
                                        {item.icon}
                                    </span>
                                    <h2 className='text-2xl py-4'>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div className='absolute top-0 right-0 w-0 h-0 transform translate-x-2 -translate-y-2 group-hover:w-24 group-hover:h-24 group-hover:bg-white group-hover:rounded-bl-full transition-all duration-200'></div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ServiceListTwo