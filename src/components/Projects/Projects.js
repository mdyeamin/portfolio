import React, { useEffect, useState } from 'react';
import Project from '../Project/Project'
import './Projects.css'
const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <h2 className="text-white my-5">My best {projects.length} Projects</h2>
            <div className="container projects">
                {
                    projects.map(project => <Project
                        key={project.projectId}
                        project={project}
                    ></Project>)
                }
            </div>
        </>
    );
};

export default Projects;