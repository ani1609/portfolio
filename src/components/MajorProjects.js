import React, { useRef, useEffect } from 'react';
import '../styles/MajorProjects.css';
import { ReactComponent as Github } from '../icons/github.svg';


function MajorProjects() {
    

    return (
        <div>
            <section className='Major_Projects'>
                <div className='Major_Projects_Heading'>
                    <h1>Some Things I've Built</h1>
                    <div className='Major_Projects_Line'></div>
                </div>
                <div className='Projects_Container'>
                    <div className='project_1'>
                        
                        <a href='' className='project1_img'></a>
                        <div className='empty'></div>
                        <div className='project_details'>
                            <h2><a href=''>Project 1 Title</a></h2>
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>MongoDB</li>
                            </ul>
                            <a href=''><Github/></a>
                        </div>
                    </div>

                    <div className='project_2'>
                        
                        <a href='' className='project2_img'></a>
                        <div className='project_details'>
                            <h2><a href=''>Project 2 Title</a></h2>
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>MongoDB</li>
                            </ul>
                            <a href=''><Github/></a>
                        </div>
                        <div className='empty'></div>
                    </div>

                    <div className='project_3'>
                        
                        <a href='' className='project3_img'></a>
                        <div className='empty'></div>
                        <div className='project_details'>
                            <h2><a href=''>Project 3 Title</a></h2>
                            <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>MongoDB</li>
                            </ul>
                            <a href=''><Github/></a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default MajorProjects;

