import React from 'react'

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";


import { Link } from 'react-router-dom';

const TeamContent = [
    {
        images: 'team-1.jpg',
        title: 'Jone Due',
        designation: 'Sr. Web Developer',
        description: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }, {
        images: 'team-4.png',
        title: 'Jone Due',
        designation: 'Sr. Web Developer',
        description: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }, {
        images: 'team-3.jpg',
        title: 'Jone Due',
        designation: 'Sr. Web Developer',
        description: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }, {
        images: 'team-2.jpg',
        title: 'Jone Due',
        designation: 'Sr. Web Developer',
        description: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }
];

const TeamOne = (props) => {

    return (
        <div className={`${props.bgColor}`}>
            {props.title ? (
                <div className='md:text-center text-start py-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-center text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`py-2 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {TeamContent.map((item, i) => (
                        <div key={i} className="items-center bg-[#fdfdfd] rounded-lg shadow sm:flex group overflow-hidden">
                            <div className='overflow-hidden group-hover:opacity-80 transition-opacity'>
                                <img className="transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out object-cover w-[300px] h-[230px] rounded-lg sm:rounded-none sm:rounded-l-lg" src={`/images/team/${item.images}`} alt="Team Images" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900">{item.title}</h3>
                                <span className="text-gray-500">{item.designation}</span>
                                <p className="mt-3 mb-4 font-light text-gray-500">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    {item.socialNetwork.map((social, index) => (
                                        <li key={index} className='hover:text-red-500 duration-500'><Link target='_blank' to={`${social.url}`}>{social.icon}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamOne