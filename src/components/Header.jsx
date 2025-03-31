import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = function Header() {
    return(
        <div className='fixed w-full z-10 p-16 flex justify-end items-center'>
            <button className='bg-black  px-4 py-2 border-4 border-white-600  hover:bg-gray-600 text-xl text-white rounded-full'>Hire Me</button>
            <i className="ri-more-2-fill text-3xl "></i>

        </div>
    )
}
export default Header;