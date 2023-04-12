import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar() 
{
    const [navbar, setNavbar]=useState(false);
    const showShadow =() => 
    {
      if (window.scrollY>5)
      {
        setNavbar(true);
      }
      else
      {
        setNavbar(false);
      }
    }
    window.addEventListener('scroll',showShadow);

    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      {shouldRender && <nav className={navbar? 'navbar-container navbar-shadow':'navbar-container'}>
        <a href='http://localhost:3000/' className='logo-container'>
          <div></div>
        </a>
        <div className='navigation-links'>
            <ol className='ordered-list'>
                <li><a href=''>About</a></li>
                <li><a href=''>Experience</a></li>
                <li><a href=''>Work</a></li>
                <li><a href=''>Contact</a></li>
            </ol>

            <a href='' className='resume-button'>Resume</a>
        </div>
      </nav>}
    </div>
  );
}

export default Navbar;

