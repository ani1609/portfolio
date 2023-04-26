import React from 'react';
import {ReactComponent as FolderIcon} from "../icons/folder.svg";
import {ReactComponent as GithubIcon} from "../icons/github.svg";
import '../styles/MinorProjectItems.css';

class MinorProjectItems extends React.Component
{

    constructor()
    {
        super();
        this.projectRef = React.createRef();
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
      
      handleScroll = () => {
        const projectsElement = this.projectRef.current;
        const windowHeight = window.innerHeight;
        const projectsPosition = projectsElement.getBoundingClientRect().top;
      
        if (projectsPosition < windowHeight * 0.7) {
            projectsElement.classList.add('showMinorProject');
        }
      };
      
      componentDidUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      


    render()
    {
        const {projectLink, githubLink, title, description, tool1, tool2, tool3, tool4} = this.props.project;

        return (
            <a ref={this.projectRef} href={projectLink} className='project' target='_blank'>
                <div className='icons'>
                    <div className='folder_icon'>
                        <FolderIcon/>
                    </div>
                    <a href='' className='github_icon'>
                        <GithubIcon/>
                    </a>
                </div>

                <h2 className='project_title'>{title}</h2>

                <p>{description}</p>

                <div className='tools_used'>
                    <div className='tool1'>{tool1}</div>
                    <div className='tool2'>{tool2}</div>
                    <div className='tool3'>{tool3}</div>
                    <div className='tool4'>{tool4}</div>
                </div>
            </a>
        );
    }
}

export default MinorProjectItems;

