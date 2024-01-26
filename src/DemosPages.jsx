import React from 'react'
import { TiArrowMaximise } from "react-icons/ti";
import { Link } from 'react-router-dom';


const DemosPages = () => {
  return (
    <div>
      <div className="relative">
        <div aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-red-500 to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-red-300"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 flex justify-center items-center">
          <div className="relative w-full">
            <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-10/12 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-lg font-medium text-red-500 uppercase flex justify-center items-center gap-2"><TiArrowMaximise /> AWESOME TEMPLATE</span>
                <h2 className="text-4xl font-light tracking-wide text-black my-7 lg:text-6xl">
                  A <span className='font-semibold'>perfect</span> Place for Your Creative <span className='font-semibold'>Portfolio</span>
                </h2>
                <p className="mb-10 text-base font- text-red-500 md:text-lg">
                  You can view my demos live and examine them closely.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <Link to="/"
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-red-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                  <span className="text-base font-semibold text-red-500 uppercase">Buy Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto py-20 mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-2'>

          <Link to="/" target='_blank'>
            <div className='rounded-xl hover:-mt-5 duration-300'>
              <div className=''>
                <img src="/images/screen_shoots/02_img.png" className='w-full h-full object-contain' alt="" />
              </div>
              <h3 className='text-start text-2xl font-medium py-6'>Main Demo</h3>
              <p className='text-start text-md text-gray-500'>Our template is ideal for creative agencies. All agencies utilize this template for any purpose.</p>
            </div>
          </Link>

          <Link to="/design" target='_blank'>
            <div className='rounded-xl hover:-mt-5 duration-300'>
              <div className=''>
                <img src="/images/screen_shoots/04_img.png" className='w-full h-full object-contain' alt="" />
              </div>
              <h3 className='text-start text-2xl font-medium py-6'>Design Demo</h3>
              <p className='text-start text-md text-gray-500'>The Creative Portfolio is an excellent portfolio website demo. Create a website for your portfolio using this.</p>
            </div>
          </Link>

          <Link to="/minimal" target='_blank'>
            <div className='rounded-xl hover:-mt-5 duration-300'>
              <div className=''>
                <img src="/images/screen_shoots/05_img.png" className='w-full h-full object-contain' alt="" />
              </div>
              <h3 className='text-start text-2xl font-medium py-6'>Minimal Demo</h3>
              <p className='text-start text-md text-gray-500'>A minimal portfolio template. Utilize this template to showcase your portfolio in a perfect manner.</p>
            </div>
          </Link>

          <Link to="/creative" target='_blank'>
            <div className='rounded-xl hover:-mt-5 duration-300'>
              <div className=''>
                <img src="/images/screen_shoots/06_img.png" className='w-full h-full object-contain' alt="" />
              </div>
              <h3 className='text-start text-2xl font-medium py-6'>Creative Demo</h3>
              <p className='text-start text-md text-gray-500'>It boasts a modern design with all the essential features for creative agencies.</p>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default DemosPages