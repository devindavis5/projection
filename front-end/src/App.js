import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import ProjectPage from './pages/ProjectPage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
// import { useSelector, useDispatch } from 'react-redux'
// import { increment } from './actions'

class App extends Component  {

  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path='/signup' render={routeProps => <SignUp {...routeProps}/>}/>
              <Route exact path='/login' render={routeProps => <LogIn {...routeProps}/>}/>
              <Route exact path='/projects' render={routeProps => <LandingPage {...routeProps}/>}/>
              <Route exact path='/projects/:id' render={routeProps => <ProjectPage {...routeProps}/>}/>
              <Route path='/' render={routeProps => <HomePage {...routeProps}/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;

