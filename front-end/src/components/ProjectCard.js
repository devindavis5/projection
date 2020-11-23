import React from 'react';
import ProjectTasks from './ProjectTasks'
import ProjectContacts from './ProjectContacts'
import ProjectTeamMembers from './ProjectTeamMembers'
import { Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap'

const ProjectCard = ({project}) => {

    return (
        <div className="project-card">
            <Card style={{ width: '20.3rem' }}className="text-center mb-4" border="primary" text="white">
                <Card.Header>{project.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ListGroup >
                            <ListGroupItem action variant="info">Tasks</ListGroupItem>
                            <ListGroupItem action variant="info">Contacts</ListGroupItem>
                            <ListGroupItem action variant="info">Team</ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard