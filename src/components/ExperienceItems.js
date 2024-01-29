import React, { useRef, useEffect, useState } from 'react';
import '../index.css';
import '../styles/ExperienceItems.css';


function ExperienceItems(props) 
{
    const { experiences } = props;
    const experienceContentRef = useRef(null);
    const experienceDescriptionRef = useRef(null);
    const veticalSliderRef = useRef(null);
    const horizontalSliderRef = useRef(null);
    const [screenLessThan650, setScreenLessThan650] = useState(window.innerWidth < 650);

    const handleResize = () => 
    {
        setScreenLessThan650(window.innerWidth < 650);
    };

    useEffect(() => 
    {
        window.addEventListener('resize', handleResize);
        return () => 
        {
            window.removeEventListener('resize', handleResize);
        };
    },[]);
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
                    entry.target.classList.add('showExperienceContent');
                }
            });
        }, options);

        if (experienceContentRef.current) observer.observe(experienceContentRef.current);

        return () => 
        {
            if (experienceContentRef.current) observer.unobserve(experienceContentRef.current);
        };
    },[]);

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
        if (screenLessThan650)
        {
            horizontalSliderRef.current.style.transform = `translateX(${140 * index}px)`;
        }
        else
        {
            veticalSliderRef.current.style.transform = `translateY(${40 * index}px)`;
        }
    };

    useEffect(() =>
    {
        if (window.innerWidth < 650)
        {
            setScreenLessThan650(true);
        }
        else
        {
            setScreenLessThan650(false);
        }
    },[]);
      


    return (
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
                {
                    screenLessThan650 ? 
                    (
                        <div className='horizontal_slider' ref={horizontalSliderRef}></div>
                    ) : 
                    (
                        <div className='vertical_slider' ref={veticalSliderRef}></div>
                    )
                }
            </div>
            <div className='experience_description' ref={experienceDescriptionRef}>
                <h2>{selectedExperience.jobTitle} <span>@ <a href={selectedExperience.companyLink} target="_blank" onClick={(e) => {if (selectedExperience.id !== 2) {e.preventDefault();}}}>{selectedExperience.company}</a></span></h2>
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
    );
}

export default ExperienceItems;
