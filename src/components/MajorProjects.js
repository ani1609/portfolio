import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MajorProjects.css';
import { ReactComponent as Github } from '../icons/github.svg';


function MajorProjects() 
{
    const headingRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        };

        const observer = new IntersectionObserver((entries, observer) => 
        {
            entries.forEach(entry => 
            {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('showMajorProjects');
                }
            });
        }, options);

        if (headingRef.current) observer.observe(headingRef.current);
        if (project1Ref.current) observer.observe(project1Ref.current);
        if (project2Ref.current) observer.observe(project2Ref.current);
        if (project3Ref.current) observer.observe(project3Ref.current);

        return () => 
        {
            if (headingRef.current) observer.unobserve(headingRef.current);
            if (project1Ref.current) observer.unobserve(project1Ref.current);
            if (project2Ref.current) observer.unobserve(project2Ref.current);
            if (project3Ref.current) observer.unobserve(project3Ref.current);
        };
    }, []);

    return (
        <div>
            <section className='major_projects_container'>
                <h1 ref={headingRef}>Some Things I've Built</h1>
                <div className='major_project_odd' ref={project1Ref}>
                    <a href='' target='_blank'></a>
                    <div className='project_details_odd'>
                        <h2>Venline</h2>
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>MongoDB</li>
                        </ul>
                        <a href='' target='_blank'><Github/></a>
                    </div>
                </div>
                <div className='major_project_even' ref={project2Ref}>
                    <a href='' target='_blank'></a>
                    <div className='project_details_even'>
                        <h2>Prathamik</h2>
                        <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>MongoDB</li>
                        </ul>
                        <a href='' target='_blank'><Github/></a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MajorProjects;