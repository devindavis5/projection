import React, { useState } from 'react';
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'
import { Card, ListGroup, ListGroupItem, Col, Figure, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

const TeamMembers = ({teamMember, teamMemberClick}) => {

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
    
    return (
        <>
            <tbody>
            <tr>
                <th id="team-member-pic-row"><img width="85" height="85" className="d-inline-block align-center" id="team-member-pic" alt="back" src={findSource()}/>{teamMember.name}</th>
                </tr>
                    {teamMember.project_tasks.map(t => {
                        return (
                            <tr>
                                <td className="align-middle"><strong>{t.deadline}</strong></td>
                                <td style={{width: "10%"}} className="align-middle">{t.name}</td>
                                <td className="align-middle">{t.description}</td>
                            </tr>
                        )
                    })}
            </tbody>
        </>
    )
    
}

export default TeamMembers