import React, {useState, useEffect} from 'react';
import '../styles/Sidebars.css';
import { ReactComponent as Github } from '../icons/github.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { ReactComponent as Codepen } from '../icons/codepen.svg';


function Sidebars() 
{
    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 2550);

        return () => clearTimeout(timer);
    }, []);
    
  return (
    <div>
      {shouldRender && <div className='sidebar_container'>
        <ul className='left_bar'>
            <li className='github hover_effect'>
              <a href=''><Github/></a>
            </li>
            <li className='linkedin hover_effect'>
              <a href=''><Linkedin/></a>
            </li>
            <li className='twitter hover_effect'>
              <a href=''><Twitter/></a>
            </li>
            <li className='codepen hover_effect'>
              <a href=''><Codepen/></a>
            </li>
            <li className='instagram hover_effect'>
              <a href=''><Instagram/></a>
            </li>
            <li className='left_line'>

            </li>
        </ul>

        <ul className='right_bar'>
            <li className='email hover_effect'>
              <a href='' className='hover'>rakesh856100@gmail.com</a>
            </li>
            <li className='right_line'>
              
            </li>
        </ul>
      </div>}
    </div>
  );
}

export default Sidebars;

