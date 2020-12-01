import React, { useState } from 'react';
import { Card, ListGroupItem, Table, Form, Row, Col, Button, Dropdown, FormControl, Popover, OverlayTrigger } from 'react-bootstrap';
import 'moment-timezone';
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'
import Archive from '../assets/archive3.png'
import Download from '../assets/download.png'
import Team from '../assets/team.png'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'

const ProjectTask = ({task, deleteTask, updateTask, totalTeamMembers, projectId, createTeamMemberProjectTask, deleteTeamMemberProjectTask}) => {
    const [formShow, setFormShow] = useState(false)
    const [editDeadline, setEditDeadline] = useState(task.deadline)
    const [description, setDescription] = useState(task.description)
    const [archived, setArchived] = useState(task.archived)
    const [teamShow, setTeamShow] = useState(false)
    const [clickedNames, setClickedNames] = useState(task.team_members.map(t => t.id))
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
            archived: archived
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

    const findSource = () => {
        let source
        if (!archived) {
            source = Archive
        } else {
            source = Download
        }
        return source
    }

    const toggleProjectTaskArchive = (e) => {
        const taskData = {
            deadline: task.deadline,
            description: task.description,
            archived: !task.archived,
            id: taskId
        }
        updateTask(taskId, taskData)
        formReset() 
        setArchived(task.archived)
    }

    const findPortraitSource = (t) => {
        let source
        let img = t.image
        if (img === '1') {
            source = Avatar1
        } else if (img === '2') {
            source = Avatar2
        } else if (img === '3') {
            source = Avatar3
        } else if (img === '4') {
            source = Avatar4
        } else if (img === '5') {
            source = Avatar5
        } else if (img === '6') {
            source = Avatar6
        }
        return source
    }

    const submitTeam = (e) => {
        e.preventDefault()
        let newTeam = clickedNames
        let oldTeam = []
        task.team_members.map(t => oldTeam = [...oldTeam, t.id])
        createTeamMemberProjectTask(newTeam, oldTeam, taskId, projectId)
        setTeamShow(false)
        setClickedNames(newTeam)
        // alert('Team member assignments have been adjusted.')
    }

    const handleTeamMemberClick = (e) => {
        let id = e.target.value
        let t = totalTeamMembers.find(t => t.id == id)
        clickedNames.includes(t.id) ? setClickedNames(clickedNames.filter(tid => tid != t.id)) : setClickedNames([...clickedNames, t.id])
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
        {archived ?    
        <td style={{width: "15%"}} onClick={() => resetEditForm()} className="align-middle"><strong>{task.name}</strong></td>  
        : 
        null
        }
        {!formShow ? 
        <td onClick={() => resetEditForm()} className="align-middle">{task.description}</td>
        :
        <td style={{width: "95%"}} className="align-middle" id="description-column">
        <Form.Control as="textarea" rows={2} value={description} onChange={e => setDescription(e.target.value)}/> 
        </td>
        }

        {!formShow && !archived ? 
        <td className="align-middle" style={{ width: '5px', textAlign: 'right' }} >
            {/* <img width="32" onClick={(e) => toggleProjectTaskArchive(e)} height="32" alt="archive" id="team-emblem" src={Team}/>      */}
            
            {['left'].map((placement) => (
                    <OverlayTrigger
                    onHide={e => setTeamShow(false)}
                    rootClose
                    show={teamShow}
                    key={placement}
                    placement={placement}
                    overlay={
                        <Popover id={`popover-positioned-${placement}`}>
                        <Popover.Title as="h3">Assign Task</Popover.Title>
                        <Popover.Content>
                        
                        <Form.Group controlId="formBasicCheckbox" className="team-member-checkbox">

                            {totalTeamMembers.map(t => {
                                return ( 
                                    <label><img width="41" height="41" alt="archive" id="team-emblem" src={findPortraitSource(t)}/><Form.Check
                                    value={t.id} checked={clickedNames.includes(t.id) ? true : false} onChange={(e) => handleTeamMemberClick(e)} type="checkbox"/></label>             
                                )
                            })}
                            
                            <br></br>
                            <img width="15" height="20" onClick={(e) => submitTeam(e)} className="float-left" alt="archive" src={Check}/>
                            <img width="19" onClick={() => setTeamShow(false)} height="24" className="float-right" alt="archive" src={X2}/>
                        </Form.Group>



                        </Popover.Content>
                        </Popover>}>
                        <img width="32" height="32" alt="archive" onClick={() => setTeamShow(!teamShow)} id="team-emblem" src={Team}/>
                    </OverlayTrigger>
                ))}      

        </td>
        :
        null
        }


      

        

        {!formShow ?
        <td className="align-middle" size="sm" style={{ width: '5px', textAlign: 'right' }} id="archive-toggle">
            {/* <img width="30" onClick={(e) => toggleProjectTaskArchive(e)} height="30" alt="archive" src={Team}/> */}
            <img width="25" onClick={(e) => toggleProjectTaskArchive(e)} height="25" alt="archive" src={findSource()}/>
        </td>
        :
        <td className="align-middle"size="sm" style={{ textAlign:"right" }} id="confirm-change" >
         <img width="13" onClick={e => taskSubmit(e)} height="18" alt="archive" src={Check}/>
         <br/><br/>
         <img width="15" onClick={() => formReset()} height="20" alt="archive" src={X2}/>
        </td>
        }


        
        {archived && !formShow ?    
            <td className="align-middle" id="archive-x" size="sm" style={{ textAlign:"right" }}><img onClick={() => deleteProjectTask()} width="15" height="20" alt="archive" src={X}/></td>
        :
            null
        }
        </tr> 
        </>
    )
}

export default ProjectTask