import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
// import Footer from '../components/Footer.js'

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
        <div className="homepage" >
            <div className="title">
            <h1>Projection</h1>
            </div>
            <div className="login-button">
            <Button onClick={this.logInClick} variant="primary" >Log in</Button>
            <div className="divider"/>
            <Button onClick={this.signUpClick} variant="primary" >Sign Up</Button>  
            </div>
        </div>
        )
    }

}

export default HomePage