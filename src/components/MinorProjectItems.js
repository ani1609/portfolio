import React, { useRef, useEffect, useState } from 'react';
import {ReactComponent as FolderIcon} from "../icons/folder.svg";
import {ReactComponent as GithubIcon} from "../icons/github.svg";
import '../index.css';
import '../styles/MinorProjectItems.css';

function MinorProjectItems(props)
{
    const {minorProject} = props;

    const minorProjectRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };
    
        const observer = new IntersectionObserver(([entry], observer) => 
        {
            if (entry.isIntersecting) {
                entry.target.classList.add('showMinorProject');
            }
        }, options);
    
        if (minorProjectRef.current) observer.observe(minorProjectRef.current);
    
        return () => 
        {
            if (minorProjectRef.current) observer.unobserve(minorProjectRef.current);
        };
    }, []);

    const [mouse, setMouse]=useState(false);

    return (
        <a href={minorProject.link} className='minor_project' target='_blank' ref={minorProjectRef}>
            <div className='icons'>
                <div className='folder_icon'>
                    <FolderIcon/>
                </div>
                <a href={minorProject.githubLink} className='github_icon' target='_blank'>
                    <GithubIcon/>
                </a>
            </div>

            <h2>{minorProject.title}</h2>

            <p>{minorProject.description}</p>

            <ul>
                {minorProject.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </a>
    );
}

export default MinorProjectItems;

