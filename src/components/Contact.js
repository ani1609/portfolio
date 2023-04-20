import React, { useRef, useEffect } from 'react';
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
            threshold: 0.7
        };

        const observer = new IntersectionObserver((entries, observer) => 
        {
            entries.forEach(entry => 
                {
                    if (entry.isIntersecting) 
                    {
                        entry.target.classList.add('show');
                    }
                });
        }, options);

        if (contactRef.current) observer.observe(contactRef.current);

        return () => 
        {
            if (contactRef.current) observer.unobserve(contactRef.current);
        };
    }, []);

    return (
        <div>
            <section className='Contact_Container' ref={contactRef}>

                <h1>Get In Touch</h1>
                <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <a href=''>Say Hello</a>

            </section>
        </div>
    );
}

export default Contact;