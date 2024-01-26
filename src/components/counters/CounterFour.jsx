import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';



const CounterFour = (props) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const handleChange = (isVisible) => {
        if (isVisible && !didViewCountUp) {
            setDidViewCountUp(true);
        }
    };


    let CounterData = [
        {
            countNum: 199,
            countTitle: 'Total Users',
        },
        {
            countNum: 575,
            countTitle: 'Revenue',
        },
        {
            countNum: 69,
            countTitle: 'Engagement',
        }, {
            countNum: 24,
            countTitle: 'Server Uptime',
        }
    ];

    return (
        <div className="px-8 py-24">
            <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
                <div>
                    <h1 className={`mb-6 md:text-6xl uppercase text-center lg:text-start text-5xl font-medium md:font-extralight py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title ? props.title : 'Customers'}</h1>
                    <p className={`mt-12 text-md md:text-lg text-gray-600 ${props.animate ? 'wow animate__fadeInUp' : ''}`} data-wow-duration="1s">{props.subTitle}</p>
                </div>
                <div className={`grid sm:grid-cols-2 gap-6 text-white ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                    {CounterData.map((item, index) => {
                        return (
                            <div key={index} className="bg-red-500 flex flex-col items-center text-center rounded md:p-8 p-6">
                                <h3 className="lg:text-5xl text-3xl font-semibold">
                                    <VisibilitySensor onChange={handleChange}>
                                        <CountUp
                                            start={0}
                                            end={didViewCountUp ? item.countNum : 0}
                                            duration={5}
                                        ></CountUp>
                                    </VisibilitySensor>
                                </h3>
                                <div className="mt-4">
                                    <p className="text-md md:text-lg text-white">{item.countTitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CounterFour