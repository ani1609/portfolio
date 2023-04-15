import React from 'react';
import './Projects.css';
import ProjectItems from './ProjectItems';

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            shouldRenderParent: true,
            shouldRender: false,

            projects: [
                {
                    projectLink: 'google.com',
                    githubLink: '',
                    title: 'Project Title 1',
                    description: 'We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props to our SVG going to use it to pass.',
                    tool1: 'java',
                    tool2: 'C++',
                    tool3: 'C',
                    tool4: 'Python',
                    id: 1
                },
                {
                    projectLink: 'amazon.in',
                    githubLink: '',
                    title: 'Project Title 2',
                    description: 'We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props to our SVG going to use it to pass.',
                    tool1: 'HTML',
                    tool2: 'CSS',
                    tool3: 'JavaScript',
                    tool4: 'ReactJS',
                    id: 2
                },
                {
                    projectLink: 'google.com',
                    githubLink: '',
                    title: 'Project Title 3',
                    description: 'We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props to our SVG going to use it to pass.',
                    tool1: 'VueJS',
                    tool2: 'MongoDb',
                    tool3: 'Node.js',
                    tool4: 'JQuery',
                    id: 3
                },
                {
                    projectLink: 'amazon.in',
                    githubLink: '',
                    title: 'Project Title 4',
                    description: 'We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props to our SVG going to use it to pass.',
                    tool1: 'java',
                    tool2: 'C++',
                    tool3: 'C',
                    tool4: 'Python',
                    id: 4
                },
                {
                    projectLink: 'google.com',
                    githubLink: '',
                    title: 'Project Title 5',
                    description: 'We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props to our SVG going to use it to pass.',
                    tool1: 'HTML',
                    tool2: 'CSS',
                    tool3: 'JavaScript',
                    tool4: 'ReactJS',
                    id: 5
                },
                {
                    projectLink: 'amazon.in',
                    githubLink: '',
                    title: 'Project Title 6',
                    description: 'We are going to use it to pass props to our SVG and also to share logic later point in time. We are going to use it to pass props to our SVG going to use it to pass.',
                    tool1: 'VueJS',
                    tool2: 'MongoDb',
                    tool3: 'Node.js',
                    tool4: 'JQuery',
                    id: 6
                }
            ]
        };
    }

    

    componentDidMount() {
        window.addEventListener('scroll', this.handelScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handelScroll);
    }

    handelScroll = () => {
        const height=document.documentElement.clientHeight;
        console.log(height);
        const projectsContainer=document.querySelector('.projects-container');
        const projectsContainerY=projectsContainer.getBoundingClientRect().top;
        console.log(projectsContainerY);
        if (projectsContainerY+200<height)
        {
            this.setState({ shouldRender: true });
        }
    }

    renderProjectsContainer = () => {
        setTimeout(() => {
            this.setState({ shouldRenderParent: true });
        }, 1400);
    }

    render() {
        const { shouldRenderParent, shouldRender, projects } = this.state;
    
        return (
            <div>
                {shouldRenderParent ? (
                <div className='projects-container'>
                    {shouldRender && <div className='projects-animation'>
                        <div className='project-heading'>
                            <div className='project-line'></div>
                            <h1>Other Noteworthy Projects</h1>
                            <div className='project-line'></div>
                        </div>
                        {projects.map((project) => {
                            return (
                                <div className='project-container' key={project.id}>
                                <ProjectItems
                                    project={project}
                                    key={project.id}
                                />
                                </div>
                            )
                        })}
                    </div>}
                </div>
                ):(
                    this.renderProjectsContainer()
                )}
            </div>
        );
    }
    
}

export default Projects;
