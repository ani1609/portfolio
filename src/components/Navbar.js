import React, {useState, useEffect} from 'react';
import '../styles/Navbar.css';

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


    const scrollToAbout = () => {
      const aboutSection = document.querySelector('.About_Container');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToMajorProjects = () => {
      const majorProjectsSection = document.querySelector('.Major_Projects');
      majorProjectsSection.scrollIntoView({ behavior: 'smooth' });
    };

    // const scrollToContact = () => {
    //   const contactSection = document.querySelector('.Contact_Container');
    //   contactSection.scrollIntoView({ behavior: 'smooth' });
    // };


    const scrollToContact = () => {
      const contactSection = document.querySelector('.Contact_Container');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    };


    
  

  return (
    <div>
      {shouldRender && <nav className={navbar? 'navbar-container navbar-shadow':'navbar-container'}>
        <a href='http://localhost:3000/' className='logo-container'>
          <div></div>
        </a>
        <div className='navigation-links'>
            <ol>
                <li><button onClick={scrollToAbout}>About</button></li>
                <li><button>Experience</button></li>
                <li><button onClick={scrollToMajorProjects}>Work</button></li>
                <li><button onClick={scrollToContact}>Contact</button></li>
            </ol>

            <a href='' className='resume-button'>Resume</a>
        </div>
      </nav>}
    </div>
  );
}

export default Navbar;

