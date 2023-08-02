import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MajorProjectsItems.css';
import { ReactComponent as Github } from '../icons/github.svg';


function MajorProjectsItems(props) 
{
    const { MajorProject } = props;
    const majorProjectOddRef = useRef(null);
    const majorProjectEvenRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries, observer) => 
        {
            entries.forEach(entry => 
            {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('showMajorProjects');
                }
            });
        }, options);

        if (majorProjectOddRef.current) observer.observe(majorProjectOddRef.current);
        if (majorProjectEvenRef.current) observer.observe(majorProjectEvenRef.current);

        return () => 
        {
            if (majorProjectOddRef.current) observer.unobserve(majorProjectOddRef.current);
            if (majorProjectEvenRef.current) observer.unobserve(majorProjectEvenRef.current);
        };
    }, []);

    return (
        <div>
            {MajorProject.id % 2 !== 0 ? (
                <div className='major_project_odd' ref={majorProjectOddRef}>
                    <a href={MajorProject.link} target='_blank'>
                        <img src={MajorProject.image} />
                    </a>
                    <div className='project_details_odd'>
                        <h2>
                            <a href={MajorProject.link} target='_blank'>
                                {MajorProject.title}
                            </a>
                            {MajorProject.status && <h4>{MajorProject.status}</h4>}
                        </h2>
                        <p>{MajorProject.description}</p>
                        <ul>
                            {MajorProject.techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <a href={MajorProject.github} target='_blank'><Github/></a>
                    </div>
                </div>
            )
            :
                <div className='major_project_even' ref={majorProjectEvenRef}>
                    <a href={MajorProject.link} target='_blank'>
                        <img src={MajorProject.image} />
                    </a>
                    <div className='project_details_even'>
                        <h2>
                            <a href={MajorProject.link} target='_blank'>
                                {MajorProject.title}
                            </a>
                            {MajorProject.status && <h4>{MajorProject.status}</h4>}
                        </h2>
                        <p>{MajorProject.description}</p>
                        <ul>
                            {MajorProject.techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                        <a href={MajorProject.github} target='_blank'><Github/></a>
                    </div>
                </div>
            }
        </div>
    );
}

export default MajorProjectsItems;