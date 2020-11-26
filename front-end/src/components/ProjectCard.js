import React, { useState } from 'react';
import ProjectTask from './ProjectTask'
import ProjectContact from './ProjectContact'
import ProjectTeamMember from './ProjectTeamMember'
import { Card, ListGroup, ListGroupItem, Col, Row, Modal, Table, Container, Form, Button } from 'react-bootstrap'
import moment from 'react-moment';
import 'moment-timezone';
import New from '../assets/new1.png'
import New2 from '../assets/new2.png'

const ProjectCard = ({project, createTask, deleteTask, updateTask, deleteContact, updateContact}) => {
    const [tasksShow, setTasksShow] = useState(false)
    const [notesShow, setNotesShow] = useState(false)
    const [contactsShow, setContactsShow] = useState(false)
    const [teamShow, setTeamShow] = useState(false)
    const [newTaskShow, setNewTaskShow] = useState(false)
    const [deadline, setDeadline] = useState('')
    const [description, setDescription] = useState('')
    const projectId = project.id

    // const tasksShowEvent = (pkey) => {
    //     setTasksShow(!tasksShow)
    //     setProjectId(pkey)
    // }

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
    // new task submit
    const taskSubmit = (e) => {
        e.preventDefault()
        const task = {
            deadline: deadline,
            description: description,
            projectId: projectId
        }
        createTask(task)
        setNewTaskShow(false)
        setDeadline('')
        setDescription('')
    }
    
    return (
       
        <div className="project-card">
            <Card style={{ width: '20.3rem' }}className="text-center mb-4" border="primary" text="white">
                <Card.Header>{project.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ListGroup >
                            <ListGroupItem onClick={() => setTasksShow(!tasksShow)} action variant="info">Tasks</ListGroupItem>
                            <ListGroupItem onClick={() => setContactsShow(!contactsShow)} action variant="info">Contacts</ListGroupItem>
                            {/* <ListGroupItem onClick={() => setTeamShow(!teamShow)} action variant="info">Team</ListGroupItem> */}
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
                    <h1>{project.name} Team</h1>
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
                    <h1>{project.name} Contacts</h1>
                    <img width="34" height="34" id="create-contact" alt="back" src={New}/>
                </Modal.Header>
                <Modal.Body>
                <Table responsive>
                    {project.contacts.map(contact => {
                        return (
                        <ProjectContact contact={contact} deleteContact={deleteContact} updateContact={updateContact} projectId={projectId} key={contact.id}/>) 
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
                <h1>{project.name} Notes</h1>
                <img width="34" height="34" id="edit-note" alt="back" src={New2}/>
                </Modal.Header>
                <Modal.Body> 
                    <Row>
                        <Col xs={11} >{project.notes}</Col>
                        <Col className="text-right align-self-center"></Col>
                        {/* <button type="button" class="btn btn-primary">✎</button> */}
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
                <h1>{project.name} Tasks</h1>
                <img width="34" height="34" id="create-ptask" alt="new" onClick={() => setNewTaskShow(!newTaskShow)} src={New}/>
                </Modal.Header>
                    {newTaskShow ? 
                    <Form id="create-ptask-form">
                <Row>
                    <Col xs={2}>
                    <Form.Control id="task-deadline" type="date" onChange={e => setDeadline(e.target.value)} placeholder="Deadline" />
                    </Col>
                    <Col xs={9}>
                    <Form.Control placeholder="Description" onChange={e => setDescription(e.target.value)}/>
                    </Col>
                    <Col xs={1}>
                    <Button id="task-submit" onClick={e => taskSubmit(e)} variant="primary float-right" type="submit">
                        Create
                    </Button>
                    </Col>
                </Row>
                </Form>
                : null }
                <Modal.Body>
                <Table responsive>
                    {sortedTasks.map(pt => {
                        return (
                        <ProjectTask task={pt} deleteTask={deleteTask} updateTask={updateTask} projectId={projectId} key={pt.id}/>) 
                    })}
                </Table>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectCard