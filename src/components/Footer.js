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

    const githubLink = "https://github.com/ani1609";
    const codepenLink = "https://codepen.io/yourusername";
    const linkedinLink = "";
    const instagramLink = "https://www.instagram.com/ankit.chdry/";
    const twitterLink = "https://twitter.com/AnkitCh03046966";

    const handleLinkClick = (link) => 
    {
        window.open(link, '_blank');
    };

    return (
        <section className='footer_container'>
            <ul>
                <li onClick={() => handleLinkClick(githubLink)}><Github/></li>
                <li onClick={() => handleLinkClick(codepenLink)}><Codepen/></li>
                <li onClick={() => handleLinkClick(linkedinLink)}><Linkedin/></li>
                <li onClick={() => handleLinkClick(instagramLink)}><Instagram/></li>
                <li onClick={() => handleLinkClick(twitterLink)}><Twitter/></li>
            </ul>
            <a href='https://github.com/ani1609/resume' target='_blank' >Designed & Built by Ankit Kr. Chowdhury</a>
        </section>
    );
}

export default Footer;