import React from 'react'
import ProjectsCard from './ProjectsCard'

const PROJECTS = [
    {
        id: 1,
        imageUrl: '/images/projects/1.jpg',
        title: 'Techniche Website',
        description: 'The website of the annual techno-management fest of IIT Guwahati to take registrations and showcase events',
        gitUrl: "https://github.com/IITG-Techniche/Techniche-23",
        previewUrl: "https://techniche.org"
    },

    {
        id: 2,
        imageUrl: '/images/projects/2.jpg',
        title: 'KnowShop App',
        description: 'An app that eases the process of buying and selling products for the residents of IIT Guwahati',
        gitUrl: "https://github.com/sarg19/Kriti-Software-PS",
        previewUrl: "https://drive.google.com/file/d/1kd5lJE9X4TWQdbKabiR8sq6pmB6JF_6W/view?usp=share_link"
    },

    {
        id: 3,
        imageUrl: '/images/projects/3.jpg',
        title: 'Facial Recognition using FPGA',
        description: 'A deep learning model which recognizes faces. It is a hardware project(had to stay loyal to my major)',
        gitUrl: "https://github.com/yashhkataria/Facial_Recognition_FPGA",
        previewUrl: "https://drive.google.com/file/d/1vKjPJDlHfJUXRY0_47KFqfUqpxUimfsv/view?usp=sharing"
    },

    {
        id: 4,
        imageUrl: '/images/projects/4.jpg',
        title: 'Jotion - a note making app',
        description: 'A note making application inspired by Notion. It supports authentication, switching between light and dark modes, adding, deleting and restoring a note.',
        gitUrl: "https://github.com/yashhkataria/jotion-next13.git",
        previewUrl: "https://jotion-yash.vercel.app/"
    }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {PROJECTS.map((project) => (
                <ProjectsCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.imageUrl}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </section>
  )
}

export default ProjectsSection