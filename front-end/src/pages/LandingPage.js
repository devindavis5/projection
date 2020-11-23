import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard.js'
import NavBar from '../components/NavBar.js'
import DailyTasks from '../components/DailyTasks.js'
import TeamMembers from '../components/TeamMembers.js'
import { Button, Container, Row, Col, ListGroup, ListGroupItem, CardColumns, Card, CardDeck } from 'react-bootstrap'

class LandingPage extends Component {
    state = {
        projects: [],
        dailyTasks: [],
        teamMembers: [],
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
                    this.setState({dailyTasks: user.daily_tasks})
                    this.setState({teamMembers: user.team_members})
                }
            })    
        }
      
    }

    onProjectClick = () => {

    }

    render() {
        return (
            <div className='projects-page'>
                <NavBar /> 
                <div className='projects-div'>
                    {/* <Container > */}
                    <CardDeck>
                        {this.state.projects.map(project => {
                        return (
                        <ProjectCard project={project} key={project.id}/>)
                        })}
                        {/* {this.state.projects.length > 0 ? 
                        <ProjectCard project={this.state.projects[0]} key={this.state.projects[0].id} />
                        :
                        null
                        } */}
                    </CardDeck>
                    {/* </Container> */}
                </div>
                <div className='daily-tasks-div'>
                    <Card >
                        <Card.Header className='text-center'>Today's Tasks</Card.Header>
                        <ListGroup variant="flush">
                        {this.state.dailyTasks.map(t => {
                            return (
                            <DailyTasks task={t} key={t.id}/>) 
                        })}
                        </ListGroup>
                    </Card>
                </div>
                <div className='team-members-div'>
                    <Row>
                    {this.state.teamMembers.map(tm => {
                        return (
                        <TeamMembers teamMember={tm} key={tm.id}/>) 
                    })}
                    </Row>
                </div>    
            </div>
        )
    }
}

export default LandingPage