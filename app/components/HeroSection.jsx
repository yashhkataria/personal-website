"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section id="hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-12">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1}} 
                transition={{ duration: 0.5 }} 
                className="col-span-7 place-self-center text-center sm:text-left"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-600">Hello, I am{" "}</span> 
                    <br></br>
                    <TypeAnimation 
                        sequence = {[
                            "Yash",
                            1000,
                            "an Engineering Student",
                            1000,
                            "a Web Developer",
                            1000,
                            "an App Developer",
                            1000,
                            "a Machine Learning enthusiast",
                            1000,
                            // "a Competitive Programmer",
                            // 1000
                        ]}
                        wrapper='span'
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] mb-2 text-lg lg:text-xl">
                Dedicated and results-driven student with a passion for technology and its use for problem-solving. I thrive on challenges and am known for my ability to deliver impactful solutions that positively impact organizations.
                </p>
                <div>
                    <a 
                        href="/Yash_Kataria_Resume.pdf" 
                        className='inline-block px-6 py-3 rounded-full w-full sm:w-fit mr-4 mt-4 bg-gradient-to-br from-yellow-500 via-orange-400 to-red-500 hover:bg-slate-200 text-white'
                        download={true}
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>   
            <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
                    <Image
                        src='/images/hero-img-cropped.jpg'
                        alt='Hero Image'
                        className='rounded-full'
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection