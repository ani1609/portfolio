import React from 'react';
import '../styles/Projects.css';
import ProjectItems from './ProjectItems';

class Projects extends React.Component {
    constructor() {
        super();
        this.projectsRef = React.createRef();
        this.state = {
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
        window.addEventListener('scroll', this.handleScroll);
      }
      
      handleScroll = () => {
        const projectsElement = this.projectsRef.current;
        const windowHeight = window.innerHeight;
        const projectsPosition = projectsElement.getBoundingClientRect().top;
      
        if (projectsPosition < windowHeight * 0.7) {
            projectsElement.classList.add('show');
        }
      };
      
      componentDidUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
      

    render() {
        const {projects } = this.state;

        return (
            <div>
                <div ref={this.projectsRef} className='projects-container'>
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
                </div>
            </div>
        );
    }
}

export default Projects;
