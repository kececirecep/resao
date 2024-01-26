import React from 'react'
import { Link } from 'react-router-dom'
import { RxSlash } from "react-icons/rx";

const Breadcrumb = (props) => {
    return ( 
            <div className="bg-cover bg-center object-contain py-28 pt-32" style={{ backgroundImage: 'url("/images/bg/bg-04.jpg")' }}>
                <div className="container mx-auto">
                    <div className="text-center pt-12">
                        <div className="text-white font-medium text-4xl md:text-5xl lg:text-7xl mb-5 pt-5">{props.title}</div>
                        <nav className="text-sm font-light">
                            <ul className="list-none p-0 inline-flex text-sm font-medium items-center pt-4">
                                <li className="flex items-center">
                                    <Link to="/" className="text-white">Home</Link>
                                </li>
                                <span className='text-gray-400 text-xl'><RxSlash /></span>
                                <li className="flex items-center">
                                    <span className="text-red-500">{props.title}</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> 

    )
}

export default Breadcrumb