import React, {useState, useEffect, useRef} from 'react';
import '../index.css';
import '../styles/Navbar.css';
import HamLine from '../images/ham.png';
import Logo from '../images/logo.jpg';


function Navbar() 
{
  const [shouldRender, setShouldRender] = useState(false);
  const [navbarShadow, setNavbarShadow]=useState(false);
  const [hambergerIcon, setHambergerIcon]=useState(false);
  const [hamMenu, setHamMenu]=useState(false);
  const [New, setNew]=useState(true);
  const hamSpan1 = useRef(null);
  const hamSpan2 = useRef(null);
  const hamSpan3 = useRef(null);
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

  useEffect(() => 
  {
    if (!New)
    {
      console.log(hamMenu);
      if (hamMenu)
      {
        hamSpan1.current.classList.add('rotateDown');
        hamSpan2.current.classList.add('remove');
        hamSpan3.current.classList.add('rotateUp');
      }
      else 
      {
        hamSpan1.current.classList.add('removeRotateDown');
        hamSpan2.current.classList.remove('remove');
        hamSpan3.current.classList.add('removeRotateUp');
      }
    }

  }, [hamMenu]);

  const handleHamIconClick = () =>
  {
    toggleHamMenu();
    setNew(false);
  }

  
  // useEffect(() => 
  // {
  //   console.log("check")
  //   if (hamMenu) 
  //   {
  //     // hamSpan1.current.classList.add('rotatedown');
  //     // hamSpan2.current.classList.add('remove');
  //     // hamSpan3.current.classList.add('rotateup');
  //   }
  //   else 
  //   {
  //     // hamSpan1.current.classList.add('rotateup');
  //     // hamSpan2.current.classList.remove('remove');
  //     // hamSpan3.current.classList.add('rotatedown');
  //   }
  // }, [hamMenu]);


  return (
    <div>
      {shouldRender && 
      <nav 
        className={navbarShadow ? 'navbar_container navbar_shadow' : 'navbar_container'}
      >
        <a href='http://localhost:3000/' className='logo-container'>

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
          {/* <i class="fa-solid fa-bars"></i> */}
          <span className={hamMenu ? 'rotateDown':''} ref={hamSpan1}></span>
          <span className={hamMenu ? 'remove':''} ref={hamSpan2}></span>
          <span className={hamMenu ? 'rotateUp':''} ref={hamSpan3}></span>
        </div>

        {hamMenu && <div className='blur' onClick={toggleHamMenu}></div>}

        <div className={hamMenu? 'ham_tabs ham_tabs_show':'ham_tabs ham_tabs_hide'}>

          {/* <div className='cross_icon' onClick={handleCrossIconClick}>
            <i class="fa-solid fa-xmark"></i>
          </div> */}
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

