import React from 'react'
import { Link } from 'react-router-dom'
 
 

const ErrorPage = () => {
    return (
        <> 
            <div className="flex items-center flex-col justify-center h-screen lg:flex-row py-28 px-6 md:px-24 md:py-20   gap-16 lg:gap-28">
                <h2 className='italic font-medium text-gray-700 md:text-[200px] sm:text-[120px] text-[115px]'>404! </h2>
                <div className="w-full lg:w-1/2 text-gray-700 italic">
                    <h1 className="py-4 text-3xl lg:text-4xl font-extrabold ">Looks like you've found the doorway to the great nothing</h1>
                    <p className="py-4 text-base">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                    <p className="py-2 text-base">Sorry about that! Please visit our hompage to get where you need to go.</p>
                    <Link to="/" className="inline-block  sm:w-auto lg:w-auto my-4 border-2 shadow-xl outline-none rounded-md px-2 sm:px-16 py-5 bg-gray-700 text-white transition duration-300 ease-in-out transform hover:text-gray-700 hover:bg-transparent hover:border-gray-700 hover:translate-y-[-5px]">
                        BACK TO HOMEPAGE
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ErrorPage