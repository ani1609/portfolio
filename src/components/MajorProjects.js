import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MajorProjects.css';
import MajorProjectsItems from './MajorProjectsItems';
import prathamikSs from '../images/prathamik.png';
import neochatSs from '../images/neochat.png';
import spednwiseSs from '../images/spendwise.png';
import conversifySs from '../images/conversify.png';


function MajorProjects()
{
    const MajorProjects=[
        {
            id:1,
            title:"Prathamik",
            status:"Hack4Bengal 2.0 Top 10",
            description:"Step into the future of online education with an all-inclusive platform that seamlessly combines video calls, Google OCR vision, an online IDE, an AI chatbot, and other cutting-edge features for a dynamic and immersive learning journey.",
            image: prathamikSs,
            techStack:["React", "ChatGPT API", "VideoSDK", "Google OCR Vision", "Firebse", "Express.js", "MongoDB"],
            github:"https://github.com/ani1609/Prathamik",  
            link:"https://github.com/ani1609/Prathamik",
        },
        {
            id:2,
            title:"NeoChat",
            status:"Won Synchronicity - S1, JU",
            description:"This versatile chat web app offers customizable settings designed for individuals with diverse abilities, facilitating inclusive communication for individuals with varying disabilities like deafness, blindness, and colorblindness.",
            image: neochatSs,
            techStack:["React", "Firebase"],
            github:"https://github.com/ani1609/NeoChat", 
            link:"https://neo-chat-blush.vercel.app/",
        },
        {
            id: 3,
            title: "Spendwise",
            status:"KWoC '23, IIT KGP Triumph",
            description: "Designed and developed a user-friendly expense tracker app empowering individuals to effortlessly manage and analyze their financial transactions, fostering effective budgeting and financial awareness.",
            image: spednwiseSs,
            techStack: ["React", "Apexcharts", "Express.js", "MongoDB"],
            github: "https://github.com/ani1609/Spendwise",
            link: "https://spendwise-seven.vercel.app/",
        },
        {
            id: 4,
            title: "Conversify",
            status:"Under Development",
            description: "End-to-End Encrypted Chat App: Seamlessly integrating the OpenPGP library, this MERN-based application ensures secure and private messaging with real-time chat capabilities, prioritizing communication privacy and offering a seamless user experience.",
            image: conversifySs,
            techStack: ["React", "Socket.IO", "OpenPGP", "Express.js", "MongoDB"],
            github: "https://github.com/ani1609/Conversify",
            link: "https://github.com/ani1609/Conversify",
        }
    ]

    const MajorProjectHeadingRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.9
        };
    
        const observer = new IntersectionObserver(([entry], observer) => 
        {
            if (entry.isIntersecting) {
                entry.target.classList.add('showMajorProjectsHeading');
            }
        }, options);
    
        if (MajorProjectHeadingRef.current) observer.observe(MajorProjectHeadingRef.current);
    
        return () => 
        {
            if (MajorProjectHeadingRef.current) observer.unobserve(MajorProjectHeadingRef.current);
        };
    },[]);    


    return(
        <section className='major_projects_parent'>
            <h1 ref={MajorProjectHeadingRef}>Some Things I've Built</h1>
            {MajorProjects.map((MajorProject)=>{
                return(
                    <MajorProjectsItems 
                        MajorProject={MajorProject}
                        key={MajorProject.id}
                    />
                );
            })}
        </section>
    );
}

export default MajorProjects;