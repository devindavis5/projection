import React, { useState } from 'react';
import { Card, ListGroupItem, Table, Form, Row, Col, Button } from 'react-bootstrap';
import 'moment-timezone';
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const ProjectTask = ({task, deleteTask, updateTask}) => {
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
        deleteTask(task)
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            deadline: editDeadline,
            description: description,
            status: 'incomplete'
        }
        updateTask(taskId, taskData)
        formReset()  
    }

    const formReset = () => {
        setFormShow(false)
        setEditDeadline(task.deadline)
        setDescription(task.description) 
    }

    const resetEditForm = () => {
        setEditDeadline(task.deadline)
        setDescription(task.description)
        setFormShow(!formShow)
    }

    return (
        <>
        <tr >
        {!formShow ?    
        <td style={{width: "10%"}} onClick={() => resetEditForm()} class="align-middle"><strong>{deadline}</strong></td>  
        : 
        <td style={{width: "6%"}} class="align-middle">
        <Form.Control type="date" onChange={e => setEditDeadline(e.target.value)} value={editDeadline} />
        </td>
        } 
        {!formShow ? 
        <td style={{width: "90%"}} onClick={() => resetEditForm()} class="align-middle">{task.description}</td>
        :
        <td style={{width: "85%"}} class="align-middle">
        <Form.Control as="textarea" rows={2} value={description} onChange={e => setDescription(e.target.value)}/> 
        </td>
        }
        {!formShow ?
        <td className="align-middle"size="sm" style={{ textAlign:"right" }}><img width="15" onClick={() => deleteProjectTask()} height="20" alt="archive" src={X}/></td>
        :
        <td className="align-middle"size="sm" style={{ textAlign:"right" }}>
         <img width="13" onClick={e => taskSubmit(e)} height="18" alt="archive" src={Check}/>
         <br/><br/>
         <img width="15" onClick={() => formReset()} height="20" alt="archive" src={X2}/>
        </td>
        }
        </tr> 
        </>
    )
}

export default ProjectTask