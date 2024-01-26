import React from 'react'

const BrandOne = (props) => {
    const BrandData = [
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
            img: "04"
        }, {
            img: "06"
        },  
    ]
    return (
        <div className={`${props.bgColor} py-10 sm:py-16 lg:py-20`}>
            <ul className={`flex justify-center items-center flex-wrap lg:px-40 px-4 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3.5s">
                {BrandData.map((item, index) => {
                    return (
                        <li key={index} className="lg:p-12 p-4 flex-basis-20 text-center">
                            <img
                                src={`/images/brand/brand-${item.img}.png`}
                                alt="Logo Images"
                                className="opacity-70 transition-transform duration-300 lg:max-h-52 w-36 max-h-12 max-w-100 m-2 object-contain cursor-pointer hover:transform hover:rotate-12 hover:scale-95 hover:opacity-100" 
                            />
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default BrandOne