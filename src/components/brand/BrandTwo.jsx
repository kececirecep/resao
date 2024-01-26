import React from 'react'

const BrandTwo = (props) => {
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
        }
    ]

    return (
        <div className={`${props.bgColor}`}>
            <div className='container mx-auto lg:px-28 px-2 py-16'>
                <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 ${props.animate ? 'wow animate__fadeIn' : ''}`} data-wow-duration="3s">
                    {BrandData.map((item, index) => {
                        return (
                            <li key={index} className='hover:scale-95 transition duration-1000 shadow group w-full h-[200px] rounded-lg p-4 flex justify-center items-center bg-gradient-to-b hover:from-[#f90021] hover:to-[#f90021]'>
                                <img src={`/images/brand/brand-${item.img}.png`} alt="Logo Images" className="group-hover:brightness-[10]" />
                            </li>
                        )
                    })}
                </ul>
            </div> 
        </div>
    )
}

export default BrandTwo