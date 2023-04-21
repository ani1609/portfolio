import React, { useState, useEffect } from 'react';
import '../styles/TopButton.css';
import Upward from '../icons/upwardArrow.png';


const TopButton = () => 
{
    const handleClick = () => 
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [showButton, setShowButton] = useState(false);

    useEffect(() => 
    {
        const handleScroll = () => 
        {
            if (window.scrollY > 200) 
            {
                setShowButton(true);
            } 
            else 
            {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => 
        {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='Top_Button_Container'>
            {showButton  && <button onClick={handleClick}>
                <img src={Upward} alt="upward arrow" />
            </button>}
        </div>
        
    );
};

export default TopButton;
