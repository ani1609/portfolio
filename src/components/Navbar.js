import React, {useState, useEffect} from 'react';
import '../index.css';
import '../styles/Navbar.css';

function Navbar() 
{
  const [shouldRender, setShouldRender] = useState(false);
  const [navbarShadow, setNavbarShadow]=useState(false);
  const [navbarRemove, setNavbarRemove]=useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => 
  {
    if (window.scrollY>5)
    {
      setNavbarShadow(true);
    }
    else
    {
      setNavbarShadow(false);
    }
  

    if (window.scrollY > prevScrollY && window.scrollY > 100) 
    {
      setNavbarRemove(true);
    }
    else if (window.scrollY < prevScrollY) 
    {
      setNavbarRemove(false);
    }
    setPrevScrollY(window.scrollY);
  };

  useEffect(() => 
  {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[prevScrollY]);

  
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
    const scrollToPosition = offsetTop - 20;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }

  const scrollToMajorProjects = () => 
  {
    const majorProjectsSection = document.querySelector('.major_projects_parent');
    const offsetTop = majorProjectsSection.offsetTop;
    const scrollToPosition = offsetTop - 20;
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
      {shouldRender && 
      <nav 
        className={navbarRemove? 'navbar_container navbar_remove' : navbarShadow? 'navbar_container navbar_shadow navbar_bring' : 'navbar_container navbar_bring'}
      >
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

