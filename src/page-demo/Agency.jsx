import React from 'react' 
import Helmet from '../components/common/HelmetTitle';

import AboutOne from '../components/about/AboutOne'
import ServiceList from '../components/service/ServiceListTwo'
import PortfolioCard from '../components/portfolio/PortfolioCardTwo'
import Team from '../components/team/TeamTwo'
import Counter from '../components/counters/CounterOne'
import BlogList from '../components/blog/BlogListThree'
import Brand from '../components/brand/BrandThree'
import Contact from '../components/contact/ContactFormThree'

const Agency = () => {
    return (
        <div>
            <Helmet pageTitle='Agency' />

            {/*Banner*/}
            <div className="relative bg-cover bg-center bg-gray-800 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center" style={{ backgroundImage: "url('/images/bg/bg-banner-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="absolute inset-0 flex items-center justify-center mx-auto container">
                    <div className="relative text-white sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] p-8 rounded-md text-center z-50 mt-12">
                        <h1 className="text-5xl font-extrabold text-red-500 bannerHeading">Superhero Design Team</h1>
                        <p className="text-md py-12">We provide an experienced design team that works with you everyday to create high-quality design assets to help grow your business.</p>
                        <button className='text-white text-lg bg-red-500 rounded-full px-16 py-3  font-medium mt-4 hover:shadow-slate-300 ' style={{ boxShadow: '0 0 0 6px rgba(253, 87, 109, 0.151)', }}>Contact Us</button>
                    </div>
                    {/* Black overlay with opacity */}
                </div>
                <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
            </div>
            {/*Banner*/}


            {/* About */}
            <div className='bg-gray-50'>
                <div className='md:text-center text-start pb-12 px-2'>
                    <h2 className='md:text-7xl uppercase sm:text-3xl text-2xl font-extralight py-8 text-[#1f1f25]'>About</h2>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                </div>
                <AboutOne />
            </div>
            {/* About */}

            {/* Service */}
            <div className=' py-12'>
                <div className='md:text-center text-start  pb-12 px-2'>
                    <h2 className='md:text-7xl uppercase sm:text-3xl text-2xl font-extralight py-8 text-[#1f1f25]'>Services</h2>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                </div>
                <ServiceList />
            </div>
            {/* Service */}

            {/* Portfolio */}
            <div className='bg-gray-50 py-12'>
                <div className='md:text-center text-start pb-12 px-2'>
                    <h2 className='md:text-7xl uppercase sm:text-3xl text-2xl font-extralight py-8 text-[#1f1f25]'>Portfolio</h2>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                </div>
                <PortfolioCard />
            </div>
            {/* Portfolio */}

            {/* Team */}
            <div className='py-12'>
                <div className='md:text-center text-start  pb-12 px-2'>
                    <h2 className='md:text-7xl uppercase sm:text-3xl text-2xl font-extralight py-8 text-[#1f1f25]'>Team</h2>
                    <p className='text-gray-500 md:text-xl sm:text-lg text-md'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                </div>
            </div>
            <Team />
            {/* Team */}

            {/* Counter */}
            <div className='bg-gray-50 '>
                <Counter />
            </div>
            {/* Counter */}

            {/* Blog */}
            <div className='py-12'>
                <BlogList />
            </div>
            {/* Blog */}

            {/* Brands */}
            <div className='bg-gray-50 py-12'>
                <Brand />
            </div>
            {/* Brands */}

            {/* Contact */}
            <Contact />
            {/* Contact */}

        </div>
    )
}

export default Agency