import React, { useRef, useEffect } from 'react';
import '../styles/About.css';

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
        <section ref={aboutContainerRef} className='about-container'>
                <div className='about-heading'>
                    <h1>About Me</h1>
                    <div className='about-line'></div>
                </div>
                <div className='about-contents'>
                    <div className='about-description'>
                        <p>
                            Hello! My name is Ankit and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                        </p>
                        <p>
                            I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <div className='skills-list'>
                            <ul>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                            <ul>
                                <li>ReactJS</li>
                                <li>Java</li>
                                <li>C++</li>
                            </ul>
                        </div>
                    </div>

                    <div className='about-photo'>
                    
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
