import React, {useState, useEffect} from 'react';
import '../index.css';
import '../styles/Navbar.css';
import Logo from '../images/A.webp';


function Navbar() 
{
    const [shouldRender, setShouldRender] = useState(false);
    const [navbarShadow, setNavbarShadow]=useState(false);
    const [hamMenu, setHamMenu]=useState(false);
    const [New, setNew]=useState(true);

    
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

    const scrollToExperience = () => 
    {
        const aboutSection = document.querySelector('.experience_container');
        const offsetTop = aboutSection.offsetTop;
        const scrollToPosition = offsetTop - 80;
        window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
        });
        setHamMenu(false);
    };

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

    const scrollToContact = () => 
    {
        const contactSection = document.querySelector('.contact_container');
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setHamMenu(false);
    };

    useEffect(() => 
    {
        const toggleBodyScroll = (scrollable) => 
        {
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
        // setHamMenu(true);
        }
        else
        {
        setHamMenu(false);
        setNew(true);
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
        setNew(false);
    }

    return (
        <div>
            {shouldRender && <nav className={navbarShadow ? 'navbar_container navbar_shadow' : 'navbar_container'}>
                <a href='https://portfolio-ani1609.vercel.app' className='logo-container'>
                <img src={Logo}/>
                </a>
                <div className='nav_tabs'>
                    <ol>
                        <li onClick={scrollToAbout}>About</li>
                        <li onClick={scrollToExperience}>Experience</li>
                        <li onClick={scrollToMajorProjects}>Work</li>
                        <li onClick={scrollToContact}>Contact</li>
                    </ol>
                    <a href={process.env.REACT_APP_RESUME_LINK} target='_blank'>Resume</a>
                </div>
                <div className='ham_icon' onClick={handleHamIconClick}>
                <span className={hamMenu ? 'rotateDown' : New ? '' : 'removeRotateDown'}></span>
                <span className={hamMenu ? New ? '' : 'remove' : ''}></span>
                <span className={hamMenu ? 'rotateUp' : New ? '' : 'removeRotateUp'}></span>
                </div>
                {hamMenu && <div className='blur' onClick={toggleHamMenu}></div>}
                <div className={hamMenu? 'ham_tabs ham_tabs_show':'ham_tabs ham_tabs_hide'}>
                <ol>
                    <li onClick={scrollToAbout}>About</li>
                    <li onClick={scrollToExperience}>Experience</li>
                    <li onClick={scrollToMajorProjects}>Work</li>
                    <li onClick={scrollToContact}>Contact</li>
                </ol>
                <a href={process.env.REACT_APP_RESUME_LINK} target='_blank'>Resume</a>
                </div>
            </nav>}
        </div>
    );
}

export default Navbar;

