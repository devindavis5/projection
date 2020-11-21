import React from 'react';
import Avatar from '../assets/avatar1.png'
import { Card, ListGroup, ListGroupItem, Col } from 'react-bootstrap'

const TeamMembers = () => {
    
    return (
        <div className="avatars">
            <img width="85" height="85" className="d-inline-block align-center" id="logo" alt="back" src={Avatar}/>
        </div>
    )
    
}

export default TeamMembers