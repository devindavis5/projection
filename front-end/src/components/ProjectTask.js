import React, { useState } from 'react';
import { Card, ListGroupItem, Table, Form, Row, Col, Button, Dropdown, FormControl } from 'react-bootstrap';
import 'moment-timezone';
import X from '../assets/x.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'
import Archive from '../assets/archive3.png'
import Download from '../assets/download.png'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'

const ProjectTask = ({task, deleteTask, updateTask}) => {
    const [formShow, setFormShow] = useState(false)
    const [editDeadline, setEditDeadline] = useState(task.deadline)
    const [description, setDescription] = useState(task.description)
    const [archived, setArchived] = useState(task.archived)
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

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));
      
      // forwardRef again here!
      // Dropdown needs access to the DOM of the Menu to measure it
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );

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
        <td style={{width: "85%"}} className="align-middle" id="description-column">
        <Form.Control as="textarea" rows={2} value={description} onChange={e => setDescription(e.target.value)}/> 
        </td>
        }

        {!formShow ? 
        <td className="align-middle">
             <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" menuAlign='left'>
                <img width="25" onClick={(e) => toggleProjectTaskArchive(e)} height="25" alt="archive" src={findSource()}/>
                </Dropdown.Toggle>
                    
                <Dropdown.Menu as={CustomMenu}>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </td>
        :
        null
        }
 
        {/* 
        {task.team_members.map(t => {
            return (        
                <td className="align-middle"size="sm" ><img width="35" onClick={(e) => toggleProjectTaskArchive(e)} height="35" alt="archive" src={findPortraitSource(t)}/></td>            
            )
        })} */}


        {!formShow ?
        <td className="align-middle" size="sm" style={{ textAlign:"right" }} id="archive-toggle"><img width="25" onClick={(e) => toggleProjectTaskArchive(e)} height="25" alt="archive" src={findSource()}/></td>
        :
        <td className="align-middle"size="sm" style={{ textAlign:"right" }}>
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