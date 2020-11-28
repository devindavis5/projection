import React, { useState } from 'react';
import { ListGroupItem} from 'react-bootstrap';
import Archive from '../assets/archive.png'
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const DailyTasks = ({task}) => {
    const [formShow, setFormShow] = useState(false)
    const [editDeadline, setEditDeadline] = useState(task.deadline)
    const [description, setDescription] = useState(task.description)
    const taskId = task.id

    const deleteProjectTask = () => {
        // deleteTask(task)
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            deadline: editDeadline,
            description: description,
            status: 'incomplete'
        }
        // updateTask(taskId, taskData)
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
        <td className="align-middle">{task.description}</td>
        <td className="align-middle"size="sm" style={{ textAlign:"right" }}><img width="25" height="25" alt="archive" src={Archive}/></td>
        </tr>
        </>
    )   
}

export default DailyTasks