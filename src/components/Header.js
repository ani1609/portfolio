import { useState, useEffect } from 'react';
import '../styles/Header.css';
import Alien from '../icons/alien2.png';


function Header() 
{
    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

  return (

      <header>
        {shouldRender&&<h4 className='greeting'>Hi, my name is </h4>}
        {shouldRender&&<h1 className='name'>Ankit Kr. Chowdhury.</h1>}
        {shouldRender&&<h1 className='what_i_do'>I build things for the web.</h1>}
        {shouldRender&&<p className='header_description'>
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
        </p>}
        {shouldRender&&<a href='google.com' className='sample_button'>Dummy Button</a>}
        {/* {shouldRender && <div className='alien'>
          <img src={Alien} alt="upward arrow" />
        </div>} */}
        
      </header>
  );
}

export default Header;

