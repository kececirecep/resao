import React from 'react';
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
    },
    {
        images: 'team-2.jpg',
        title: 'Jane Smith',
        designation: 'UI/UX Designer',
        description: 'Jane is responsible for crafting beautiful and user-friendly interfaces.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }, {
        images: 'team-3.jpg',
        title: 'Jane Smith',
        designation: 'UI/UX Designer',
        description: 'Jane is responsible for crafting beautiful and user-friendly interfaces.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }, {
        images: 'team-4.png',
        title: 'Jane Smith',
        designation: 'UI/UX Designer',
        description: 'Jane is responsible for crafting beautiful and user-friendly interfaces.',
        socialNetwork: [
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <GrInstagram />, url: 'https://instagram.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
        ]
    }
];

const TeamThere = (props) => {
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-center text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`py-2 px-4 mx-auto max-w-screen-xl lg:px-6 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                <div className="grid gap-8 mb-6 lg:mb-16 sm:grid-cols-2 md:grid-cols-4">
                    {TeamContent.map((item, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl group">
                            <div className="bg-[#fdfdfd] shadow group">
                                <div className='block overflow-hidden group-hover:opacity-80 transition-opacity relative'>
                                    <img className="w-full h-[380px] transition-transform duration-700 ease-in-out transform scale-100 group-hover:scale-125 object-cover" src={`/images/team/${item.images}`} alt="Team Member" />
                                    <div className="absolute inset-0 bg-black opacity-30 "></div>
                                    <span className="text-gray-300 font-medium absolute top-5 left-5 flex flex-col items-start justify-start">{item.designation}</span>
                                    <div className="absolute bottom-2 right-0 left-0 flex flex-col items-center justify-center">
                                        <h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
                                        <ul className="flex space-x-4 sm:mt-0 text-white text-lg py-2 opacity-0 group-hover:opacity-100 duration-700">
                                            {item.socialNetwork.map((social, index) => (
                                                <li key={index} className='rotate-180 group-hover:rotate-0 duration-700 z-50 opacity-100'><Link target='_blank' to={`${social.url}`}>{social.icon}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-red-500 to-black opacity-0 group-hover:opacity-20"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamThere;
