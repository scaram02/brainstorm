import React from 'react'
import {Route} from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import './App.css';

const App = props => {

const [user, setUser] = props.user

const setCurrentUser = user => {
  setUser(user)
}

  return (
    <div className="App">
    <Route exact path='/' component={Home}/>
    <Route exact path="/signup"
    render={props => <Signup {...props} setCurrentUser={setCurrentUser} />} />
    </div>
  );
}

export default App;
