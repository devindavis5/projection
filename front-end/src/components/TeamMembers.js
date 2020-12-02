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
        <div className="avatars">
            {['top'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                    <strong>{teamMember.name}</strong>
                    </Tooltip>
                }
                >
                <img onClick={() => teamMemberClick()} width="85" height="85" className="d-inline-block align-center button" id="team-member-pic" alt="back" src={findSource()}/> 
                </OverlayTrigger>
            ))}
        </div>
    )
    
}

export default TeamMembers