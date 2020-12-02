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
    const [editDeadline, setEditDeadline] = useState(task.deadline)
    const [archived, setArchived] = useState(task.archived)
    let split = task.deadline.split('-')
    let mm = split[1]
    let dd = split[2]
    let yyyy = split[0]
    let deadline = mm + '/' + dd + '/' + yyyy

    const taskId = task.id

    const deleteTask = () => {
        deleteDailyTask(task)
    }

    const taskSubmit = (e) => {
        e.preventDefault()
        const taskData = {
            description: description,
            deadline: editDeadline,
            archived: archived,
            id: taskId
        }
        updateDailyTask(taskData)
        formReset()  
    }

    const formReset = () => {
        setFormShow(false)
        setEditDeadline(task.deadline)
        setDescription(task.description)
        setArchived(task.archived)
    }

    const resetEditForm = () => {
        setEditDeadline(task.deadline)
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
            deadline: editDeadline,
            description: task.description,
            archived: !task.archived,
            id: taskId
        }
        updateDailyTask(taskData)
        formReset()
    }
    
    return (
        
        <>
        <tr >
        {!formShow ?    
        <td style={{width: "10%"}} onClick={() => resetEditForm()} className="align-middle"><strong>{deadline}</strong></td>  
        : 
        <td style={{width: "6%"}} className="align-middle">
        <Form.Control type="date" onChange={e => setEditDeadline(e.target.value)} value={editDeadline} />
        </td>
        }

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

        {archived && !formShow ? 
            
            <td className="align-middle" id="archive-x" size="sm" style={{ textAlign:"right" }}><img onClick={() => deleteTask()} width="15" height="20" alt="archive" src={X}/></td>
        :
            null
        }

        </tr>
        </>
    )   
}

export default DailyTasks