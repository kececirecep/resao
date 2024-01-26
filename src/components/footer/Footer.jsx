import React from 'react'
import { BsTwitterX,BsInstagram,BsFacebook,BsDribbble,BsGithub  } from "react-icons/bs";

import { Link } from 'react-router-dom';

const social = [
    { social: <BsFacebook />, link: 'https://www.facebook.com/' },
    { social: <BsDribbble />, link: 'https://www.dribbble.com/' },
    { social: <BsInstagram />, link: 'https://www.instagram.com/' },
    { social: <BsTwitterX />, link: 'https://twitter.com/' },
    { social: <BsGithub />, link: 'https://github.com/' },
]

const Footer = () => {
    return (
        <div className="bg-[#2c2e36] text-gray-400">
            <div className="w-full m-auto bg-whiterounded px-12">
                <div className="p-4 lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center sm:p-12 py-2">
                    <div className="p-2 md:p-0">
                        <img src="/images/logo/logo_white.png" width="200px" alt="" />
                    </div>
                    <div className='p-4 md:p-0'>
                        <ul className='flex items-center gap-4'>
                            {
                                social.map((item, index) => {
                                    return (
                                        <Link to={item.link} key={index} className='md:text-2xl text-md p-3 rounded-full hover:bg-gray-700 lg:hover:mb-2 duration-300'>{item.social}</Link>
                                    )
                                })
                            }  
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-white bg-[#26262e]">
                <div className="p-4 text-sm md:flex md:items-center md:justify-center">
                    <h2 className='text-gray-400 text-md text-center'>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer