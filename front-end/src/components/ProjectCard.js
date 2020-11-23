import React from 'react';
import ProjectTasks from './ProjectTasks'
import ProjectContacts from './ProjectContacts'
import ProjectTeamMembers from './ProjectTeamMembers'
import { Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap'

const ProjectCard = ({project}) => {

    return (
   
            <Card style={{width: '20rem'}} border="primary" text="white">
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

    )
}

export default ProjectCard