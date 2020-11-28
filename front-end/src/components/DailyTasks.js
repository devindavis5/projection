import React, { useState } from 'react';
import { ListGroupItem, Form} from 'react-bootstrap';
import Archive from '../assets/archive.png'
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const DailyTasks = ({task, updateDailyTask}) => {
    const [formShow, setFormShow] = useState(false)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    const taskId = task.id

    const deleteProjectTask = () => {
        // deleteTask(task)
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            description: description,
            status: status,
            id: taskId
        }
        updateDailyTask(taskData)
        formReset()  
    }

    const formReset = () => {
        setFormShow(false)
        setDescription(task.description)
        setStatus(task.status)
    }

    const resetEditForm = () => {
        setDescription(task.description)
        setStatus(task.status)
        setFormShow(!formShow)
    }
    
    return (
        
        <>
        <tr >
        {!formShow ? 
            <td className="align-middle" onClick={() => resetEditForm()}>{task.description}</td>
        :
            <td style={{width: "85%"}} class="align-middle">
                <Form.Control as="textarea" rows={1} value={description} onChange={e => setDescription(e.target.value)}/> 
            </td>
        }
        {!formShow ?
            <td className="align-middle"size="sm" style={{ textAlign:"right" }}><img width="25" height="25" alt="archive" src={Archive}/></td>
        :
            <td className="align-middle"size="sm" style={{ textAlign:"right" }}>
                <img width="13" onClick={e => taskSubmit(e)} height="18" alt="archive" src={Check}/>
                <br/>
                <img width="15" onClick={() => formReset()} height="20" alt="archive" src={X2}/>
            </td>
        }
        </tr>
        </>
    )   
}

export default DailyTasks