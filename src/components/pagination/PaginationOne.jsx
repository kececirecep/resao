import React from 'react'
import { HiOutlineArrowUturnLeft,HiOutlineArrowUturnRight } from "react-icons/hi2";


const PaginationOne = () => {
    return (
        <ul className="flex space-x-4 justify-center py-8">
            <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-10 h-10 rounded-lg">
                <HiOutlineArrowUturnLeft />
            </li>
            <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">1</li>
            <li className="flex items-center justify-center shrink-0 bg-red-500 cursor-pointer text-base font-bold text-white w-10 h-10 rounded-lg">2</li>
            <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">3</li>
            <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">4</li>
            <li className="flex items-center justify-center shrink-0 hover:bg-gray-50 cursor-pointer w-10 h-10 rounded-lg">
                <HiOutlineArrowUturnRight />
            </li>
        </ul>
    )
}

export default PaginationOne