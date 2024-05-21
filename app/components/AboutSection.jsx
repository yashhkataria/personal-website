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
                <li><b>Languages - </b>C/C++, Python</li>
                <li><b>Web Development - </b>React.js, Node.js, Next.js, Express</li>
                <li><b>App Development - </b>Flutter</li>
                <li><b>Databases - </b>MySQL, MongoDB</li>
            </ul>
        )
    },
    
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>B.Tech - Indian Institute of Technology(IIT), Guwahati</li>
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
                    Hey there! I am Yash, a final year B.Tech student from IIT Guwahati. I am majoring in Electronics and Communication Engineering and the fact that I am not interested in my major is proved by the existence of this website. I am a self-taught developer and love to build things that make a difference. This passion drives me to learn new technologies and frameworks. You can find my skills below.
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