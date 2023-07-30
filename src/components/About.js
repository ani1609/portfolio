import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/About.css';
import MyPhoto from "../images/me1.png";

function About() 
{
    const aboutHeadingRef = useRef(null);
    const aboutContentsRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries, observer) => 
        {
            entries.forEach(entry => 
            {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('showAbout');
                }
            });
        }, options);

        if (aboutHeadingRef.current) observer.observe(aboutHeadingRef.current);
        if (aboutContentsRef.current) observer.observe(aboutContentsRef.current);

        return () => 
        {
            if (aboutHeadingRef.current) observer.unobserve(aboutHeadingRef.current);
            if (aboutContentsRef.current) observer.unobserve(aboutContentsRef.current);
        };
    }, []);

    return (
        <div>
        <section className='about_container'>
                <h1 ref={aboutHeadingRef}>About Me</h1>
                <div className='about_contents' ref={aboutContentsRef}>
                    <div className='about_description'>
                        <p>
                            Hey there, I'm Ankit, a 3rd-year B.Tech student in Computer Science and Engineering (CSE). Web development is my ultimate passion, and I thrive in creating captivating websites with seamless user experiences.
                        </p>
                        <p>
                            Throughout my academic journey, coding has opened up endless possibilities, and I'm always eager to learn more. While web development is my primary focus, I'm also intrigued by Data Structures and Algorithms (DSA) for becoming a well-rounded coder.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <div className='skills_list'>
                            <ul>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>Firebase</li>
                            </ul>
                            <ul>
                                <li>MongoDB</li>
                                <li>NodeJS</li>
                                <li>Express</li>
                            </ul>
                        </div>
                        <p>
                            As a 3rd-year CSE student, I embrace challenges and seek growth. Collaborating with like-minded individuals and making an impact in computer science excites me.
                        </p>
                        <p>
                            Innovation, curiosity, and a relentless pursuit of excellence define my journey as a web developer. I can't wait to see where this exciting path leads me next.
                        </p>
                    </div>

                    <div className='about_photo'>
                        {/* <img src={MyPhoto}/> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
