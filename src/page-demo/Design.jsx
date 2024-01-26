import React from 'react'
import Helmet from '../components/common/HelmetTitle';

import ContactForm from '../components/contact/ContactFormThree'
import PricingTable from '../components/PricingTable/PricingTable'
import { IoArrowForward } from "react-icons/io5";
import AboutFour from '../components/about/AboutFour';
import CounterOne from '../components/counters/CounterOne';
import BlogList from '../components/blog/BlogList';
import BrandOne from '../components/brand/BrandOne';
import ServiceListFive from '../components/service/ServiceListFive';
import PortfolioSlider from '../components/portfolio/PortfolioSlider';
import TeamOne from '../components/team/TeamOne';

import MainHeader from '../components/header/MainHeader';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  max-width: 100%;
`;

const Design = () => {
    return (
        <div className='overflow-x-hidden'>
            <Helmet pageTitle='Design' />
            <AppContainer>
                <MainHeader
                    subHeader={false}
                    demo="white"
                />
            </AppContainer>

            {/*Banner*/}
            <div className="relative bg-cover bg-center bg-gray-800 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center" style={{ backgroundImage: "url('/images/bg/bg-banner-8.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="absolute inset-0 flex items-center justify-center mx-auto container">
                    <div className="relative text-white sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] p-2 rounded-md z-50 mt-12 text-center">
                        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold wow animate__fadeInDown" data-wow-duration="1s">Make React <span className='bg-gradient-to-r text-transparent from-red-600 to-pink-700 bg-clip-text'>80% faster</span></h1>
                        <p className="text-sm md:text-lg py-6 md:py-12 text-gray-300 wow animate__fadeInUp" data-wow-duration="1s">We <span className='text-white font-semibold'>provide</span> an experienced design team that <span className='text-white font-semibold'>works</span> with you everyday to create high-quality <span className='text-white font-semibold'>design</span> assets to help grow your business.</p>

                        <Link to="/service" className='inline-block bg-gradient-to-r bg-transparent from-red-600 to-pink-700 text-white text-lg bg-red-500 px-4 py-2 rounded-full m-2 border border-gray-600 wow animate__fadeIn' data-wow-duration="3s"><span className='flex items-center gap-2'>Get started <IoArrowForward /></span></Link>

                        <Link to="/contact" className='bg-gray-700 text-gray-300 text-lg px-4 py-2  rounded-full m-2 border border-gray-500 hover:bg-gray-600 wow animate__fadeIn' data-wow-duration="3s">Contact</Link>

                    </div>
                    {/* Black overlay with opacity */}
                </div>
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>

            {/*Banner*/}

            <AboutFour
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />

            <ServiceListFive
                animate={true}
                bgColor="bg-gray-50"
                title="Services"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <PortfolioSlider
                animate={true}
                bgColor="bg-white"
                title="Works"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <CounterOne
                animate={true}
                title="Customers"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                bgColor="bg-gray-50" />

            <TeamOne
                animate={true}
                title="Team"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                bgColor="bg-white" />

            <BlogList
                animate={true}
                title="Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                bgColor="bg-gray-50" />

            <BrandOne
                animate={true}
                bgColor="bg-white"

            />

            <PricingTable
                animate={true}
                bgColor="bg-gray-50"
                title="Pricing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <ContactForm
                animate={true}
                bgColor="bg-white" />
        </div>
    )
}

export default Design