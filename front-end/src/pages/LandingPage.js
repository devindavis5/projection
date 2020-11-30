import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard.js'
import NavBar from '../components/NavBar.js'
import DailyTasks from '../components/DailyTasks.js'
import ProjectTask from '../components/ProjectTask.js'
import TeamMembers from '../components/TeamMembers.js'
import { Button, Container, Row, Col, ListGroup, ListGroupItem, CardColumns, Card, CardDeck, Table, Modal, Form } from 'react-bootstrap'
import Archive1 from '../assets/archive1.png'
import Archive2 from '../assets/archive2.png'
import Archive3 from '../assets/archive3.png'
import Archive4 from '../assets/archive4.png'
import Plus from '../assets/plus.png'
import X from '../assets/x.png'
import Check from '../assets/check.png'
import New from '../assets/new1.png'

class LandingPage extends Component {
    state = {
        projects: [],
        dailyTasks: [],
        teamMembers: [],
        formShow: false,
        newProjectName: '',
        userId: '',
        newDailyShow: false,
        newTaskDescription: '',
        dailyTaskArchiveShow: false,
        projectArchiveShow: false,
        projectTaskArchiveShow: false,
        projectTasks: []      
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
                    let tasks = user.projects.map(p => p.project_tasks).flat()
                    this.setState({projectTasks: tasks})
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
        .then(project =>  {
            if (!project.error) {
                this.setState({projects: this.state.projects.map(p => p.id === project.id ? project : p)})
            } else {
                alert("Tasks must have a deadline and description.")
            }
        })
    }

