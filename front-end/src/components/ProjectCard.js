import React from 'react';
import ProjectTasks from './ProjectTasks'
import ProjectContacts from './ProjectContacts'
import ProjectTeamMembers from './ProjectTeamMembers'
import { Card, ListGroup, ListGroupItem, Col } from 'react-bootstrap'

const ProjectCard = ({project}) => {

    return (
        <div className='project-card'>
            <Card className='text-center'>
                <Card.Body>
                <Card.Title >{project.name}</Card.Title>
                    <Card.Text>
                        <ListGroup>
                            <ListGroupItem action>Tasks</ListGroupItem>
                            <ListGroupItem action>Contacts</ListGroupItem>
                            <ListGroupItem action>Team</ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard