import React, { useRef, useEffect, useState } from 'react';
import '../index.css';
import '../styles/Experience.css';
import ExperienceItems from './ExperienceItems';


function Experience() 
{
    const experienceHeadingRef = useRef(null);

    const experiences = 
    [
        {
            id: 1,
            company: "Trafinova",
            jobTitle: "Freelance Full-Stack Developer",
            companyLink: "https://rablik.com/",
            date: "Dec 2023 - Present",
            description: 
            [
                "Spearheading frontend development for app 'Altrade', ensuring a cohesive and user-friendly experience to complement the robust backend functionality.",
                "Implementing and managing ONDC API calls for app 'Altrade', ensuring seamless integration and optimal functionality in the backend.",
            ],
        },
        {
            id: 2,
            company: "Freelancing",
            jobTitle: "Freelance Web Developer",
            companyLink: "",
            date: "Jul 2023 - Present",
            description: 
            [
                "I have experience in creating personal portfolios, blog websites, and custom e-learning platforms for tutors, providing tailored online solutions.",
            ],
        },
    ];

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };

        const observer = new IntersectionObserver((entries, observer) => 
        {
            entries.forEach(entry => 
            {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('showExperienceHeading');
                }
            });
        }, options);

        if (experienceHeadingRef.current) observer.observe(experienceHeadingRef.current);

        return () => 
        {
            if (experienceHeadingRef.current) observer.unobserve(experienceHeadingRef.current);
        };
    }, []);

    return (
        <section className='experience_container'>
            <h1 ref={experienceHeadingRef}>Where I've Worked</h1>
            <ExperienceItems
                experiences={experiences}
            />
        </section>
    );
}

export default Experience;
