import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

function MinorProjects ()
{

    const minorProjects= [
        {
            id: 1,
            title: 'Conversify',
            description: 'End-to-End Encrypted Chat App: Seamlessly integrating the OpenPGP library, this MERN-based application ensures secure and private messaging with real-time chat capabilities, prioritizing communication privacy and offering a seamless user experience.',
            techStack: ['OpenPGP', 'Web Sockets', 'Reactjs', ''],
            link: "https://github.com/ani1609/Conversify",
            github: 'https://github.com/ani1609/Conversify',
            underdevelopment: true
        },
        {
            id: 2,
            title: 'Weather App',
            description: 'This project seamlessly integrates OpenWeatherMap API to provide real-time weather data for a given locationand OpenCage APIs to deliver dynamic weather information based on user location, enhancing accuracy and user-friendliness.',
            techStack: ['OpenWeatherMap API', 'OpenCage API', '', ''],
            link: "https://weather-sable-sigma.vercel.app/",
            github: 'https://github.com/ani1609/weather',
        },
        {
            id: 3,
            title: 'E-commerce Cart',
            description: 'Created a basic dynamic ecommerce cart page in React, efficiently rendering each cart item using modular subcomponents for enhanced user experience.',
            techStack: ['Reactjs', 'CSS', '', ''],
            link: "https://github.com/ani1609/cart",
            github: 'https://github.com/ani1609/cart'
        },
        {
            id: 4,
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
