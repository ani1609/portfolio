import React, { useRef, useEffect, useState } from 'react';
import '../index.css';
import '../styles/Experience.css';


function Experience() 
{
    const experienceHeadingRef = useRef(null);
    const experienceContentRef = useRef(null);
    const experienceDescriptionRef = useRef(null);
    const sliderRef = useRef(null);
    const experiences = 
    [
        {
            company: "Rablik",
            jobTitle: "Full Stack Developer Intern",
            companyLink: "https://rablik.com/",
            date: "Oct 2023 - Present",
            description: 
            [
                "I am currently enhancing my web development skills through practical experience in designing and implementing web applications.",
                "Additionally, Iamactively cultivating my soft skills, including effective communication, collaboration and adaptability, fostering professionalism.",
            ],
        },
    ];
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

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
                    entry.target.classList.add('showExperience');
                }
            });
        }, options);

        if (experienceHeadingRef.current) observer.observe(experienceHeadingRef.current);
        if (experienceContentRef.current) observer.observe(experienceContentRef.current);

        return () => 
        {
            if (experienceHeadingRef.current) observer.unobserve(experienceHeadingRef.current);
            if (experienceContentRef.current) observer.unobserve(experienceContentRef.current);
        };
    }, []);

    useEffect(() =>
    {
        // console.log(selectedExperienceIndex);
    },[selectedExperience]);

    useEffect(() => 
    {
        if (experienceDescriptionRef.current) {
            experienceDescriptionRef.current.classList.remove('fade_in_description');
            experienceDescriptionRef.current.style.opacity = '0';
        
            setTimeout(() => {
              experienceDescriptionRef.current.classList.add('fade_in_description');
            }, 1);
        }
    },[selectedExperience]);

    const moveSlider = (index) =>
    {
        sliderRef.current.style.transform = `translateY(${40 * index}px)`;
    };
      


    return (
        <section className='experience_container'>
            <h1 ref={experienceHeadingRef}>Where I've Worked</h1>
            <div className='experience_content' ref={experienceContentRef}>
                <div className='experience_tabs'>
                    {experiences.map((experience, index) => (
                        <button
                            key={index}
                            onClick={() => {setSelectedExperience(experience); setSelectedExperienceIndex(index); moveSlider(index);}}
                            className={selectedExperienceIndex === index ? 'selected_experience' : ''}
                        >
                            {experience.company}
                        </button>
                    ))}
                    <div className='slider' ref={sliderRef}></div>
                </div>
                <div className='experience_description' ref={experienceDescriptionRef}>
                    <h2>{selectedExperience.jobTitle} <span>@ <a href={selectedExperience.companyLink} target="_blank">{selectedExperience.company}</a></span></h2>
                    <p>{selectedExperience.date}</p>
                    <ul>
                        {selectedExperience.description.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Experience;
