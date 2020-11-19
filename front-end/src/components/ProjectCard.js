import React from 'react';
import ProjectTasks from './ProjectTasks'
import ProjectContacts from './ProjectContacts'
import ProjectTeamMembers from './ProjectTeamMembers'

const ProjectCard = ({project}) => {

    return (
        <div>
            <h1>{project.name}</h1>
            <ProjectTasks />
            <ProjectContacts />
            <ProjectTeamMembers />
        </div>
    )
}

export default ProjectCard