import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
// import Footer from '../components/Footer.js'
import Logo from '../assets/logo.png'

class HomePage extends Component {

    logInClick = (e) => {
        e.preventDefault()
        const { history } = this.props
        history.push('/login')
    }
    
    signUpClick = (e) => {
        e.preventDefault()
        const { history } = this.props
        history.push('/signup')
    }

    componentDidMount() {
        if (localStorage.token) {
        const { history } = this.props
        history.push('/projects')
        }
    }

    render() {
        return (
        <div className="background" >
            <div className="title">
            <img className="align-center" id='home-logo' src={Logo}/>
            </div>
            <div className="login-button">
            <Button onClick={this.logInClick} variant="outline-secondary" size="lg" >Log in</Button>
            <div className="divider"/>
            <Button onClick={this.signUpClick} variant="outline-secondary" size="lg" >Sign Up</Button>  
            </div>
        </div>
        )
    }

}

export default HomePage