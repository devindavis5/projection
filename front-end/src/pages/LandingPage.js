import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard.js'
import NavBar from '../components/NavBar.js'
import DailyTasks from '../components/DailyTasks.js'
import TeamMembers from '../components/TeamMembers.js'
import { Button, Container, Row, Col, ListGroup, ListGroupItem, CardColumns, Card, CardDeck, Table, Modal, Form } from 'react-bootstrap'
import Archive from '../assets/archive.png'
import Plus from '../assets/plus.png'
import X from '../assets/x.png'
import Check from '../assets/check.png'

class LandingPage extends Component {
    state = {
        projects: [],
        dailyTasks: [],
        teamMembers: [],
        formShow: false,
        newProjectName: '',
        userId: ''   
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
                    this.setState({userId: user.id})
                }
            })    
        }  
    }

    createTask = (task) => {
        fetch('http://localhost:3000/project_tasks' , {
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify(task)
        })
        .then(res => res.json())
        .then(project => this.setState({projects: this.state.projects.map(p => p.id === project.id ? project : p)}))
    }

    deleteTask = (task) => {
        fetch(`http://localhost:3000/project_tasks/${task.id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(project => this.setState({projects: this.state.projects.map(p => p.id === project[0].id ? project[0] : p)}))
    }

    updateTask = (id, task) => {
        fetch(`http://localhost:3000/project_tasks/${id}` , {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify({
              deadline: task.deadline,
              description: task.description,
              status: task.status
          })
        })
        .then(res => res.json())
        .then(project => this.setState({projects: this.state.projects.map(p => p.id === project[0].id ? project[0] : p)}))
    }

    formClick = () => {
        this.setState({formShow: !this.state.formShow})
    }

    onProjectNameChange = (e) => {
        this.setState({newProjectName: e.target.value})
    }

    addProject = () => {
        fetch('http://localhost:3000/projects' , {
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify({
              name: this.state.newProjectName,
              user_id: this.state.userId
          })
        })
        .then(res => res.json())
        .then(project => {
            this.setState({projects: [...this.state.projects, project]})
            this.setState({formShow: false})
        })
    }

    render() {
        return (
            <div className='projects-page'>
                <NavBar /> 
                <div className='projects-div'>
                    <CardDeck id="card-deck">
                        {this.state.projects.map(project => {
                            return (
                            <ProjectCard createTask={this.createTask} deleteTask={this.deleteTask} updateTask={this.updateTask} project={project} key={project.id}/>)
                        })}
                        <div>
                            {!this.state.formShow ? 
                            <Card onClick={this.formClick} id="add-project-card">
                                <Card.Body>
                                <img id="add-project-icon" src={Plus}/>
                                </Card.Body>
                            </Card>
                            :
                            <Card id="add-project-card">
                                <Card.Title><img width="15" onClick={this.formClick} height="20" alt="archive" id="new-project-x" src={X}/></Card.Title>
                                <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicUsername">
                                        {/* <Form.Label>Project Name</Form.Label> */}
                                        <Form.Control type="text" name="name" placeholder="Project Name" onChange={this.onProjectNameChange} />
                                    </Form.Group>
                                    {/* <Button to="/maincontainer" onClick={onProjectSubmit} variant="primary" type="submit">Sign in</Button> */}
                                     <img width="25" height="25" alt="checkmark" id="new-project-check" onClick={this.addProject} src={Check}/>
                                </Form>
                                </Card.Body>
                            </Card>      
                            }



                        </div>
                    </CardDeck>
                </div>
                <div className='daily-tasks-div'>
                    <Card >
                        <Card.Header className='text-center'>Today's Tasks</Card.Header>
                        <Table>
                        {this.state.dailyTasks.map(t => {
                            return (
                            <DailyTasks task={t} key={t.id}/>) 
                        })}
                        </Table>
                    </Card>
                   <div className="archive-div">
                   <img alt="archive" id="archive" src={Archive}/>  
                </div>    
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