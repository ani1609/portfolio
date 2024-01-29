import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/MajorProjects.css';
import MajorProjectsItems from './MajorProjectsItems';
import p1 from '../images/explorWay.png';
import p2 from '../images/prathamik.png';
import p3 from '../images/venline.png';


function MajorProjects()
{
    
    const MajorProjects=[
        {
            id:1,
            title:"Prathamik",
            status:"",
            description:"Explore the future of online learning with an all-in-one platform featuring video calls, Google OCR vision, an online IDE, AI chatbot, and more for a seamless educational experience.",
            image: p2,
            link:"https://github.com/ani1609/Prathamik",
            techStack:["ChatGPT API", "VideoSDK", "Google OCR Vision", "Firebse", "MongoDB"],
            github:"https://github.com/ani1609/Prathamik",  
        },
        {
            id:2,
            title:"ExplorWay",
            status:"Under development",
            description:"Explore breathtaking destinations, send enquiries, and let our experienced team create personalized itineraries for an unforgettable journey.",
            image: p1,
            link:"https://explorway.vercel.app",
            techStack:["ReactJS","NodeJS","MongoDB","Express", "Firebase"],
            github:"https://github.com/ani1609/Traveloholic",
        },
        {
            id:3,
            title:"Venline",
            status:"",
            description:"Discover an innovative ecommerce marketplace, connecting vendors and customers. Explore farm-fresh fruits and vegetables, supporting local growers and promoting sustainability.",
            image: p3,
            link:"https://github.com/ani1609/Venline",
            techStack:["Ejs", "NodeJS", "MongoDB", "Express"],
            github:"https://github.com/ani1609/Venline", 
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