import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer z-[12] border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container sm:px-8 px-12 py-20 flex justify-between'>
            <span>
                <Image 
                    src='/images/logo.png'
                    alt='Logo'
                    width={40}
                    height={40}
                />
            </span>
            <p className='text-slate-600'>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer