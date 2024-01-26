import React from 'react'
import { Link } from 'react-router-dom'

const ServiceListFive = (props) => {
    const ServiceData = [
        {
            img: "/images/service/service-vector-1.png",
            category: "Sales",
            heading: "Senior Account Executive",
            desc: "Learn how to adapt and thrive in the face of life's changes, embracing the opportunities they bring",
            url: '/service-details'
        }, {
            img: "/images/service/service-vector-2.png",
            category: "Sales",
            heading: "Junior Account Executive",
            desc: "Learn how to adapt and thrive in the face of life's changes, embracing the opportunities they bring",
            url: '/service-details'
        }, {
            img: "/images/service/service-vector-3.png",
            category: "Sales",
            heading: "Junior Account Executive",
            desc: "Learn how to adapt and thrive in the face of life's changes, embracing the opportunities they bring",
            url: '/service-details'
        }, {
            img: "/images/service/service-vector-4.png",
            category: "Sales",
            heading: "Junior Account Executive",
            desc: "Learn how to adapt and thrive in the face of life's changes, embracing the opportunities they bring",
            url: '/service-details'
        }, {
            img: "/images/service/service-vector-5.png",
            category: "Sales",
            heading: "Junior Account Executive",
            desc: "Learn how to adapt and thrive in the face of life's changes, embracing the opportunities they bring",
            url: '/service-details'
        }, {
            img: "/images/service/service-vector-6.png",
            category: "Sales",
            heading: "Junior Account Executive",
            desc: "Learn how to adapt and thrive in the face of life's changes, embracing the opportunities they bring",
            url: '/service-details'
        }
    ]

    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl text-center font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 container mx-auto ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                {ServiceData.map((item, index) => {
                    return (
                        <Link to={item.url}> 
                            <div key={index} className='bg-gray-50 p-4 m-2 rounded-md overflow-hidden hover:bg-gray-100 hover:scale-95 duration-300'>
                                <div className='flex flex-col lg:flex-row justify-start gap-12 items-center relative'>
                                    <img src={item.img} alt="" className='w-full h-[152px] object-contain' />
                                    <div>
                                        <h6 className='text-gray-400 text-lg font-medium'>{item.category}</h6>
                                        <h2 className='text-gray-900 text-3xl font-medium py-4'>{item.heading}</h2>
                                        <p className='text-gray-400 text-lg font-medium'>{item.desc}</p>
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

export default ServiceListFive