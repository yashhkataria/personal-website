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
                <li><b>Languages - </b>C/C++, Python, JavaScript</li>
                <li><b>Web Development - </b>React.js, Next.js, Node.js</li>
                <li><b>App Development - </b>Flutter</li>
                <li><b>Database Management - </b>MySQL, MongoDB, ArangoDB</li>
                <li><b>Operating Systems - </b>Windows, Linux</li>
                <li><b>Miscellaneous - </b>Git, GitHub, AWS, Bash, Figma</li>
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
                Hello! I am Yash, a final year B.Tech student at IIT Guwahati, majoring in Electronics and Communication Engineering. While my academic background is rooted in ECE, my true passion lies in software development. As a self-taught developer, I am driven by the desire to build innovative solutions that make a difference. This enthusiasm propels me to continually learn new technologies and frameworks. Below, you can explore my skills and projects.
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