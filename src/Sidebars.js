import React, {useState, useEffect} from 'react';
import './Sidebars.css';
import { ReactComponent as Github } from './icons/github.svg';
import { ReactComponent as Linkedin } from './icons/linkedin.svg';
import { ReactComponent as Instagram } from './icons/instagram.svg';
import { ReactComponent as Twitter } from './icons/twitter.svg';
import { ReactComponent as Codepen } from './icons/codepen.svg';
function Sidebars() 
{
  return (
    <div>
      <div className='sidebar-container'>
        <ul className='left-bar'>
            <li className='github hover-effect'>
              <a href=''><Github/></a>
            </li>
            <li className='linkedin hover-effect'>
              <a href=''><Linkedin/></a>
            </li>
            <li className='twitter hover-effect'>
              <a href=''><Twitter/></a>
            </li>
            <li className='codepen hover-effect'>
              <a href=''><Codepen/></a>
            </li>
            <li className='instagram hover-effect'>
              <a href=''><Instagram/></a>
            </li>
            <li className='left-line'>

            </li>
        </ul>

        <ul className='right-bar'>
            <li className='email hover-effect'>
              <a href='' className='hover'>rakesh856100@gmail.com</a>
            </li>
            <li className='right-line'>
              
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebars;

