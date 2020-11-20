import React, { Component } from 'react';
import { Navbar, ListGroupItem, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Logo from '../assets/biologo2.png'
import Profile from './Profile'

class NavBar extends Component {
    
    state = {
        profile: false
    }

    profile = () => {
        this.setState({profile: !this.state.profile})
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    render() {
        return (
            <div>
            <Navbar className="nav-bar2" collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" >
                <Navbar.Brand href="/home"><img width="23" height="23" className="d-inline-block align-center" id="logo" alt="back" src={Logo}/>Projection</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" >
                        <Nav.Link onClick={this.profile} >My Account</Nav.Link>
                        <Nav.Link onClick={this.logout} >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                {this.state.profile ? <Profile user={this.props.user} profile={this.profile} /> : null}
            </div>
        )
    }
}

export default NavBar