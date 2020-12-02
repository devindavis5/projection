import React, { useState } from 'react';
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'
import { Card, ListGroup, ListGroupItem, Col, Figure, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

const TeamMembers = ({teamMember, archivedProjects, teamMemberClick}) => {

    const findSource = () => {
        let source
        let img = teamMember.image
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

    const findTasks = () => {
        let tasks = teamMember.project_tasks.filter(t => t.archived === false)
        let ids = []
        archivedProjects.map(p => ids = [...ids, p.id])
        ids.map(id => {
            tasks = tasks.filter(t => t.project_id != id)
        })
        return tasks
    }

    
    return (
        <>
            <tbody>
            <tr>
                <th id="team-member-pic-row"><img width="85" height="85" className="d-inline-block align-middle" id="team-member-pic" alt="back" src={findSource()}/>{teamMember.name}</th>
                </tr>
                    {findTasks().map(t => {
                        return (
                            <tr>
                                <td style={{ width: '10%' }} className="align-middle"><strong>{t.deadline}</strong></td>
                                <td style={{ width: '10%', textAlign: 'left' }} className="align-middle">{t.name}</td>
                                <td className="align-middle"  style={{ textAlign: 'left' }}>{t.description}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </>
    )
    
}

export default TeamMembers