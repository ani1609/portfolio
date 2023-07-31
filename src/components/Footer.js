import React, { useRef, useEffect } from 'react';
import '../index.css';
import '../styles/Footer.css';
import { ReactComponent as Github } from '../icons/github.svg';
import { ReactComponent as Linkedin } from '../icons/linkedin.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';
import { ReactComponent as Codepen } from '../icons/codepen.svg';
import { ReactComponent as Leetcode } from '../icons/leetcode.svg';

function Footer() 
{

    return (
        <section className='footer_container'>
            <ul>
                <li><Github/></li>
                <li><Codepen/></li>
                <li><Linkedin/></li>
                <li><Instagram/></li>
                <li><Twitter/></li>
            </ul>
            <a href='https://github.com/ani1609/resume' target='_blank' >Designed & Built by Ankit Kr. Chowdhury</a>
        </section>
    );
}

export default Footer;