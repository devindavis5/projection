import React, { useState } from 'react';
import { Card, ListGroupItem, Table, Form, Row, Col, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';

const ProjectTask = ({task, deleteTask, projectId, updateTask}) => {
    const [formShow, setFormShow] = useState(false)
    // const [notesShow, setNotesShow] = useState(false)
    // const [contactsShow, setContactsShow] = useState(false)
    // const [teamShow, setTeamShow] = useState(false)
    // const [newTaskShow, setNewTaskShow] = useState(false)
    const [editDeadline, setEditDeadline] = useState(task.deadline)
    const [description, setDescription] = useState(task.description)
    const taskId = task.id

    let split = task.deadline.split('-')
    let mm = split[1]
    let dd = split[2]
    let yyyy = split[0]
    let deadline = mm + '/' + dd + '/' + yyyy
    const deleteProjectTask = () => {
        deleteTask(task, projectId)
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            deadline: editDeadline,
            description: description,
            status: 'incomplete'
        }
        updateTask(taskId, taskData)
        setFormShow(false)
        // console.log(taskId)
    }
  {/* <Form id="create-ptask-form">
            <Row>
            <Col xs={2}>
              <Form.Control id="task-deadline" type="date" onChange={e => setEditDeadline(e.target.value)} placeholder="Deadline" />  
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
            </Form> */}
    return (
        <>
        <tr onClick={() => setFormShow(true)}>
        {!formShow ?    
        <td class="align-middle"><strong>{deadline}</strong></td>  
        : 
        <td class="align-middle">
        <Form.Control type="date" onChange={e => setEditDeadline(e.target.value)} value={editDeadline} />
        </td>
        } 
        {!formShow ? 
        <td class="align-middle">{task.description}</td>
        :
        <td class="align-middle">
        <Form.Control value={description} onChange={e => setDescription(e.target.value)}/> 
        </td>
        }
        {!formShow ?
        <td class="align-middle"size="sm" style={{ textAlign:"right" }}><button onClick={() => deleteProjectTask()} type="button" class="btn btn-primary">X</button></td>
        :
        <td class="align-middle"size="sm" style={{ textAlign:"right" }}>
        <Button onClick={e => taskSubmit(e)} variant="primary float-right" type="submit">Update</Button>    
        </td>
        }
        </tr> 
        </>
    )
    
}

export default ProjectTask