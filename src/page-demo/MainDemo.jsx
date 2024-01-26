import React from 'react'
import Helmet from '../components/common/HelmetTitle';

import AboutThree from '../components/about/AboutThree'
import ServiceListFour from '../components/service/ServiceListFour'
import PortfolioCardTwo from '../components/portfolio/PortfolioCardTwo'
import CounterOne from '../components/counters/CounterOne'
import TeamThere from '../components/team/TeamThree'
import BlogListThree from '../components/blog/BlogListThree'
import BrandOne from '../components/brand/BrandOne'
import ContactForm from '../components/contact/ContactFormThree'
import PricingTable from '../components/PricingTable/PricingTable'
import MainHeader from '../components/header/MainHeader';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
  max-width: 100%;
`;


const MainDemo = () => {
    return (
        <div>
            <Helmet pageTitle='Main Demo' />
            <AppContainer>
                <MainHeader
                    subHeader={false} />
            </AppContainer>

            <section className="bg-[#eee3da] bg-opacity-30 h-screen flex justify-center items-center">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-semibold tracking-wider text-red-600 uppercase wow animate__fadeInDown" data-wow-duration="1s">A social media for learners</p>
                            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl wow animate__fadeIn" data-wow-duration="1s">Connect & Learn from the pros</h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl wow animate__fadeInDown" data-wow-duration="1s">Grow your career fast with right mentor.</p>

                            <Link to="/contact" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-red-500 rounded-full lg:mt-16 hover:bg-red-400 focus:bg-red-400 wow animate__fadeInDown" data-wow-duration="1s">
                                Contact Us
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>

                        </div>

                        <div>
                            <img className="w-full hidden lg:block wow animate__fadeInRight" data-wow-duration="1s" src="/images/home/Demo-One.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <AboutThree
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <ServiceListFour
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
                bgColor="bg-white" />

            <TeamThere
                animate={true}
                bgColor="bg-gray-50"
                title="Team"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <BlogListThree
                animate={true}
                title="Blogs" />

            <BrandOne
                animate={true}
                bgColor="bg-white" />

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

export default MainDemo