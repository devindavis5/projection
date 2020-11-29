import React, { useState } from 'react';
import { ListGroupItem, Form} from 'react-bootstrap';
import Archive from '../assets/archive1.png'
import Download from '../assets/download.png'
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const DailyTasks = ({task, updateDailyTask}) => {
    const [formShow, setFormShow] = useState(false)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    const [archived, setArchived] = useState(task.status === 'incomplete' ? false : true)

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

    const findSource = () => {
        let source
        if (!archived) {
            source = Archive
        } else {
            source = Download
        }
        return source
    }

    const toggleDailyTaskArchive = (e) => {
        // e.preventDefault()
        // setArchived(!)
        // const taskData = {
        //     description: description,
        //     status: status,
        //     id: taskId
        // }
        // updateDailyTask(taskData)
        // formReset()  
    }
    
    return (
        
        <>
        <tr >
        {!formShow ? 

            <td className="align-middle" id="daily-task-rows" onClick={() => resetEditForm()}>{task.description}</td>
        :
            <td style={{width: "90%"}} class="align-middle">
                <Form.Control as="textarea" rows={1} value={description} onChange={e => setDescription(e.target.value)}/> 
            </td>
        }
        {!formShow ?
            
            <td className="align-middle" id="daily-task-rows" size="sm" style={{ textAlign:"right" }}><img onClick={() => toggleDailyTaskArchive()} width="25" height="25" alt="archive" src={findSource()}/></td>
            
        :
            <td className="align-middle"size="sm" style={{ textAlign:"right" }}>
                <img width="13" onClick={e => taskSubmit(e)} height="18" alt="archive" src={Check}/>
                <br/>
                
                <img width="15" onClick={() => formReset()} height="20" alt="archive" src={X2}/>
            </td>
        }

        {archived ? 
            
            <td className="align-middle" id="archive-x" size="sm" style={{ textAlign:"right" }}><img width="15" height="20" alt="archive" src={X}/></td>
        :
            null
        }
        
        </tr>
        </>
    )   
}

export default DailyTasks