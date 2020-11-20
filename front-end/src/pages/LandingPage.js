import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard.js'
import Navbar from '../components/Navbar.js'
import DailyTasks from '../components/DailyTasks.js'
import TeamMembers from '../components/TeamMembers.js'
import Button from 'react-bootstrap/Button'

class LandingPage extends Component {
    state = {
        projects: [],
        dailyTasks: []
    }

   logout = () => {
    localStorage.clear()
    this.props.history.push('/')
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
            <div>
                <Navbar />
                <h1>LandingPage</h1>
                {this.state.projects.map(project => {
                        return (
                        <ProjectCard project={project} key={project.id}/>) 
                    })}
                <DailyTasks />
                <TeamMembers />
                <Button onClick={this.logout} variant="primary" >Logout</Button>
            </div>
        )
    }
}

export default LandingPage