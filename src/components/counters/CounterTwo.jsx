import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const CounterTwo = (props) => {
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
        },
        {
            countNum: 575,
            countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
        {
            countNum: 69,
            countTitle: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
    ];

    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            {props.title ? (
                <div className='md:text-center text-start pb-24 px-2 flex flex-col items-center justify-center'>
                    <h2 className={`md:text-7xl uppercase sm:text-5xl text-5xl font-medium py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title}</h2>
                    <p className={`text-gray-500 md:text-xl sm:text-lg text-md w-[100%] lg:w-[50%] p-2 text-center ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
            ) : ''}
            <div className={`container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-20 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {CounterData.map((item, index) => {
                    return (
                        <div key={index} className='relative rounded-lg p-4 md:p-12 m-2 group text-center flex items-center justify-center transition duration-300'>
                            <h2 className='pb-4 duration-500 text-5xl md:text-5xl text-red-500 -rotate-45 font-semibold'>
                                <VisibilitySensor onChange={handleChange}>
                                    <CountUp start={0} end={didViewCountUp ? item.countNum : 0} duration={5}></CountUp>
                                </VisibilitySensor>
                                <span className='text-lg md:text-4xl'>+</span>
                            </h2>
                            <p className='duration-500 text-md md:text-lg text-gray-500'>
                                {item.countTitle}
                            </p>
                        </div>

                    );
                })}
            </div>
        </div>
    );
};

export default CounterTwo;
