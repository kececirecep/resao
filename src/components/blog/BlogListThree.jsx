import React from 'react'
import BlogArticleList from './BlogArticleList'
import { Link } from 'react-router-dom'


const BlogListThree = (props) => {

    const BlogList = BlogArticleList.slice(0, 4)
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-24`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
                <div>
                    <h2 className={`mb-6 md:text-7xl uppercase text-center lg:text-start text-5xl font-medium md:font-extralight py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title ? props.title : 'Blogs'}</h2>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                    {
                        BlogList.map((item, index) => {
                            return (
                                <div key={index} className="px-4 cursor-pointer rounded-lg group overflow-hidden hover:rotate-2 duration-300 hover:scale-95">
                                    <Link to="/blog-details">
                                        <img src={item.imageSrc} alt={`Blog Post ${index}`} className="w-full h-52 rounded-lg group-hover:scale-105 object-cover duration-700" />
                                    </Link>
                                    <div className="py-6">
                                        <span className="text-sm block text-gray-400 mb-2">{item.date} | {item.author}</span>
                                        <Link to="/blog-details">
                                            <h3 className="text-xl font-bold text-[#333] group-hover:text-red-500 transition-all">{item.title}</h3>
                                            <p className='pt-4'>{item.description}</p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogListThree