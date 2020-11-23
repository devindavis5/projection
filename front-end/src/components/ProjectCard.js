import React, { useState } from 'react';
import ProjectTask from './ProjectTask'
import ProjectContact from './ProjectContact'
import ProjectTeamMember from './ProjectTeamMember'
import { Card, ListGroup, ListGroupItem, Col, Row, Modal, Table } from 'react-bootstrap'

const ProjectCard = ({project}) => {
    const [tasksShow, setTasksShow] = useState(false);
    console.log(project)
    return (
       
        <div className="project-card">
            <Card style={{ width: '20.3rem' }}className="text-center mb-4" border="primary" text="white">
                <Card.Header>{project.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ListGroup >
                            <ListGroupItem onClick={() => setTasksShow(!tasksShow)} action variant="info">Tasks</ListGroupItem>
                            <ListGroupItem action variant="info">Contacts</ListGroupItem>
                            <ListGroupItem action variant="info">Team</ListGroupItem>
                            <ListGroupItem action variant="info">Notes</ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
            </Card>



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
              {project.project_tasks.map(pt => {
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