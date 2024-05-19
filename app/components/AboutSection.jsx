"use client"

import { React, useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Express</li>
            </ul>
        )
    },
    
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>B.Tech in Electronics and Communication Engineering, Indian Institute of Technology(IIT), Guwahati</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState('Education')
  const [isPending, startTransition] = useTransition()
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src="/images/setup.jpeg"
                alt="About Image"
                width={500}
                height={500}
            />
            <div className='mt-4 md:mt-0 text:left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                        selectTab={() => {handleTabChange("Education")}} 
                        active={ tab==="Education" } 
                    >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => {handleTabChange("Skills")}} 
                        active={ tab==="Skills" } 
                    >
                        {" "}
                        Skills{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id===tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection