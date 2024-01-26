import React from 'react'
import Helmet from '../components/common/HelmetTitle';
import { Link } from 'react-router-dom';

import PricingTable from '../components/PricingTable/PricingTable'
import CounterOne from '../components/counters/CounterOne';
import BrandOne from '../components/brand/BrandOne';
import AboutSix from '../components/about/AboutSix';
import ServiceListThree from '../components/service/ServiceListThree';
import PortfolioCardTwo from '../components/portfolio/PortfolioCardTwo';
import TeamTwo from '../components/team/TeamTwo';
import BlogListThree from '../components/blog/BlogListThree';
import ContactFormThree from '../components/contact/ContactFormThree';

import styled from 'styled-components';
import MainHeader from '../components/header/MainHeader';

const AppContainer = styled.div`
  max-width: 100%;
`;

const Minimal = () => {
    return (
        <div>
            <Helmet pageTitle='Minimal' />

            <AppContainer>
                <MainHeader
                    subHeader={false}
                    demo="white"
                    />
            </AppContainer>

            {/*Banner*/}
            <div>
                <div className="relative bg-cover bg-center bg-gray-800 h-screen flex items-center" style={{ backgroundImage: "url('/images/bg/bg-banner-4.png')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative text-white text-center z-50 p-8 rounded-md mt-12">
                            <h1 className="text-7xl font-extrabold text-white wow animate__fadeInDown" data-wow-duration="1s">BEST DESIGNER FOR YOU</h1>
                            <p className="text-lg py-12 wow animate__fadeInDown" data-wow-duration="1s">We provide an experienced design team that works with you everyday <br /> to create high-quality design assets to help grow your business.</p>
                            <Link to="/contact" className='px-12 py-3 text-lg bg-red-500 rounded font-medium uppercase wow animate__fadeIn' data-wow-duration="2s">Contact Us</Link>
                        </div>
                        {/* Black overlay with opacity */}
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            </div>
            {/*Banner*/}

            <AboutSix
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />

            <ServiceListThree
                animate={true}
                bgColor="bg-gray-50"
                title="Services"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <PortfolioCardTwo
                animate={true}
                bgColor="bg-white"
                title="Works"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <CounterOne
                animate={true}
                title="Customers"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                bgColor="bg-gray-50" />

            <TeamTwo
                animate={true}
                title="Team"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                bgColor="bg-white" />

            <BlogListThree
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

            <ContactFormThree
                animate={true}
                bgColor="bg-white" />


        </div>
    )
}

export default Minimal