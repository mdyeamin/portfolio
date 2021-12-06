import React from 'react';
import { NavLink } from 'react-router-dom';
import './Project.css'
const Project = ({ project }) => {

    const { projectName, id, projectImg } = project
    return (
        <>
            <NavLink style={{ textDecoration: 'none' }} to={`/project/${id}`}>
                <div className="project">
                    <img src={projectImg} alt="" />
                    <h6 className="text-white text-start name">{projectName}</h6>
                    <h6 className="text-white text-start view">View Project</h6>
                </div>
            </NavLink>
        </>
    );
};

export default Project;