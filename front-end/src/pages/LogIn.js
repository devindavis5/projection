import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class LogIn extends Component {

    constructor() {
        super()

        this.state = {
            name: "",
            password: ""
        }
    }
    
    onChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
              'Accepts':'application/json'
            },
            body: JSON.stringify({user: this.state})
        })
        .then(res => res.json())
        .then(res => {
            if (!res.message) {
                const token = res.jwt;
                localStorage.setItem('token', token);
                const { history } = this.props
                history.push('/')
            } else {
                alert("Please enter a valid name and password.")
            }
        })  
    }

    signUp = () => {
        const { history } = this.props
        history.push('/signup')
    }

    render() {
        return (
            <div className="background">
            <div className="login-form">
                <Card style={{ width: '25rem' }}>
                <Card.Header className="text-center">Sign In</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.onChange} />
                    </Form.Group>
                    <Button to="/maincontainer" onClick={this.onSubmit} variant="primary" type="submit">Sign in</Button>
                    <Button variant="primary float-right" onClick={this.signUp} type="submit">Sign up Instead</Button>
                </Form>
                </Card.Body>
                </Card>
            </div>
            </div>
        )
    }
}

export default LogIn