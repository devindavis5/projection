import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'

const LogIn = (props) => {
    const dispatch = useDispatch()
    const usernameInput = useSelector(state => state.usernameInput)
    const passwordInput = useSelector(state => state.passwordInput)
    const { history } = props

    const onUsernameChange = (e) => {
        dispatch({type: 'SET_USERNAME_INPUT', value: e.target.value})
    }

    const onPasswordChange = (e) => {
        dispatch({type: 'SET_PASSWORD_INPUT', value: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
              'Accepts':'application/json'
            },
            body: JSON.stringify({
                user:{name: usernameInput, password: passwordInput}
            })
        })
        .then(res => res.json())
        .then(async (res) => {
            if (!res.message) {
                const token = res.jwt;
                localStorage.setItem('token', token);
                await dispatch({type: 'SET_USER', user: res.user})
                history.push('/')
            } else {
                alert("Please enter a valid name and password.")
            }
        })  
    }

    const signUp = () => {
        const { history } = props
        history.push('/signup')
    }

    return (
        <div className="background">
        <div className="login-form">
            <Card style={{ width: '25rem' }}>
            <Card.Header className="text-center">Sign In</Card.Header>
            <Card.Body>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={onUsernameChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={onPasswordChange} />
                </Form.Group>
                <Button to="/maincontainer" onClick={onSubmit} variant="primary" type="submit">Sign in</Button>
                <Button variant="primary float-right" onClick={signUp} type="submit">Sign up Instead</Button>
            </Form>
            </Card.Body>
            </Card>
        </div>
        </div>
    )
    
}

export default LogIn