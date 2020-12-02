import React, { useState } from 'react';
import { Navbar, Nav, Modal, Table, } from 'react-bootstrap';

import Profile from './Profile'
import Avatar8 from '../assets/avatar8.png'


const NavBar = ({name, email, count, updateUser, id}) => {
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" >
                    <Nav.Link className="button1" onClick={() => toggleProfile()} >My Account</Nav.Link>
                    <Nav.Link className="button1" onClick={() => logout()} >Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            
        <Modal
            show={profile}
            onHide={() => toggleProfile()}
            size="lg"
            >
            <Modal.Body>
                <Table responsive borderless style={{textAlign: 'center'}} >
                <tbody className="table-hover">
                    <img width="300" height="300" alt="archive" src={Avatar8}/>   
                <tr id="user-name"><strong>{name}</strong></tr>
                <Profile name={name} email={email} count={count} updateUser={updateUser} id={id} />
                <tr className="user-email">Active Projects: {count}</tr>
                </tbody>
                </Table>
            </Modal.Body>
        </Modal>
        </div>
    )
    
}

export default NavBar