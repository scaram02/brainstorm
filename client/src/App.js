import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect, Link} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Feed from './components/Feed'
import EditThought from './components/EditThought'
import ThoughtView from './components/ThoughtView'
import './App.css';
import axios from 'axios'
import ProfileView from './components/ProfileView'
import Nav from './components/FeedNav'




const App = props => {

const blankThought = {thought: '', comments: []}
const [thought, setThought] = useState(blankThought) // isnt thsi just passing a blank thought to editthought
const [user, setUser] = useState(props.user)
const [allThoughts, setAllThoughts] = useState([])

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
             <div>

           <Route
              exact
              path="/feed"
              render={props => (
                <Feed
                  {...props}
                  user={user}
                  allThoughts={allThoughts}
                  setAllThoughts={setAllThoughts}
                  // clearUser={this.setUser} 
              />
              )}/>
              <Route exact path="/thought/edit/:id" render={props => (
                <EditThought {...props} 
                allThoughts={allThoughts} 
                setAllThoughts={setAllThoughts} 
                
                thought={thought} /> )}/>

              <Route exact path="/thought/:id" render={props => (
                <ThoughtView {...props} user={user} thought={thought} 
                allThoughts={allThoughts} 
                setAllThoughts={setAllThoughts}
                />)}/>

                <Route exact path="/user/:username" render={props => (
                <ProfileView {...props} user={user} allThoughts={allThoughts} setAllThoughts={setAllThoughts}/>)}/>
                
              </div>
    )
    : <Redirect to="/" />
  }
</>
    </Switch>
    </div>
  );
}

export default App;

