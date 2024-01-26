import React from 'react'
import { HiOutlineArrowUturnLeft,HiOutlineArrowUturnRight } from "react-icons/hi2";


const PaginationTwo = () => {
    return (
        <ul className="flex space-x-3 justify-center py-8">
            <li className="flex items-center justify-center shrink-0 cursor-pointer bg-gray-100 w-9 h-8 rounded"><HiOutlineArrowUturnLeft/></li>
            <li className="flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">1</li>
            <li className="flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold border border-gray-700 text-gray-700 w-9 h-8 rounded">2</li>
            <li className="flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">3</li>
            <li className="flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-[#333] w-9 h-8 rounded">4</li>
            <li className="flex items-center justify-center shrink-0 cursor-pointer bg-gray-100 w-9 h-8 rounded"><HiOutlineArrowUturnRight/></li>
        </ul>
    )
}

export default PaginationTwo