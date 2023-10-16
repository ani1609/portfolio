import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/Experience.css';

function Experience() 
{
    const experienceHeadingRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
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

        return () => 
        {
            if (experienceHeadingRef.current) observer.unobserve(experienceHeadingRef.current);
        };
    }, []);

    return (
        <div>
        <section className='experience_container'>
                <h1 ref={experienceHeadingRef}>Where I've Worked</h1>
                
            </section>
        </div>
    );
}

export default Experience;
