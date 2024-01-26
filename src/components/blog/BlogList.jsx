import React from 'react'
import BlogArticleList from './BlogArticleList'


import { FaCalendarAlt, FaBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';



const BlogList = (props) => {
    const BlogList = BlogArticleList.slice(0, 6)
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 container mx-auto ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {BlogList.map((item, index) => (
                    <div key={index} className='flex flex-col md:flex-row justify-start group'>
                        <Link to="/blog-details">
                            <div className='overflow-hidden group-hover:opacity-80 transition-opacity'>
                                <img
                                    src={item?.imageSrc}
                                    alt=""
                                    className='rounded-lg object-cover w-full h-32 md:h-48 lg:h-52 transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out'
                                />
                            </div>
                        </Link>
                        <div className='p-2 lg:p-8 w-full'>
                            <div className='flex flex-col lg:flex-row gap-4 text-[14px] py-4 text-gray-600 font-medium'>
                                <span className='flex items-center gap-2 '><FaCalendarAlt />October 18, 2023</span>
                                <span className='flex items-center gap-2'><FaBookmark />Work</span>
                            </div>
                            <Link to="/blog-details"><h2 className='text-xl md:text-lg lg:text-3xl font-bold group-hover:text-red-500 duration-400'>{item.title}</h2></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList