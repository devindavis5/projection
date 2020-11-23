import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import ProjectPage from './pages/ProjectPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

class App extends Component  {

  // constructor() {
  //   super()
  //   this.state = {
  //     projectId: 0
  //   }
  // }

  // setProject = (projectId) => {
  //   this.setState({projectId})
  //   history.push(`/projects/${projectId}`)
  // }

  // componentDidMount = () => {
  //   if (localStorage.token) {
  //     fetch("http://localhost:3000/user", {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${localStorage.token}`
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(user => {
  //       this.setState({projects: user.projects})
  //       this.setState({dailyTasks: user.dailyTasks})
  //       console.log('mounted!')
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path='/signup' render={routeProps => <SignUp {...routeProps}/>}/>
              <Route exact path='/login' render={routeProps => <LogIn {...routeProps}/>}/>
              <Route exact path='/projects' render={routeProps => <LandingPage {...routeProps}/>}/>
              <Route exact path='/projects/:id' render={routeProps => <ProjectPage {...routeProps} projectId={this.state.projectId} />}/>
              <Route path='/' render={routeProps => <HomePage {...routeProps}/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;

