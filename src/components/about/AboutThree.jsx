import React from 'react'

const AboutThree = (props) => {
    return (
        <section className={`${props.bgColor} py-10 sm:py-16 lg:py-20 `}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20 " >
                    <div className={`${props.animate ? 'wow animate__fadeInLeft' : ''}`} data-wow-duration="1s">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" >Igniting Business Success</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className={`relative pl-20 pr-6 sm:pl-6 md:px-0 ${props.animate ? 'wow animate__fadeInRight' : ''}`} data-wow-duration="1s">
                        <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                            <img className="ml-auto" src="/images/about/about-04.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default AboutThree