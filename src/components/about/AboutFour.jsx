import React from 'react'
 
const AboutFour = (props) => {
    return (
        <section className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="/images/about/dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div className={`${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="1.5s">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500 rounded-full shadow">
                                <span className="text-xl font-semibold text-white"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div className={`${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">

                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500 rounded-full shadow">
                                <span className="text-xl font-semibold text-white"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Build your website</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div className={`${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="4.5s">

                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500 rounded-full shadow">
                                <span className="text-xl font-semibold text-white"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Release & Launch</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutFour