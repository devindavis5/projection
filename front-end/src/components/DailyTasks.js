import React, { useState } from 'react';
import { ListGroupItem, Form} from 'react-bootstrap';
import Archive from '../assets/archive1.png'
import Download from '../assets/download.png'
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const DailyTasks = ({task, updateDailyTask, deleteDailyTask}) => {
    const [formShow, setFormShow] = useState(false)
    const [description, setDescription] = useState(task.description)
    const [archived, setArchived] = useState(task.archived)

    const taskId = task.id

    const deleteTask = () => {
        deleteDailyTask(task)
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            description: description,
            archived: archived,
            id: taskId
        }
        updateDailyTask(taskData)
        formReset()  
    }

    const formReset = () => {
        setFormShow(false)
        setDescription(task.description)
        setArchived(task.archived)
    }

    const resetEditForm = () => {
        setDescription(task.description)
        setArchived(task.archived)
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
        e.preventDefault()
        const taskData = {
            description: description,
            archived: !archived,
            id: taskId
        }
        updateDailyTask(taskData)
        setArchived(task.archived)
    }
    
    return (
        
        <>
        <tr >
        {!formShow ? 

            <td className="align-middle" style={{width: "94%"}} id="daily-task-rows" onClick={() => resetEditForm()}>{task.description}</td>
        :
            <td style={{width: "90%"}} class="align-middle">
                <Form.Control as="textarea" rows={1} value={description} onChange={e => setDescription(e.target.value)}/> 
            </td>
        }
        {!formShow ?
            
            <td className="align-middle" id="daily-task-rows" size="sm" style={{ textAlign:"right" }}><img onClick={(e) => toggleDailyTaskArchive(e)} width="25" height="25" alt="archive" src={findSource()}/></td>
            
        :
            <td className="align-middle"size="sm" style={{ textAlign:"right" }}>
                <img width="13" onClick={e => taskSubmit(e)} height="18" alt="archive" src={Check}/>
                <br/>
                
                <img width="15" onClick={() => formReset()} height="20" alt="archive" src={X2}/>
            </td>
        }

        {archived ? 
            
            <td className="align-middle" id="archive-x" size="sm" style={{ textAlign:"right" }}><img onClick={() => deleteTask()} width="15" height="20" alt="archive" src={X}/></td>
        :
            null
        }

        </tr>
        </>
    )   
}

export default DailyTasks