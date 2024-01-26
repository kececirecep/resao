import React from 'react'
import BlogArticleList from './BlogArticleList'

import { RiUser3Line } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";

import PaginationThree from '../pagination/PaginationThree';
import { Link } from 'react-router-dom';


const BlogListTwo = (props) => {
    const BlogList = BlogArticleList.slice(0, 8)
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 px-2 container mx-auto ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {
                    BlogList.map((item, index) => {
                        return (
                            <div key={index} className="hover:rotate-2 duration-300 hover:scale-95">
                                <div className="flex flex-col overflow-hidden hover:bg-gray-50 duration-300 hover:shadow-md bg-white rounded-md pb-8">
                                    <Link to="/blog-details">
                                        <img className="h-56 rounded-t-md w-full object-cover" src={item?.imageSrc} alt='' />
                                        <div className="px-6 pt-4 mb-2 text-xl font-bold">
                                            <span>{item?.title}</span>
                                        </div>
                                    </Link>
                                    <div className="px-6 pt-2">
                                        <small className='flex items-center gap-1 text-gray-500 font-medium'><RiUser3Line />{item?.author} | {item?.date} <GoCalendar /></small>
                                        <Link to="/blog-details"><div className="overflow-hidden h-16 py-4">{item?.description}</div></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BlogListTwo