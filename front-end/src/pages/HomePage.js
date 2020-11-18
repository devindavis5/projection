import React from 'react';
import { Button } from 'react-bootstrap'
// import Footer from '../components/Footer.js'

const HomePage = () => {

    const signInClick = (e) => {
        e.preventDefault()
        const { history } = this.props
        history.push('/login')
    }
    
    const signUpClick = (e) => {
        e.preventDefault()
        const { history } = this.props
        history.push('/signup')
    }


    return (
        <div className="homepage" >
            <div className="title">
            <h1>Projection</h1>
            </div>
            <div className="login-button">
            <Button onClick={signInClick} variant="primary" >Sign In</Button>
            <div className="divider"/>
            <Button onClick={signUpClick} variant="primary" >Sign Up</Button>  
            </div>
        </div>
    )

}

export default HomePage