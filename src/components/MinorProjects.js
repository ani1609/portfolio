import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

function MinorProjects ()
{

    const minorProjects= [
        {
            id: 1,
            title: 'Calculator',
            description: 'Basic calculator web app for performing arithmetic calculations.',
            techStack: ['HTML', 'CSS', 'JavaScript', ''],
            link: "https://ani1609.github.io/Calculator/",
            github: 'https://github.com/ani1609/Calculator'
        }
    ]
    
    const minorProjectHeadingRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.9
        };
    
        const observer = new IntersectionObserver(([entry], observer) => 
        {
            if (entry.isIntersecting) {
                entry.target.classList.add('showMinorProjectsHeading');
            }
        }, options);
    
        if (minorProjectHeadingRef.current) observer.observe(minorProjectHeadingRef.current);
    
        return () => 
        {
            if (minorProjectHeadingRef.current) observer.unobserve(minorProjectHeadingRef.current);
        };
    }, []);

    return (
        <div className='minor_projects_parent'>
            <h1 ref={minorProjectHeadingRef}>Other Noteworthy Projects</h1>
            <div className='minor_projects_container'>
                {minorProjects.map((minorProject) => {
                    return (
                            <MinorProjectItems
                                minorProject={minorProject}
                                key={minorProject.id}
                            />
                    )
                })}
            </div>
        </div>
    );
}

export default MinorProjects;
