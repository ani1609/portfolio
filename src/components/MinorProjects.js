import React from 'react';
import '../index.css';
import '../styles/MinorProjects.css';
import MinorProjectItems from './MinorProjectItems';

class MinorProjects extends React.Component {
    constructor() {
        super();
        this.headingRef = React.createRef();
        this.state = {
            projects: [
                {
                    projectLink: 'https://www.google.com/',
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
                    projectLink: 'https://amazon.in',
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

    componentDidMount() 
    {
        window.addEventListener('scroll', this.handleScroll);
    }
      
    handleScroll = () => 
    {
        const projectsHeading = this.headingRef.current;
        const windowHeight = window.innerHeight;
        const projectsPosition = projectsHeading.getBoundingClientRect().top;
      
        if (projectsPosition < windowHeight * 0.9) 
        {
            projectsHeading.classList.add('showMinorProjectsHeading');
        }
    };
      
    componentDidUnmount() 
    {
        window.removeEventListener('scroll', this.handleScroll);
    }
      

    render() 
    {
        const {projects} = this.state;

        return (
            <div>
                <div className='minor_projects_container'>
                    <div className='project_heading' ref={this.headingRef}>
                        <div className='project_line'></div>
                        <h1>Other Noteworthy Projects</h1>
                        <div className='project_line'></div>
                    </div>
                    {projects.map((project) => {
                        return (
                            <div className='project_container' key={project.id}>
                                <MinorProjectItems
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

export default MinorProjects;
