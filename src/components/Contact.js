import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/Contact.css';


function Contact() 
{

    const contactRef = useRef(null);

    useEffect(() => 
    {
        const options = 
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        };
    
        const observer = new IntersectionObserver(([entry], observer) => 
        {
            if (entry.isIntersecting) {
                entry.target.classList.add('showContact');
            }
        }, options);
    
        if (contactRef.current) observer.observe(contactRef.current);
    
        return () => 
        {
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);   

    return (
        <section className='contact_container' ref={contactRef}>
            <h4>04.</h4>
            <h1>Get In Touch</h1>
            <p>Feel free to reach out to me through the contact button below. I'm excited to connect and discuss any web development opportunities or projects you have in mind. Let's build something great together!</p>
            <a href='mailto:rakesh856100@gmail.com'>Let's Connect</a>

        </section>
    );
}

export default Contact;