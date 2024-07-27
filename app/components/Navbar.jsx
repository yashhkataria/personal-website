"use client";

import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import React, { useState } from 'react'
import MenuOverlay from './MenuOverlay'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const navlinks = [
    {
        title: "About",
        path: "about",
    },
    {
        title: "Experience",
        path: "experience",
    },
    {
        title: "Projects",
        path: "projects",
    },
    {
        title: "Contact",
        path: "contact",
    },
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto lg:mr-6 p-8'>
            <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="text-2xl md:text-5xl text-white font-semibold cursor-pointer"
            >
                <Image 
                    src='/images/logo.png'
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </ScrollLink>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick = {() => { setNavbarOpen(true) }} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <MenuIcon className='h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick = {() => { setNavbarOpen(false) }} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XIcon className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    { navlinks.map((link,index) => (
                        <li key={index} >
                            <ScrollLink
                                to={link.path}
                                smooth={true}
                                duration={500}
                                className='block py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl rounded md:p-0 cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setNavbarOpen(false);
                                }}
                            >
                                {link.title}
                            </ScrollLink>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
        { navbarOpen ? <MenuOverlay links={navlinks} /> : null}
    </nav>
  )
}

export default Navbar