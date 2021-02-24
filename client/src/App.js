import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import './App.css';

const App = props => {


const [user, setUser] = useState(props.user)
// console.log(user);


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

    </Switch>
    </div>
  );
}

export default App;

// //////////////////////////////

// import React from "react";
// import "./App.css";
// import { Route, Switch, Redirect } from "react-router-dom";
// import axios from 'axios'
// import Signup from "./components/Signup";
// import Home from './components/Home'



// class App extends React.Component {
//   state = {
//     user: this.props.user
//   };

 

//   setUser = user => {
//     this.setState({
//       user: user, 
//     });
//   };


//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Home}/>
//           {/* <Route exact path="/about" component={About}/> */}
//           <Route
//             exact
//             path="/signup"
//             render={props => <Signup {...props} setUser={this.setUser} />}
//           />
      

    

//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;
