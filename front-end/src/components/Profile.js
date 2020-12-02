import React, { Component, useState } from 'react';
import { Navbar, ListGroupItem, Nav, Button, Form, FormControl, Modal, Table, Row, Col } from 'react-bootstrap';
import Logo from '../assets/biologo2.png'
import Avatar8 from '../assets/avatar8.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'


const Profile = ({name, email, count, updateUser, id}) => {
    const [emailShow, setEmailShow] = useState(false)
    const [userEmail, setUserEmail] = useState(email)

    const toggleEmail = () => {
        setEmailShow(!emailShow)
        setUserEmail(email)
    }

    const submitEmail = (e) => {
        e.preventDefault()
        updateUser(userEmail)
        toggleEmail()
    }

    return (
        <>
            {!emailShow ?    
            <tr onClick={() => toggleEmail()} className="user-email">{email}</tr>
            : 
            <tr style={{width: "50%", textAlign: "center"}} id="email-input" className="align-middle">
            <Form.Control style={{width: "60%", textAlign: "center"}} id="email-input" className="align-middle" onChange={e => setUserEmail(e.target.value)} value={userEmail} />
            </tr>
            }
            {emailShow ?
            <tr id="email-check">
                <img width="15" height="20" onClick={(e) => submitEmail(e)} className="float-left align-middle"  alt="archive" src={Check}/>
                <div className="divider2"/>
                <img width="19" onClick={() => setEmailShow(false)} height="24" className="float-right align-middle"  alt="archive" src={X2}/>   
            </tr>
            :
            null
            }
        </>
    )
    
}

export default Profile