import React, { useState } from 'react';
import { Card, ListGroupItem, Table, Form, Row, Col, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';
import X from '../assets/x.png'

const ProjectTask = ({task, deleteTask, projectId, updateTask}) => {
    const [formShow, setFormShow] = useState(false)
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
    }

    return (
        <>
        <tr >
        {!formShow ?    
        <td style={{width: "10%"}} onClick={() => setFormShow(true)} class="align-middle"><strong>{deadline}</strong></td>  
        : 
        <td style={{width: "6%"}} class="align-middle">
        <Form.Control type="date" onChange={e => setEditDeadline(e.target.value)} value={editDeadline} />
        </td>
        } 
        {!formShow ? 
        <td style={{width: "76%"}} onClick={() => setFormShow(true)} class="align-left">{task.description}</td>
        :
        <td style={{width: "80%"}} class="align-middle">
        <Form.Control value={description} onChange={e => setDescription(e.target.value)}/> 
        </td>
        }
        {!formShow ?
        <td class="align-middle"size="sm" style={{ textAlign:"right" }}><img width="15" onClick={() => deleteProjectTask()} height="20" alt="archive" src={X}/></td>
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