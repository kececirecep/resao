import React, { useState } from 'react';
import Helmet from '../components/common/HelmetTitle';

import ModalVideo from 'react-modal-video';

import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { PiQuotes } from "react-icons/pi";
import { IoMdPlay } from "react-icons/io";


import MainHeader from '../components/header/MainHeader';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 100%;
`;

const BlogDetails = (props) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Helmet pageTitle='Blog Details' />

            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <div className=''>
                {/* Start Breadcrump Area */}
                <div className="h-[600px] text-white text-center grid bg-cover" style={{
                    backgroundImage: `url(/images/about/about-details-banner.jpg)`,
                }}>
                    <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
                    <div className="col-start-1 row-start-1 container mx-auto flex flex-col items-center justify-center">
                        <h1 className="font-bold text-4xl p-2 lg:text-7xl text-gray-200 pt-20">The Home of the Future <br /> Could Bebes</h1>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Blog Details */}
                <div className='container mx-auto'>
                    <div className={`${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                        <div className="py-8 px-0 md:px-12 lg:px-24 xl:px-40 flex justify-center">
                            <img src="/images/about/about-details-banner.jpg" alt="Blog Details Images" className='w-full h-[300px] object-cover' />
                        </div>
                        <ul className="lg:px-40 px-4 flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-12 text-[#1d1d24bf] text-md">
                            <li className='flex items-center gap-4 font-medium'><span className='text-md lg:text-xl'><FiClock /></span>May 18, 2020</li>
                            <li className='flex items-center gap-4 font-medium'><span className='text-md lg:text-xl '><FiUser /></span>Joe Due</li>
                            <li className='flex items-center gap-4 font-medium'><span className='text-md lg:text-xl'><FiMessageCircle /></span>15 Comments</li>
                            <li className='flex items-center gap-4 font-medium'><span className='text-md lg:text-xl'><FiHeart /></span>Like</li>
                        </ul>
                        <p className='md:text-lg text-md text-[#1d1d24bf] lg:pt-14 pt-4 xl:px-40 p-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</p>
                        <p className='md:text-lg text-md text-[#1d1d24bf] lg:pt-14 pt-4 xl:px-40 p-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</p>

                        <p className='md:text-lg text-md text-[#1d1d24bf] lg:pt-14 pt-4 xl:px-40 p-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend toitrrepeat predefined chunks.</p>
                    </div>
                    <div className={`py-8 px-0 md:px-12 lg:px-24 xl:px-40 flex justify-center ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                        <img src="/images/about/about-details-01.jpg" alt="Blog Details Images" className='w-full h-[300px] object-cover' />
                    </div>
                    <div className="flex flex-col justify-center xl:flex-row p-8 xl:px-40 pt-12">
                        <div className={`flex-shrink-0 ${props.animate ? 'wow animate__fadeInLeft' : ''}`} data-wow-duration="1s">
                            <img
                                src="/images/blog/blogList.webp"
                                alt="Blog Post"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className={`flex-1 px-4 md:px-24 py-12 ${props.animate ? 'wow animate__fadeInRight' : ''}`} data-wow-duration="1s">
                            <div className=''>
                                <h2 className='text-xl md:text-2xl lg:text-3xl text-[#1f1f25] pb-4'>Ordered & Unordered Lists</h2>
                                <ul className="list-disc md:text-lg text-md text-[#1d1d24bf]">
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                </ul>
                            </div>
                            <div className='pt-12'>
                                <h2 className='text-xl md:text-2xl lg:text-3xl text-[#1f1f25] pb-4'>Ordered & Unordered Lists</h2>
                                <ul className="list-disc md:text-lg text-md text-[#1d1d24bf]">
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    <li className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`2xl:px-40 p-2 py-4 lg:py-8 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                        <div className='p-3 text-[#1d1d24bf]'>
                            <span className='flex justify-end text-5xl'><PiQuotes /></span>
                            <h2 className='xl:text-2xl lg:text-xl md:text-lg text-md font-semibold text-center italic'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</h2>
                        </div>
                    </div>

                    <div className={`py-8 flex justify-center relative ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                        <img src="/images/about/about-details-banner.jpg" alt="Blog Images" className='z-10 w-full h-[400px] object-cover' />
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="YDXQ_nociO4" onClose={() => setOpen(false)} />
                        <button className="group hover:bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center rounded-full bg-[#ffffff31] border-2 border-white shadow-2xl w-24 h-24 duration-500 hover:scale-75" onClick={() => setOpen(true)}>
                            <span className='text-3xl transition-colors duration-500 text-red-500 group-hover:text-white'>
                                <IoMdPlay /> 
                            </span>
                        </button>
                    </div>

                </div>
                {/* End Blog Details */}
            </div>
        </>
    )
}

export default BlogDetails