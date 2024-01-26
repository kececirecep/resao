// PricingTable.js
import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import ButtonTwo from '../buttons/ButtonTwo';


const PricingTable = (props) => {
    const plans = [
        {
            title: 'Basic',
            description: 'Perfect for small businesses',
            price: '9.99',
            features: [
                'Unlimited users',
                '24/7 customer support',
                'Customizable themes',
                'Priority access to new features',
            ],
        },
        {
            title: 'Standard',
            description: 'Great for medium-sized businesses',
            price: '19.99',
            features: [
                'All features in Basic Plan',
                'Advanced analytics',
                'API access',
                'Phone support',
            ],
        },
        {
            title: 'Premium',
            description: 'Ideal for large enterprises',
            price: '29.99',
            features: [
                'All features in Standard Plan',
                'Dedicated account manager',
                'Custom integrations',
                'Unlimited storage',
            ],
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
            <div className={`flex flex-wrap justify-center px-4 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`group flex flex-col justify-center items-center rounded-md w-full sm:w-96 p-12 mx-2 my-4 border-2 border-red-500 ${index == 1 ? 'scale-105 ' : 'scale-90'}`}
                    >
                        <h2 className='text-5xl mb-2 font-light text-red-500'>{plan.title}</h2>
                        <p className="text-sm mb-4 text-center">{plan.description}</p>
                        <div className='font-light mb-2 text-6xl py-4 flex flex-col items-center border-b border-gray-200 w-full pb-8 text-red-500'>
                            {`$${plan.price}`}
                            <span className='text-xs text-black'>monthly</span>
                        </div>
                        <div className="mb-12 py-2">
                            {plan.features.map((feature, i) => (
                                <div key={i} className='flex items-center py-2'>
                                    <span className='mr-2  text-red-500'>
                                        <IoMdCheckmark />
                                    </span>
                                    <span className='text-gray-500 '>{feature}</span>
                                    <br />
                                </div>
                            ))}
                        </div>
                        <ButtonTwo url="#" btnTitle="PURCHASE NOW" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
