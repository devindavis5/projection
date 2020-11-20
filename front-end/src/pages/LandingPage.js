import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard.js'
import NavBar from '../components/NavBar.js'
import DailyTasks from '../components/DailyTasks.js'
import TeamMembers from '../components/TeamMembers.js'
import { Button, Container, Row, Col, ListGroup, ListGroupItem, CardColumns } from 'react-bootstrap'

class LandingPage extends Component {
    state = {
        projects: [],
        dailyTasks: []
    }

    componentDidMount() {
        if (!localStorage.token) {
            alert('Please login to view projects.')
            this.props.history.push('/login')  
        } else {
            fetch("http://localhost:3000/user", {
                method: 'GET',
                headers: {
                Authorization: `Bearer ${localStorage.token}`
                }
            })
            .then(res => res.json())
            .then(user => {
                if (user === null) {
                    alert('Please login to view projects.')  
                    this.props.history.push('/login')
                } else {
                    this.setState({projects: user.projects})
                    this.setState({dailyTasks: user.dailyTasks})
                }
            })    
        }
      
    }

    render() {
        return (
            <div className='projects-page'>
                <NavBar /> 
                <div className='projects-div'>
                    <CardColumns>
                        {this.state.projects.map(project => {
                        return (
                        <ProjectCard project={project} key={project.id}/>) 
                        })}
                    </CardColumns>
                </div>
                <div className='daily-tasks-div'>
                    <DailyTasks /> 
                </div>
                <div className='team-members-div'>
                    <TeamMembers />
                </div>    
            </div>
        )
    }
}

export default LandingPage