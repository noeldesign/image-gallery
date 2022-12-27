import Link from 'next/link';
import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
    <div className="fixed w-full h-[80px] bg-[#070A60] z-[100] shadow-xl">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <p className="text-white text-3xl">
                NO<span>&Euml;</span>L
            </p>
            <div className="hidden md:flex">
                <ul className="flex items-center">
                    <Link href='/'>
                        <li className="uppercase text-white px-5 hover:underline">
                            Home
                        </li>
                    </Link>
                    <Link href='/#albums'>
                        <li className="uppercase text-white px-5 hover:underline">
                            Albums
                        </li>
                    </Link>
                    <Link href='/#contact'>
                        <li className=" uppercase text-white hover:underline px-5">
                            contact
                        </li>
                    </Link>
                </ul>
            </div>
            <div 
                onClick={handleNav} 
                className='block md:hidden'
            >
                {nav ?  <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white'/>}
            </div>
            <div 
                className={
                    nav 
                    ? 'w-full absolute top-[80px] left-0 flex justify-center text-center text-white bg-[#070A60] md:hidden ease-in duration-300'
                    : 'absolute left-[-100%] text-white md:hidden'
                }
            >
                <ul>
                    <Link href='/'>
                        <li className="uppercase text-white py-5 hover:underline" onClick={handleNav}>
                            Home
                        </li>
                    </Link>
                    <Link href='/#albums'>
                        <li className="uppercase text-white py-5 hover:underline" onClick={handleNav}>
                            Albums
                        </li>
                    </Link>
                    <Link href='/#contact'>
                        <li className=" uppercase text-white hover:underline py-5" onClick={handleNav}>
                            contact
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar