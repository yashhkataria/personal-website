import React from 'react'
import ProjectsCard from './ProjectsCard'

const PROJECTS = [
    {
        id: 1,
        imageUrl: '/images/projects/1.jpeg',
        title: 'Techniche Website',
        description: 'A website for the annual techno-management fest of IIT Guwahati',
        gitUrl: "https://github.com/yashhkataria/personal-website",
        previewUrl: "https://techniche.org"
    },

    {
        id: 2,
        imageUrl: '/images/projects/2.jpeg',
        title: 'KnowShop App',
        description: 'An app to connect IITG Junta with local shopkeepers',
        gitUrl: "https://github.com/yashhkataria/personal-website",
        previewUrl: "https://techniche.org"
    },

    {
        id: 3,
        imageUrl: '/images/projects/3.jpeg',
        title: 'Machine Learning Project',
        description: 'A model which recognizes the faces of 5 popular celebrities',
        gitUrl: "https://github.com/yashhkataria/personal-website",
        previewUrl: "https://techniche.org"
    },

    {
        id: 4,
        imageUrl: '/images/projects/4.jpeg',
        title: 'Jotion - a note making app',
        description: 'A note making app inspired by notion. It was built on Next.js',
        gitUrl: "https://github.com/yashhkataria/personal-website",
        previewUrl: "https://techniche.org"
    },

    {
        id: 5,
        imageUrl: '/images/projects/5.jpeg',
        title: 'Personal Website',
        description: 'My personal website built using Next.js and Tailwind CSS',
        gitUrl: "https://github.com/yashhkataria/personal-website",
        previewUrl: "https://techniche.org"
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