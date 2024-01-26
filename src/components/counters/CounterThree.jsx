import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { IoIosHourglass, IoMdGlobe } from "react-icons/io";
import { IoCodeWorkingOutline } from "react-icons/io5";



const CounterThree = (props) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const handleChange = (isVisible) => {
        if (isVisible && !didViewCountUp) {
            setDidViewCountUp(true);
        }
    };

    let CounterData = [
        {
            countNum: 199,
            countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            icon: <IoCodeWorkingOutline />,
            url: '#'
        },
        {
            countNum: 575,
            countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            icon: <IoMdGlobe />,
            url: '#'
        },
        {
            countNum: 69,
            countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
            icon: <IoIosHourglass />,
            url: '#'
        },
    ];

    return (
        <div className="bg-red-500 py-16"> 
            <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto py-22 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {CounterData.map((item, index) => {
                    return (
                        <div key={index} className={`rounded-lg p-4 md:p-12 m-2 group flex flex-col items-center md:items-start justify-start transition duration-300 text-white ${props.animate ? 'wow animate__fadeInUp' : ''}`} 
                        data-wow-duration="1s">
                            <span className='shadow-lg hover:shadow-xl transition duration-300 p-4 text-4xl rounded-xl mb-10 rotate-6'>{item.icon}</span>
                            <h2 className='pb-4 duration-500 text-5xl md:text-5xl font-semibold'>
                                <VisibilitySensor onChange={handleChange}>
                                    <CountUp start={0} end={didViewCountUp ? item.countNum : 0} duration={5}></CountUp>
                                </VisibilitySensor>
                                <span className='text-lg md:text-4xl'>+</span>
                            </h2>
                            <p className='duration-500 text-md md:text-lg text-center md:text-start'>
                                {item.countTitle}
                            </p>
                        </div>

                    );
                })}
            </div>
        </div>
    );
};

export default CounterThree;
