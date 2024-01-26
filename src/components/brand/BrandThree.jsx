import React from 'react'

const BrandThree = (props) => {
    const BrandList = [
        {
            img: "01"
        }, {
            img: "02"
        }, {
            img: "03"
        }, {
            img: "04"
        }, {
            img: "05"
        }, {
            img: "06"
        }, {
            img: "07"
        }, {
            img: "02"
        }
    ]
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-24`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
                <div>
                    <h2 className={`mb-6 md:text-7xl uppercase text-center lg:text-start text-5xl font-medium md:font-extralight py-8 text-[#1f1f25] ${props.animate ? 'wow animate__fadeInDown' : ''}`} data-wow-duration="1s">{props.title ? props.title : 'Brands'}</h2> 
                </div>
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 lg:col-span-2 place-items-center ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                    {
                        BrandList.map((item, index) => {
                            return (
                                <div key={index} className="cursor-pointer rounded py-6">
                                    <img src={`/images/brand/brand-${item.img}.png`} alt={`Brands ${index}`} className="opacity-70 transition-transform duration-300 lg:max-h-52 lg:max-w-150 max-h-12 max-w-100 cursor-pointer hover:transform hover:scale-90 hover:rotate-12 hover:opacity-100" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BrandThree