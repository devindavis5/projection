import React, { useState } from 'react';
import ProjectTask from './ProjectTask'
import ProjectContact from './ProjectContact'
import ProjectTeamMember from './ProjectTeamMember'
import { Card, ListGroup, ListGroupItem, Col, Row, Modal, Table, Container } from 'react-bootstrap'
import moment from 'react-moment';
import 'moment-timezone';

Array.prototype.unique = function() {
    return this.filter(function (value, index, self) { 
      return self.indexOf(value) === index;
    });
}

const ProjectCard = ({project}) => {
    const [tasksShow, setTasksShow] = useState(false)
    const [notesShow, setNotesShow] = useState(false)
    const [contactsShow, setContactsShow] = useState(false)
    const [teamShow, setTeamShow] = useState(false)

    //sort project tasks by deadline
    const sortedTasks = project.project_tasks.sort(function(a,b){
        let c = new Date(a.deadline)
        let d = new Date(b.deadline)
        return c-d
    })

    // get all team members for the project
    let allTeamMembers = []
    let teamMembers = []
    project.project_tasks.map(pt => allTeamMembers.push(pt.team_members))
    allTeamMembers.flat().map(tm => teamMembers.includes(tm) ? null : teamMembers.push(tm))
    // let team = uniqueArray(teamMembers)
    

    // const filteredArray = teamMembers.filter(function(item, pos){
    //     return teamMembers.indexOf(item)== pos; 
    // });
    let team = teamMembers.unique()
    console.log(team)
    return (
       
        <div className="project-card">
            <Card style={{ width: '20.3rem' }}className="text-center mb-4" border="primary" text="white">
                <Card.Header>{project.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ListGroup >
                            <ListGroupItem onClick={() => setTasksShow(!tasksShow)} action variant="info">Tasks</ListGroupItem>
                            <ListGroupItem onClick={() => setContactsShow(!contactsShow)} action variant="info">Contacts</ListGroupItem>
                            <ListGroupItem onClick={() => setTeamShow(!teamShow)} action variant="info">Team</ListGroupItem>
                            <ListGroupItem onClick={() => setNotesShow(!notesShow)} action variant="info">Notes</ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal
                show={teamShow}
                onHide={() => setTeamShow(false)}
                dialogClassName="modal-90w"
                // aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {project.name} Team
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                    <Row className="justify-content-md-center">
                    {teamMembers.map(team => {
                        return (
                        <ProjectTeamMember team={team} key={team.id}/>) 
                    })}
                    </Row>
                    </Container>
                </Modal.Body>
            </Modal>
            <Modal
                show={contactsShow}
                onHide={() => setContactsShow(false)}
                dialogClassName="modal-90w"
                // aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {project.name} Contacts
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table responsive>
                    {project.contacts.map(contact => {
                        return (
                        <ProjectContact contact={contact} key={contact.id}/>) 
                    })}
                </Table>
                </Modal.Body>
            </Modal>
            <Modal
                show={notesShow}
                onHide={() => setNotesShow(false)}
                dialogClassName="modal-90w"
                // aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {project.name} Notes
                </Modal.Title>
                </Modal.Header>
                <Modal.Body> 
                    <Row>
                        <Col xs={11} >{project.notes}</Col>
                        <Col className="text-right">Edit</Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <Modal
                show={tasksShow}
                onHide={() => setTasksShow(false)}
                dialogClassName="modal-90w"
                // aria-labelledby="example-custom-modal-styling-title"
                size="xl"
                >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {project.name} Tasks
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table responsive>
                    {sortedTasks.map(pt => {
                        return (
                        <ProjectTask task={pt} key={pt.id}/>) 
                    })}
                </Table>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard