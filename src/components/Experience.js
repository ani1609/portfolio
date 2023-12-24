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
            jobTitle: "Backend Developer Intern",
            companyLink: "",
            date: "Dec 2023 - Present",
            description: 
            [
                "Engineered a robust user authentication system employing JWT, JOI, and bcrypt for enhanced security.",
                "Utilized Multerfor document uploads, followed by text extraction using tesseract OCR and pdf-parse to store content in the database.",
                "Currently engaged in working with the ONDC API for seamless integration and functionality enhancements."
            ],
        },
        {
            id: 2,
            company: "KWoC 2023",
            jobTitle: "Open Source Project Mentor",
            companyLink: "https://kwoc.kossiitkgp.org/", // You can replace this with the actual link
            date: "Nov 2023 - Jan 2024",
            description: [
                "Currently serving as a mentor for the ongoing 'Kharagpur Winter of Code (KWoC) 2023' event organized by IIT Kharagpur.",
                `Initiated and led the open source project 'Spendwise', which gained approval and is currently receiving active participation from a community of contributors.`,
                "Guiding and collaborating with contributors on a daily basis, fostering a collaborative environment for code development and improvement within Spendwise.",
                "Overseeing the growth and development of Spendwise from its initial stages, ensuring its ongoing success as a valuable open source contribution.",
            ],
        },
        {
            id: 3,
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
