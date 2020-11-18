import React from 'react';
import ProjectTasks from './ProjectTasks'
import ProjectContacts from './ProjectContacts'
import ProjectTeamMembers from './ProjectTeamMembers'

const ProjectCard = () => {

    return (
        <div>
            <h1>ProjectCard</h1>
            <ProjectTasks />
            <ProjectContacts />
            <ProjectTeamMembers />
        </div>
    )
}

export default ProjectCard