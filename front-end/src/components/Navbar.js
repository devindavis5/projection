import React, { Component, useState } from 'react';
import { Navbar, ListGroupItem, Nav, Button, Form, FormControl, Modal, Table, Row, Col } from 'react-bootstrap';
import Logo from '../assets/biologo2.png'
import Profile from './Profile'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import Avatar5 from '../assets/avatar5.png'
import Avatar6 from '../assets/avatar6.png'

const NavBar = ({name, email, image, count}) => {
    const [profile, setProfile] = useState(false)

    const logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    const toggleProfile = () => {
        setProfile(!profile)
    }

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
                <Table responsive className="table-hover" style={{textAlign: 'center'}} id="project-task-table">
                <tbody>
                    <img width="300" height="300" alt="archive" src={Avatar1}/>   
                <tr className="user-name"><strong>{name}</strong></tr>  
                <tr className="user-email">{email}</tr>
                <tr className="user-email">Active Projects: {count}</tr>
                </tbody>
                </Table>
            </Modal.Body>
        </Modal>   



        </div>
    )
    
}

export default NavBar