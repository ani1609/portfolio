import React, {useState, useEffect, useRef} from 'react';
import '../index.css';
import '../styles/Navbar.css';
import HamLine from '../images/ham.png';
import { HiMenu, HiBars3} from 'react-icons/hi';
import { HiBars3BottomRight} from 'react-icons/hi';


function Navbar() 
{
  const [shouldRender, setShouldRender] = useState(false);
  const [navbarShadow, setNavbarShadow]=useState(false);
  const [hambergerIcon, setHambergerIcon]=useState(false);
  const [hamMenu, setHamMenu]=useState(false);
  const hamIconRef = useRef(null);
  const crossIconRef = useRef(null);

  
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
    const scrollToPosition = offsetTop - 80;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
    setHamMenu(false);
  }

  const scrollToMajorProjects = () => 
  {
    const majorProjectsSection = document.querySelector('.major_projects_parent');
    const offsetTop = majorProjectsSection.offsetTop;
    const scrollToPosition = offsetTop - 80;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
    setHamMenu(false);
  }

  // const scrollToExperience = () => {
  //   const experienceSection = document.querySelector('.experience_container');
  //   experienceSection.scrollIntoView({ behavior: 'smooth' });
  // };


  const scrollToContact = () => 
  {
    const contactSection = document.querySelector('.contact_container');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setHamMenu(false);
  };

  useEffect(() => {
    const toggleBodyScroll = (scrollable) => {
      document.body.style.overflow = scrollable ? "auto" : "hidden";
    };

    if (hamMenu) {
      toggleBodyScroll(false);
    } else {
      toggleBodyScroll(true);
    }

  }, [hamMenu]);


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
  };

  const handleResize = () =>
  {
    if (window.innerWidth<769) 
    {
      setHambergerIcon(true);
    }
    else
    {
      setHambergerIcon(false);
    }
  }

  useEffect(() => 
  {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  const toggleHamMenu = () =>
  {
    setHamMenu(!hamMenu);
  }

  const handleHamIconClick = () =>
  {
    toggleHamMenu();
  }

  const handleCrossIconClick = () =>
  {
    toggleHamMenu();
  }

  const handleMenuClick = () => 
  {
    setHamMenu(false);
  };


  return (
    <div>
      {shouldRender && 
      <nav 
        className={navbarShadow ? 'navbar_container navbar_shadow' : 'navbar_container'}
      >
        <a href='http://localhost:3000/' className='logo-container'>
          <div></div>
        </a>
        <div className='nav_tabs'>
            <ol>
                <li onClick={scrollToAbout}>About</li>
                <li>Experience</li>
                <li onClick={scrollToMajorProjects}>Work</li>
                <li onClick={scrollToContact}>Contact</li>
            </ol>
            <a href='' target='_blank'>Resume</a>
        </div>

        <div className='ham_icon' onClick={handleHamIconClick}>
          <i class="fa-solid fa-bars"></i>
        </div>

        {hamMenu && <div className='blur' onClick={handleMenuClick}></div>}

        <div className={hamMenu? 'ham_tabs ham_tabs_show':'ham_tabs ham_tabs_hide'}>

          <div className='cross_icon' onClick={handleCrossIconClick}>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <ol>
              <li onClick={scrollToAbout}>About</li>
              <li>Experience</li>
              <li onClick={scrollToMajorProjects}>Work</li>
              <li onClick={scrollToContact}>Contact</li>
          </ol>
          <a href='' target='_blank'>Resume</a>
        </div>

      </nav>}
    </div>
  );
}

export default Navbar;

