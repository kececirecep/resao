import React from 'react'
import { Link } from 'react-router-dom'

const ButtonTwo = (props) => {
    return (
        <Link to={props.url} className="border-b-2 border-gray-200 px-5 py-2.5 relative rounded-b group overflow-hidden font-medium bg-gray-50 text-red-600 inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-500 group-hover:h-full opacity-90 "></span>
            <span className="relative group-hover:text-white">{props.btnTitle}</span>
        </Link>
    )
}

export default ButtonTwo