import React from 'react'
import Helmet from '../components/common/HelmetTitle';


const Interactive = () => {
    return (
        <div>
            <Helmet pageTitle='Interactive' />

            {/*Banner*/}
            <div className="relative bg-cover bg-center bg-gray-800 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex items-center" style={{ backgroundImage: "url('/images/bg/bg-banner-3.png')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div className="absolute inset-0 flex items-center justify-start mx-auto container">
                    <div className="relative text-white sm:w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%] p-8 rounded-md z-50 mt-12">
                        <h1 className="text-3xl md:text-6xl font-extrabold text-white">BEST DESIGNER FOR YOU</h1>
                        <p className="text-md py-8 md:py-12">We provide an experienced design team that works with you everyday <br /> to create high-quality design assets to help grow your business.</p>
                        <button className='px-8 py-2 border hover:bg-white hover:text-black border-white rounded-full font-medium uppercase'>Contact Us</button>
                    </div>
                    {/* Black overlay with opacity */}
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            {/*Banner*/}

        </div>
    )
}

export default Interactive