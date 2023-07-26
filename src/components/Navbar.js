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


    const scrollToAbout = () => 
    {
      const aboutSection = document.querySelector('.about_container');
      const offsetTop = aboutSection.offsetTop;
      const offsetHeight = aboutSection.offsetHeight;
      const scrollToPosition = offsetTop - 100;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }

    const scrollToMajorProjects = () => 
    {
      const majorProjectsSection = document.querySelector('.major_projects');
      const offsetTop = majorProjectsSection.offsetTop;
      // const offsetHeight = majorProjectsSection.offsetHeight;
      const scrollToPosition = offsetTop - 100;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }

    // const scrollToExperience = () => {
    //   const experienceSection = document.querySelector('.experience_container');
    //   experienceSection.scrollIntoView({ behavior: 'smooth' });
    // };


    const scrollToContact = () => {
      const contactSection = document.querySelector('.contact_container');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    };


    
  

  return (
    <div>
      {shouldRender && <nav className={navbar? 'navbar-container navbar-shadow':'navbar-container'}>
        <a href='http://localhost:3000/' className='logo-container'>
          <div></div>
        </a>
        <div className='nav_tabs'>
            <ol>
                <li onClick={scrollToAbout}><button>About</button></li>
                <li><button>Experience</button></li>
                <li onClick={scrollToMajorProjects}><button>Work</button></li>
                <li onClick={scrollToContact}><button>Contact</button></li>
            </ol>

            <a href='' target='_blank'>Resume</a>
        </div>
      </nav>}
    </div>
  );
}

export default Navbar;

