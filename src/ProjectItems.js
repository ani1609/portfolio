import React from 'react';
import {ReactComponent as FolderIcon} from "./icons/folder.svg";
import {ReactComponent as GithubIcon} from "./icons/github.svg";
import './ProjectItems.css';

class ProjectItems extends React.Component
{
    render()
    {
        const {projectLink, githubLink, title, description, tool1, tool2, tool3, tool4} = this.props.project;

        return (
            <a href={projectLink} className='project'>
                <div className='icons'>
                    <div className='folder-icon'>
                        <FolderIcon/>
                    </div>
                    <a href='' className='github-icon'>
                        <GithubIcon/>
                    </a>
                </div>

                <h2 className='project-title'>{title}</h2>

                <p className='project-description'>{description}</p>

                <div className='tools-used'>
                    <div className='tool1'>{tool1}</div>
                    <div className='tool2'>{tool2}</div>
                    <div className='tool3'>{tool3}</div>
                    <div className='tool4'>{tool4}</div>
                </div>
            </a>
        );
    }
}

export default ProjectItems;

