import React from 'react'

import ContactForm from '../components/contact/ContactForm'
import PricingTable from '../components/PricingTable/PricingTable'
import Helmet from '../components/common/HelmetTitle';
import AboutTwo from '../components/about/AboutTwo';
import ServiceListThree from '../components/service/ServiceListThree'
import PortfolioCard from '../components/portfolio/PortfolioCard'
import CounterFour from '../components/counters/CounterFour'
import TeamTwo from '../components/team/TeamTwo'
import BlogListTwo from '../components/blog/BlogListTwo' 
import BrandThree from '../components/brand/BrandThree'
import MainHeader from '../components/header/MainHeader';

import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  max-width: 100%;
`;

const Creative = () => {
    return (
        <div>
            <Helmet pageTitle='Creative' />

            <AppContainer>
                <MainHeader
                    subHeader={false}
                    demo="white"
                />
            </AppContainer>

            {/*Banner*/}
            <div className="relative bg-cover bg-center bg-gray-800 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center" style={{ backgroundImage: "url('/images/bg/bg-banner-2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="absolute inset-0 flex items-center justify-start mx-auto container">
                    <div className="relative text-white sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] p-8 rounded-md z-50 mt-12">
                        <h2 className='border-l-2 border-red-500 text-md lg:text-xl px-2 mb-4 lg:mb-8 wow animate__fadeInDown' data-wow-duration="1s">Corporate Company Designs</h2>
                        <h1 className="text-xl lg:text-6xl font-extrabold text-white bannerHeading wow animate__fadeInDown" data-wow-duration="1s">BEST DESIGNER <br /> FOR YOU</h1>
                        <p className="text-sm lg:text-lg py-4 lg:py-12 wow animate__fadeInUp" data-wow-duration="1s">We provide an experienced design team that works with you everyday to create high-quality design assets to help grow your business.</p>
                        <Link to="/contact" className='px-8 py-2 bg-red-500 font-medium uppercase hover:bg-red-600 duration-200 wow animate__fadeInUp' data-wow-duration="1s">Contact Us</Link>
                    </div>
                    {/* Black overlay with opacity */}
                </div>
                <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
            </div>
            {/*Banner*/}

            <AboutTwo
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <ServiceListThree
                animate={true}
                bgColor="bg-gray-50"
                title="Services"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <PortfolioCard
                animate={true}
                bgColor="bg-white"
                title="Works"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <CounterFour
                animate={true}
                title="Customers"
                bgColor="bg-white" />

            <TeamTwo
                animate={true}
                bgColor="bg-gray-50"
                title="Team"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <BlogListTwo
                animate={true}
                title="Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <BrandThree
                animate={true}
                bgColor="bg-gray-50"
            />

            <PricingTable
                animate={true}
                bgColor="bg-white"
                title="Pricing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <ContactForm
                animate={true}
                bgColor="bg-gray-50" />

        </div>
    )
}

export default Creative