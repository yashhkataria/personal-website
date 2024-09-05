import React from 'react'
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id="contact">
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-1/4 -right-24 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl text-white font-bold my-2'>Connect with me</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I am always open to new opportunities and collaborations. Feel free to reach out to me on any of the following platforms.
            </p>
            <div className='socials flex flex-row'>
                <Link href='https://github.com/yashhkataria'>
                    <Image src={GithubIcon} alt='Github Icon' />
                </Link>

                <Link href='https://www.linkedin.com/in/yashkataria15'>
                    <Image src={LinkedinIcon} alt='LinkedIn Icon' />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default ContactSection