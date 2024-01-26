import React, { useState } from 'react'
import Helmet from '../components/common/HelmetTitle';

import { IoIosCheckmark } from "react-icons/io";
import ModalVideo from 'react-modal-video';
import { IoMdPlay } from "react-icons/io";
import ServiceList from '../components/service/ServiceListFive';

import MainHeader from '../components/header/MainHeader';

import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 100%;
`;

const ServiceDetails = (props) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div className=''>
            <Helmet pageTitle='Service Details' />

            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            {/* Start Breadcrump Area */}
            <div className="h-[600px] text-white text-center grid bg-cover" style={{
                backgroundImage: `url(/images/service/services-details-banner.jpg)`,
            }}>
                <div className="col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full"></div>
                <div className="col-start-1 row-start-1 flex flex-col items-center justify-center">
                    <h1 className="font-bold md:text-7xl text-3xl text-gray-200 pt-16">WEBSITE DEVELOPMENT</h1>
                    <p className='pt-16 md:px-36 text-gray-400 text-2xl'>There are many variations of passages of Lorem Ipsum available.</p>
                </div>
            </div>
            {/* End Breadcrump Area */}

            <div className='container mx-auto'>

                <ServiceList title="Benefits" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis itaque fugiat similique quae commodi quis, neque aspernatur omnis ipsa." />

                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl p-4 pt-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nulla saepe tempore quod excepturi! Et adipisci eum quisquam incidunt itaque eveniet nostrum ducimus necessitatibus nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a maxime unde illum dolore. Ut quam nulla, consectetur suscipit perferendis quis corporis iusto soluta quibusdam ipsum cupiditate quasi quisquam tenetur!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-4">
                    <div className="col-span-1">
                        <img
                            src="/images/service/service-02.jpg"
                            alt="Service "
                            className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                        />
                    </div>
                    <div className="flex-1 px-4 xl:px-24 py-4">
                        <div className=''>
                            <h2 className='text-2xl lg:text-3xl text-[#1f1f25] py-4'>Web Development</h2>
                            <ul className="md:text-lg sm:text-md text-sm text-[#1d1d24bf]">
                                <li className='py-2 flex items-center'><IoIosCheckmark />Yet this above sewed flirted opened ouch Lorem10</li>
                                <li className='py-2 flex items-center'><IoIosCheckmark />Goldfinch realistic sporadic ingenuous</li>
                                <li className='py-2 flex items-center'><IoIosCheckmark />Abominable this abidin far successfully then like piquan</li>
                                <li className='py-2 flex items-center'><IoIosCheckmark />Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            </ul>
                        </div>
                        <div className='pt-12'>
                            <h2 className='text-2xl lg:text-3xl text-[#1f1f25] pb-4'>User Friendly</h2>
                            <ul className="md:text-lg sm:text-md text-sm text-[#1d1d24bf]">
                                <li className='py-2 flex items-center'><IoIosCheckmark />Yet this above sewed flirted opened ouch Lorem10</li>
                                <li className='py-2 flex items-center'><IoIosCheckmark />Goldfinch realistic sporadic ingenuous</li>
                                <li className='py-2 flex items-center'><IoIosCheckmark />Abominable this abidin far successfully then like piquan</li>
                                <li className='py-2 flex items-center'><IoIosCheckmark />Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='p-6'>
                    <h2 className='text-2xl lg:text-4xl text-[#1f1f25] pb-4 py-8'>Web Development</h2>
                    <p className="md:text-lg sm:text-md text-sm text-[#1d1d24bf] pt-8">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae amet voluptas eveniet magnam optio nostrum quos exercitationem explicabo ab, nihil dignissimos consequuntur voluptatem at earum dolore sequi maxime praesentium nulla perspiciatis. Porro voluptate quidem ea, voluptatum dolore facilis velit! Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae amet voluptas eveniet magnam optio nostrum quos exercitationem explicabo ab, nihil dignissimos consequuntur voluptatem at earum dolore sequi maxime praesentium nulla perspiciatis. Porro voluptate quidem ea, voluptatum dolore facilis velit! Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vitae amet voluptas eveniet magnam optio nostrum quos exercitationem explicabo ab, nihil dignissimos consequuntur voluptatem at earum dolore sequi maxime praesentium nulla perspiciatis. Porro voluptate quidem ea, voluptatum dolore facilis velit!</p>
                </div>

                <div className='relative flex flex-col md:flex-row p-8 w-full w-1/1'>
                    <img src="/images/service/service-video-banner.jpg" alt="Blog Images" className='z-10 w-full h-[300px] object-cover duration-500' />
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="YDXQ_nociO4" onClose={() => setOpen(false)} />
                    <button className="group hover:bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center rounded-full bg-[#ffffff31] border-2 border-white shadow-2xl w-24 h-24 duration-500 hover:scale-75" onClick={() => setOpen(true)}>
                        <span className='text-3xl transition-colors duration-500 text-red-500 group-hover:text-white'>
                            <IoMdPlay />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails