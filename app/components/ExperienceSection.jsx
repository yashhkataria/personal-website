"use client";

import React, { useEffect, useRef } from 'react';
import ExperienceCard from './ExperienceCard';

const EXPERIENCES = [
    {
        id: 2,
        imageUrl: '/images/experiences/deutsche-bank.jpg',
        company: 'Deutsche Bank',
        title: 'Software Engineer',
        duration: 'May 2025 - Present'
    },

    {
        id: 1,
        imageUrl: '/images/experiences/spilll.jpg',
        company: 'Spilll',
        title: 'SWE Intern',
        duration: 'May 2024 - July 2024'
    }
    // {
    //     id: 2,
    //     imageUrl: '/images/experiences/google.jpg',
    //     company: 'Google India',
    //     title: 'SWE Intern',
    //     duration: 'May 2023 - July 2023',
    // },
    // {
    //     id: 3,
    //     imageUrl: '/images/experiences/amazon.jpg',
    //     company: 'Amazon India',
    //     title: 'SDE Intern',
    //     duration: 'Jan 2024 - Mar 2024',
    // },
];

const ExperienceSection = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            if (scrollContainerRef.current) {
                event.preventDefault();
                scrollContainerRef.current.scrollLeft += event.deltaY;
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', handleScroll, { passive: false });
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    return (
        <section id="experience" className="py-4 overflow-hidden">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Work Experience
            </h2>
            <div 
                ref={scrollContainerRef} 
                className="flex space-x-8 px-4 md:px-12" 
                style={{ 
                    width: '90vw', 
                    overflowX: 'scroll', 
                    overflowY: 'hidden', 
                    whiteSpace: 'nowrap',
                    scrollbarWidth: 'none'
                }}
            >
                {EXPERIENCES.map((project) => (
                    <div 
                        className="flex-shrink-0 w-9/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6" 
                        key={project.id}
                    >
                        <ExperienceCard
                            company={project.company}
                            title={project.title}
                            imgUrl={project.imageUrl}
                            duration={project.duration}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
                ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default ExperienceSection;
