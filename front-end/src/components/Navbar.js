import React, { Component, useState } from 'react';
import { Navbar, ListGroupItem, Nav, Button, Form, FormControl, Modal, Table, Row, Col } from 'react-bootstrap';
import Logo from '../assets/biologo2.png'
import Profile from './Profile'
import Avatar8 from '../assets/avatar8.png'
import X2 from '../assets/x2.png'
import Check from '../assets/check.png'

const NavBar = ({name, email, image, count, updateUser, id}) => {
    const [profile, setProfile] = useState(false)
    // const [emailShow, setEmailShow] = useState(false)
    // const [userEmail, setUserEmail] = useState(email)

    const logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    const toggleProfile = () => {
        setProfile(!profile)
    }

    // const toggleEmail = () => {
    //     setEmailShow(!emailShow)
    // }

    // const submitEmail = (e) => {
    //     e.preventDefault()
    //     console.log(userEmail)
    //     // updateUser(userEmail)
    // }
   
    return (
        <div>
        <Navbar className="nav-bar2" collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" >
            <Navbar.Brand href="/home">Projection</Navbar.Brand>
            {/* <img width="23" height="23" className="d-inline-block align-center" id="logo" alt="back" src={Logo}/> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav.Link onClick={() => toggleProfile()} >My Account</Nav.Link>
                    <Nav.Link onClick={() => logout()} >Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            

        <Modal
            show={profile}
            onHide={() => toggleProfile()}
            // dialogClassName="modal-90w"
            size="lg"
            >
            <Modal.Body>
                <Table responsive className="table-hover" borderless style={{textAlign: 'center'}} >
                <tbody className="table-hover">
                    <img width="300" height="300" alt="archive" src={Avatar8}/>   
                <tr id="user-name"><strong>{name}</strong></tr>
                <Profile name={name} email={email} count={count} updateUser={updateUser} id={id} />
                {/* {!emailShow ?    
                <tr onClick={() => toggleEmail()} className="user-email">{email}</tr>
                : 
                <tr style={{width: "70%", textAlign: "center"}} id="email-input" className="align-middle">
                <Form.Control style={{width: "50%", textAlign: "center"}} id="email-input" className="align-middle" onChange={e => setUserEmail(e.target.value)} value={userEmail} />
                </tr>
                }
                {emailShow ?
                <tr id="email-check">
                    <img width="15" height="20" onClick={(e) => submitEmail(e)} className="float-left" alt="archive" src={Check}/>
                    <img width="19" onClick={() => setEmailShow(false)} height="24" className="float-right" alt="archive" src={X2}/>   
                </tr>
                :
                null
                } */}
                <tr className="user-email">Active Projects: {count}</tr>
                </tbody>
                </Table>
            </Modal.Body>
        </Modal>
        </div>
    )
    
}

export default NavBar