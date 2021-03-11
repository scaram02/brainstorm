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
import DarkModeToggle from "react-dark-mode-toggle";
import ProfileView from './components/ProfileView'



const App = props => {

const blankThought = {thought: '', numUpvotes: 0, upvotedBy: [], comments: []}
const [thought, setThought] = useState(blankThought)
const [user, setUser] = useState(props.user)
const [allThoughts, setAllThoughts] = useState([])
const [isDarkMode, setIsDarkMode] = useState(() => false);

const setCurrentUser = user => {
  setUser(user);
};

// const getAllThoughts = () => {
//   axios.get(`/api/thought`)
//           .then(res => setAllThoughts(res.data))
// }




  return (
    <div className="App">
      {/* <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    /> */}
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
               <Link to='/feed'>home</Link>
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

