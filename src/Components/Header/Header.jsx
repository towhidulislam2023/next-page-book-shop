import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, Bars3Icon, BeakerIcon, BoltIcon, PresentationChartBarIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [openNav, setOpenNav] = useState(false)
    console.log(openNav);
    return (
        <div className=' bg-gray-200 h-20'>
            <div className="flex justify-between items-center w-[70%] mx-auto h-20">
                <div className="flex-1">
                    <Link to={"/home"} className=" font-bold flex items-center normal-case text-xl">
                        <BoltIcon className="h-9 w-9 text-blue-500" />
                        <span className='ml-2'>Next page</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <span className='md:hidden' onClick={() => setOpenNav(!openNav)}>
                        {
                            openNav ? <XMarkIcon className='h-9 w-9'></XMarkIcon> : < Bars3Icon className='h-9 w-9' />

                        }
                    </span>
                    <ul onClick={() => setOpenNav(!openNav)} className={`md:flex gap-10 px-1 font-bold md:static absolute  duration-300 transition-all ${openNav ? "top-16 bg-gray-200 px-6  " : "-top-48 "}`}>
                        <li className='my-3 md:my-0'><NavLink className={({isActive})=>isActive ? "underline text-blue-800" : ""} to={"/home"}>Home</NavLink></li>
                        <li className='my-3 md:my-0'><NavLink className={({isActive})=>isActive ? "underline text-blue-800" : ""} to={"/books"}>Books</NavLink></li>
                        <li className='my-3 md:my-0'><NavLink className={({isActive})=>isActive ? "underline text-blue-800" : ""} to={"/about"}>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Header;