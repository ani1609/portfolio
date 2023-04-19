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
                            <h2><a href=''>Project 1</a></h2>
                            <p>The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. translates to Nor is there anyone who loves or pursues or.</p>
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
                            <h2><a href=''>Project 2</a></h2>
                            <p>The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. translates to Nor is there anyone who loves or pursues or.</p>
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
                            <h2><a href=''>Project 3</a></h2>
                            <p>The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. translates to Nor is there anyone who loves or pursues or.</p>
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



