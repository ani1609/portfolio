import { useRef, useEffect, useState } from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

function MinorProjects ()
{
    const [showAllProjects, setShowAllProjects] = useState(false);
    const minorProjectHeadingRef = useRef(null);
    const minorProjects= [
        {
            id: 1,
            title: 'Edinix',
            description: "A React library which can be integrated to open-source websites for non-technicals to contribute.",
            techStack: ["React", "Tailwind", "Express.js", "MongoDB"],
            link: "https://github.com/niladrix719/HackNITR",
            github: "https://github.com/niladrix719/HackNITR",
            underdevelopment: true
        },
        {
            id: 2,
            title: 'Explorway',
            description: "Explore breathtaking destinations, send enquiries, and let our experienced team create personalized itineraries for an unforgettable journey.",
            techStack: ["React", "Firebase", "Express.js", "MongoDB"],
            link: "https://explorway.vercel.app/",
            github: "https://github.com/ani1609/Explorway",
            underdevelopment: true
        },
        {
            id: 3,
            title: 'UI Astra',
            description: "Exploring Framer Motion to bring dynamic and polished animations.",
            techStack: ["Nextjs", "Tailwind CSS", "Framer Motion", ""],
            link: "https://uiastra.vercel.app/",
            github: "https://github.com/ani1609/uiastra",
            underdevelopment: true
        },
        {
            id: 4,
            title: 'Venline',
            description: "Discover an innovative ecommerce marketplace, connecting vendors and customers. Explore farm-fresh fruits and vegetables, supporting local growers and promoting sustainability.",
            techStack: ["Ejs", "CSS", "Express.js", "MongoDB"],
            link: "https://github.com/ani1609/Venline",
            github: "https://github.com/ani1609/Venline",
        },
        {
            id: 5,
            title: 'Weather App',
            description: "This project seamlessly integrates OpenWeatherMap API to provide real-time weather data for a given locationand OpenCage APIs to deliver dynamic weather information based on user location, enhancing accuracy and user-friendliness.",
            techStack: ["OpenWeatherMap API", "OpenCage API", "", ""],
            link: "https://weather-sable-sigma.vercel.app/",
            github: "https://github.com/ani1609/weather",
        },
        {
            id: 6,
            title: 'Social Media Clone',
            description: "A prototype social media clone offering real-time post creation, likes, comments, and sharing features, complete with instantaneous notifications for a dynamic user experience.",
            techStack: ["React", "Socket.IO", "Express.js", "MongoDB"],
            link: "https://github.com/ani1609/HealTetherAssessment",
            github: "https://github.com/ani1609/HealTetherAssessment",
        },
        {
            id: 7,
            title: 'Calculator',
            description: "Basic calculator web app for performing arithmetic calculations.",
            techStack: ["HTML", "CSS", "JavaScript", ""],
            link: "https://ani1609.github.io/Calculator/",
            github: "https://github.com/ani1609/Calculator"
        },
        {
            id: 8,
            title: 'E-commerce Cart',
            description: "Created a basic dynamic ecommerce cart page in React, efficiently rendering each cart item using modular subcomponents for enhanced user experience.",
            techStack: ["React", "", "", ""],
            link: "https://github.com/ani1609/cart",
            github: "https://github.com/ani1609/cart"
        },
    ]

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
    },[]);

   
    return (
        <section className='minor_projects_parent'>
            <h1 ref={minorProjectHeadingRef}>Other Noteworthy Projects</h1>
            <div className='minor_projects_container'>
                {minorProjects.slice(0, showAllProjects ? minorProjects.length : 6).map((minorProject) => (
                    <MinorProjectItems
                        minorProject={minorProject}
                        key={minorProject.id}
                    />
                ))}
            </div>
            {minorProjects.length > 6 && (
                <button onClick={() => setShowAllProjects((prev) => !prev)}>
                    {showAllProjects ? 'Show Less' : 'Show More'}
                </button>
            )}
        </section>
    );
}

export default MinorProjects;