    createContact = (contact) => {
        fetch('http://localhost:3000/contacts' , {
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(project =>  {
            if (!project.error) {
                this.setState({projects: this.state.projects.map(p => p.id === project.id ? project : p)})
            } else {
                alert("Contact must have a name.")
            }
        })
    }

    createDailyTask = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/daily_tasks' , {
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify({
              description: this.state.newTaskDescription,
              user_id: this.state.userId
          })
        })
        .then(res => res.json())
        .then(task => {
            if (!task.error) {
                this.setState({dailyTasks: [...this.state.dailyTasks, task]})
                this.setState({newDailyShow: false})
                this.setState({newTaskDescription: ''})
            } else {
                alert("Task must have a description.")
            }
        })
    }

    deleteTask = (task) => {
        fetch(`http://localhost:3000/project_tasks/${task.id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(project => this.setState({projects: this.state.projects.map(p => p.id === project[0].id ? project[0] : p)}))
    }
    
    deleteContact = (contact) => {
        fetch(`http://localhost:3000/contacts/${contact.id}`, {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(project => this.setState({projects: this.state.projects.map(p => p.id === project[0].id ? project[0] : p)}))
    }

    deleteDailyTask = (task) => {
        fetch(`http://localhost:3000/daily_tasks/${task.id}`, {
          method: 'DELETE',
        })
        .then(this.setState({dailyTasks: this.state.dailyTasks.filter(dt => dt.id != task.id)}))
    }

    deleteProject = (project) => {
        fetch(`http://localhost:3000/projects/${project.id}`, {
          method: 'DELETE',
        })
        .then(this.setState({projects: this.state.projects.filter(p => p.id != project.id)}))
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
              archived: task.archived
          })
        })
        .then(res => res.json())
        .then(project => {
            if (!project.error) {
                this.setState({projects: this.state.projects.map(p => p.id === project[0].id ? project[0] : p)})
            } else {
                alert("Tasks must have a deadline and description.")
            }
        })
    }

    updateContact = (id, contact) => {
        fetch(`http://localhost:3000/contacts/${id}` , {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify({
              name: contact.name,
              email: contact.email,
              phone: contact.phone,
              notes: contact.notes
          })
        })
        .then(res => res.json())
        .then(project => {
            if (!project.error) {
                this.setState({projects: this.state.projects.map(p => p.id === project[0].id ? project[0] : p)})
            } else {
                alert("Contacts must have a name.")
            }
        })
    }

    updateProject = (project) => {
        fetch(`http://localhost:3000/projects/${project.id}` , {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify({
              name: project.name,
              notes: project.notes,
              archived: project.archived
          })
        })
        .then(res => res.json())
        .then(newProject => {
            if (!newProject.error) {
                this.setState({projects: this.state.projects.map(p => p.id === newProject.id ? newProject : p)})
            } else {
                alert("That project name has already been used.")
            }
        })
    }

    updateDailyTask = (task) => {
        fetch(`http://localhost:3000/daily_tasks/${task.id}` , {
          method: 'PATCH',
          headers: {
            'Content-Type':'application/json',
            'Accepts':'application/json'
          },
          body: JSON.stringify({
              description: task.description,
              archived: task.archived
          })
        })
        .then(res => res.json())
        .then(newTask => {
            if (!newTask.error) {
                this.setState({dailyTasks: this.state.dailyTasks.map(t => t.id === newTask.id ? newTask : t)})
            } else {
                alert("Task must have a description.")
            }
        })
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
              user_id: this.state.userId,
              archived: false
          })
        })
        .then(res => res.json())
        .then(project => {
            if (!project.error) {
                this.setState({projects: [...this.state.projects, project]})
                this.setState({formShow: false})
            } else {
                alert("Please enter a project name.")
            }
        })
    }

    handleTaskDescriptionChange = (e) => {
        this.setState({newTaskDescription: e.target.value})
    }

    createDailyTaskFormToggle = () => {
        this.setState({newDailyShow: !this.state.newDailyShow})
        this.setState({newTaskDescription: ''})
    }

    toggleDailyTaskArchive = () => {
        this.setState({dailyTaskArchiveShow: !this.state.dailyTaskArchiveShow})
    }

    toggleProjectArchive = () => {
        this.setState({projectArchiveShow: !this.state.projectArchiveShow})
    }

    toggleProjectTaskArchive = () => {
        this.setState({projectTaskArchiveShow: !this.state.projectTaskArchiveShow})
    }

    render() {
        const incompleteDailies = this.state.dailyTasks.filter(dt => dt.archived === false)
        const completeDailies = this.state.dailyTasks.filter(dt => dt.archived === true)
        const incompleteProjects = this.state.projects.filter(p => p.archived === false)
        const completeProjects = this.state.projects.filter(p => p.archived === true)
        const completeProjectTasks = this.state.projects.map(p => p.project_tasks.filter(task => task.archived === true)).flat()
        return (
            <div className='projects-page'>
                <NavBar /> 
                <div className='projects-div'>
                    <CardDeck id="card-deck">
                        {incompleteProjects.map(project => {
                            return (
                            <ProjectCard createTask={this.createTask} deleteTask={this.deleteTask} updateTask={this.updateTask}
                            deleteContact={this.deleteContact} createContact={this.createContact} updateContact={this.updateContact}
                            project={project} key={project.id} updateProject={this.updateProject} deleteProject={this.deleteProject} />)
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
                    <Card id="daily-tasks-card" >
                        {/* <Card.Header id="daily-task-header" > */}
                        <Card.Title id="daily-task-title" className='text-center'>Today's Tasks
                        <img width="25" height="25" id="create-daily" alt="back" onClick={this.createDailyTaskFormToggle} src={New}/>
                        </Card.Title>
                        {/* </Card.Header> */}
                        {/* <Card.Body> */}
                        <Table responsive className="table-hover" id="daily-task-table">
                            {/* borderless */}
                            <tbody>
                                {this.state.newDailyShow ?
                                    <tr id="new-daily-task-form">
                                        <td >
                                        <Form.Control id="daily-task-description" onChange={this.handleTaskDescriptionChange} value={this.state.newTaskDescription} placeholder="Task..." />     
                                        </td>
                                        <td>
                                        <Button id="daily-task-submit" onClick={e => this.createDailyTask(e)} variant="primary float-right" type="submit">
                                        Create
                                        </Button>       
                                        </td>
                                    </tr>
                                :
                                    null
                                }
                        {incompleteDailies.map(t => {
                            return (
                            <DailyTasks task={t} key={t.id} updateDailyTask={this.updateDailyTask} deleteDailyTask={this.deleteDailyTask}/>
                            ) 
                        })}
                            </tbody>
                        </Table>
                        {/* </Card.Body> */}
                    </Card>
                    <div className="daily-task-archive-div">
                        <img onClick={this.toggleDailyTaskArchive} alt="archive" id="daily-task-archive" src={Archive1}/>
                <Modal
                    show={this.state.dailyTaskArchiveShow}
                    onHide={this.toggleDailyTaskArchive}
                    dialogClassName="modal-90w"
                    size="xl"
                    >
                    <Modal.Header closeButton>
                        <h1>Archived Daily Tasks</h1>
                    </Modal.Header>
                    <Modal.Body>
                    <Table responsive className="table-hover">
                        <tbody>
                        {completeDailies.map(t => {
                            return (
                                <DailyTasks task={t} key={t.id} updateDailyTask={this.updateDailyTask} deleteDailyTask={this.deleteDailyTask}/>
                            )  
                        })}
                        </tbody>
                    </Table>
                    </Modal.Body>
                </Modal>       

                        <img onClick={this.toggleProjectArchive} alt="archive" id="project-archive" src={Archive2}/>  

                <Modal
                    show={this.state.projectArchiveShow}
                    onHide={this.toggleProjectArchive}
                    dialogClassName="modal-90w"
                    size="xl"
                    >
                    <Modal.Header closeButton>
                        <h1>Archived Projects</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <CardDeck id="card-deck">
                            {completeProjects.map(project => {
                                return (
                                <ProjectCard createTask={this.createTask} deleteTask={this.deleteTask} updateTask={this.updateTask}
                                deleteContact={this.deleteContact} createContact={this.createContact} updateContact={this.updateContact}
                                project={project} key={project.id} updateProject={this.updateProject} deleteProject={this.deleteProject}/>)
                            })}
                        </CardDeck>
                    </Modal.Body>
                </Modal>      

                        <img onClick={this.toggleProjectTaskArchive} alt="archive" id="project-task-archive" src={Archive3}/>  

                <Modal
                    show={this.state.projectTaskArchiveShow}
                    onHide={this.toggleProjectTaskArchive}
                    dialogClassName="modal-90w"
                    size="xl"
                    >
                    <Modal.Header closeButton>
                        <h1>Archived Project Tasks</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <Table responsive className="table-hover">
                        <tbody>
                             {completeProjectTasks.map(task => {
            
                                // console.log(task)
                                //    let p = this.state.projects.find(p => p.id === task.project_id)
                                    return (
                                        <ProjectTask task={task} deleteTask={this.deleteTask}
                                        // projectName={p.name}
                                        // project={this.state.projects.find(p => p.id === task.project_id)}
                                        updateTask={this.updateTask}
                                        key={task.id}/>
                                    )  
                            })}
                        </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>   

                        <img alt="archive" id="contact-archive" src={Archive4}/>  
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