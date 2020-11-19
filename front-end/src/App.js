import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import ProjectPage from './pages/ProjectPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

class App extends Component  {

  constructor() {
    super()
    this.state = {
      user: {},
      projects: []
    }
  }

  setUser = (user) => {
    this.setState({user})

    fetch("http://localhost:3000/projects", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(projects => this.setState({projects}))
  }

  render() {
    const projects = this.state.projects.filter(p => p.user_id === this.state.user.id ? p : null)
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path='/signup' render={routeProps => <SignUp {...routeProps}/>}/>
              <Route exact path='/login' render={routeProps => <LogIn {...routeProps} setUser={this.setUser}/>}/>
              <Route exact path='/projects' render={routeProps => <LandingPage {...routeProps} projects={projects} user={this.state.user}/>}/>
              <Route exact path='/projects/:id' render={routeProps => <ProjectPage {...routeProps} user={this.state.user}/>}/>
              <Route path='/' render={routeProps => <HomePage {...routeProps}/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;

