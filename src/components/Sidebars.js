import {useState, useEffect} from 'react';
import '../index.css';
import '../styles/Sidebars.css';
import { ReactComponent as Github } from '../icons/github.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { ReactComponent as Codepen } from '../icons/codepen.svg';
import {ReactComponent as Leetcode} from "../icons/leetcode.svg";


function Sidebars() 
{
    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 2450);

        return () => clearTimeout(timer);
    }, []);
    
  return (
    <div>
        {shouldRender && <ul className='left_bar'>
            <li className='github hover_effect'>
              <a href='https://github.com/ani1609' target='_blank'><Github/></a>
            </li>
            <li className='codepen hover_effect'>
              <a href='' target='_blank'><Codepen/></a>
            </li>
            <li className='linkedin hover_effect'>
              <a href='https://www.linkedin.com/in/ankit-kr-chowdhury-1b1690218/' target='_blank'><Linkedin/></a>
            </li>
            <li className='instagram hover_effect'>
              <a href='https://www.instagram.com/ankit.chdry/' target='_blank'><Instagram/></a>
            </li>
            <li className='twitter hover_effect'>
              <a href='https://twitter.com/AnkitCh03046966' target='_blank'><Twitter/></a>
            </li>
            <li className='left_line'>
            </li>
        </ul>}

        {shouldRender && <ul className='right_bar'>
            <li className='email hover_effect'>
              <a href='mailto:ankitparallax@gmail.com'>ankitparallax@gmail.com</a>
            </li>
            <li className='right_line'>
            </li>
        </ul>}
    </div>
  );
}

export default Sidebars;

