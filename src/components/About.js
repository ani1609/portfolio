import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/About.css';
import MyPhoto from "../images/me1.png";

function About() 
{
    const aboutContainerRef = useRef(null);

    useEffect(() => 
    {
        const observer = new IntersectionObserver(
        (entries) => 
        {
            entries.forEach((entry) => 
            {
                if (entry.isIntersecting) 
                {
                    aboutContainerRef.current.classList.add('showAbout');
                }
            });
        },
        { threshold: 0.4 }
        );

        observer.observe(aboutContainerRef.current);

        return () => 
        {
            observer.disconnect();
        };

    }, []);

    return (
        <div>
        <section ref={aboutContainerRef} className='about_container'>
                <h1>About Me</h1>
                <div className='about_contents'>
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
