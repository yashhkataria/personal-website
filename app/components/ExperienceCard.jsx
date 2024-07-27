"use client";

import React from 'react';
import Link from 'next/link';

const ExperienceCard = ({ imgUrl, company, title, duration, link }) => {
  return (
    <div className="group">
      <div
        className="h-60 md:h-72 rounded-t-xl relative transition-transform duration-500 group-hover:scale-105"
        style={{ 
          background: `url(${imgUrl}) center center / cover no-repeat`, 
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{company}</h5>
        <div className='flex flex-col sm:flex-row justify-between'>
          <p className="text-[#ADB7BE]">{title}</p>
          <p className='text-[#ADB7BE] mt-1 sm:mt-0'>{duration}</p>
        </div>
        { link && (
          <Link href={link}>
            <h1 className="text-[#ADB7BE] font-bold hover:text-white">Checkout {company}</h1>
          </Link>
        ) }
      </div>
    </div>
  );
};

export default ExperienceCard;
