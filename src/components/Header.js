import { useState, useEffect } from 'react';
import '../index.css';
import '../styles/Header.css';
import Alien from '../icons/alien2.png';


function Header() 
{
    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 1450);

        return () => clearTimeout(timer);
    }, []);

  return (

      <header>
        {shouldRender&&<h4 className='greeting'>Hi, my name is </h4>}
        {shouldRender&&<h1 className='name'>Ankit Kr. Chowdhury.</h1>}
        {shouldRender&&<h1 className='what_i_do'>I build things for the web.</h1>}
        {shouldRender&&<p className='header_description'>
        Enthusiastic student web developer with a keen interest in learning and applying front-end and back-end technologies. Dedicated to honing skills and creating innovative web solutions that captivate users and solve real-world challenges.
        </p>}
        {shouldRender&&<a href='google.com' className='sample_button'>Dummy Button</a>}
        {/* {shouldRender && <div className='alien'>
          <img src={Alien} alt="upward arrow" />
        </div>} */}
        
      </header>
  );
}

export default Header;

