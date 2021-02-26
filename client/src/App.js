import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Feed from './components/Feed'
import './App.css';

const App = props => {


const [user, setUser] = useState(props.user)

const setCurrentUser = user => {
  setUser(user);
};

  return (
    <div className="App">
    <Switch>

    <Route exact path='/' component={Home}/>

    <Route exact path="/signup"
    render={props => <Signup {...props} 
    user={user}
    setCurrentUser={setCurrentUser} 
    />} />

    <Route exact path="/login" 
    render={props => <Login {...props} user={user} setCurrentUser={setCurrentUser} />} />


<>
{user?
           (
           <Route
              exact
              path="/feed"
              render={props => (
                <Feed
                  {...props}
                  user={user}
                  // clearUser={this.setUser} 
              />
              )}/>
    )
    : <Redirect to="/" />
  }
</>
    </Switch>
    </div>
  );
}

export default App;

