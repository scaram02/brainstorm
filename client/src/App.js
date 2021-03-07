import React, {useState, useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Feed from './components/Feed'
import EditThought from './components/EditThought'
import ThoughtView from './components/ThoughtView'
import './App.css';


const App = props => {

const blankThought = {thought: '', numUpvotes: 0, upvotedBy: []}
const [thought, setThought] = useState(blankThought)
const [user, setUser] = useState(props.user)

const setCurrentUser = user => {
  setUser(user);
};


const [allThoughts, setAllThoughts] = useState([])



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
                // here begin the ones to delete
                
                />)}/>
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

