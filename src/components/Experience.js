import { useRef, useEffect } from 'react';
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
            jobTitle: "SDE Intern",
            companyLink: "",
            date: "Dec 2023 - Present",
            description: 
            [
                "Designed and implemented a secure user authentication system using JSON Web Tokens (JWT), JOI validation for input integrity, and bcrypt for password hashing, ensuring a robust and protected environment for user accounts.",
                "Developed a feature for uploading documents using Multer, a file-handling middleware. Integrated text extraction capabilities using Tesseract OCR and pdf-parse, enabling the extraction and storage of document content in the database.",
                "Currently involved in integrating and enhancing functionality with the Open Network for Digital Commerce (ONDC) API, aiming to seamlessly incorporate ONDC services and elevate overall system capabilities."
            ],
        },
        {
            id: 2,
            company: "KWoC 2023",
            jobTitle: "Mentor",
            companyLink: "https://kwoc.kossiitkgp.org/", // You can replace this with the actual link
            date: "Nov 2023 - Jan 2024",
            description: [
                "Currently serving as a mentor for the ongoing 'Kharagpur Winter of Code (KWoC) 2023' event organized by IIT Kharagpur, providing guidance and support to participating students as they work on exciting coding projects.",
                "Initiated and led the open source project 'Spendwise,' gaining approval and fostering active participation from a dedicated community of contributors. Actively guiding and collaborating with contributors on a daily basis, I cultivate a collaborative environment for code development and improvement within the Spendwise project.",
                "Overseeing the growth and development of Spendwise from its initial stages, ensuring its ongoing success as a valuable open source contribution. Leading efforts to expand features, enhance code quality, and encourage a vibrant community of contributors.",
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
                "As a freelancer, I have successfully delivered a wide range of projects, including the creation of personal portfolios, blog websites, custom e-learning platforms for tutors, and various other tailored online solutions.",
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
    },[]);

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
